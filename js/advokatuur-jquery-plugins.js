//call bootstrap js
//*****************

//Popover for help
  $('.icon-info-sign').popover();
  $('.tip').tooltip();

//Call external plugins
//****************
// Textarea plugin
$('.js-textarea').wysihtml5({
  "image": false
});

// It is conflicting with the textarea plugin. http://usablica.github.io/widearea/
wideArea();

// Better selectbox
$('.selectpicker').selectpicker({autoclose : true});

// draggable http://johnny.github.io/jquery-sortable/#home
$('.draggable').sortable({
  containerSelector: 'table',
  itemPath: '> tbody',
  itemSelector: 'tr',
  placeholder: '<tr class="placeholder"/>',
  exclude: '.js-fixed',
})

// xeditable
$.fn.editable.defaults.mode = 'popup';
$(document).ready(function() {
    $('#js-lastname').editable(

      );
    $('.js-place').editable(

      );
});

    $('.editableinline').editable(
      {mode: 'inline'}
      );
    $('#outcome').editable({
        mode: 'inline',
        source: [ {value: 1, text: '75%, arvestatud'}, {value: 2, text: 'Mitte ilmunud'}, {value: 3, text: 'Kõrvaldatud'}]
      });

 $('#state').editable({
        source: [{value: 1, text: 'Administraator'}, {value: 2, text: 'Eksamineeritav'}, {value: 3, text: 'Komisjoni liige'}, {value: 4, text: 'Kantselei töötaja'}]
    });

 $.mockjax({
    url: '/post'
 });

 $(function(){
     $('.place').editable({
         source: [{value: 1, text: 'Rävala pst 3, Tallinn ruum 2'}, {value: 2, text: 'Rävala pst 3, Tallinn ruum 3'}]
     });
 });

 $(function () {
     $('.committee').editable({
         pk: 1,
         limit: 3,
         source: [
          { value: 1, text: 'Aadu Luberg' },
          { value: 2, text: 'Enno Loonurm' },
          { value: 3, text: 'Gunnar Vaikmaa' },
          { value: 4, text: 'Heli Sepp' },
          { value: 5, text: 'Mari-Ann Simovart' },
          { value: 6, text: 'Meeli Kaur' },
          { value: 7, text: 'Toomas Tamme' },
          { value: 8, text: 'Toomas Taube' },
          { value: 9, text: 'Urmas Ustav' }
         ]
     });
 });

 $(function () {
     $('.kaasus').editable({
         pk: 1,
         limit: 3,
         source: [
          
          { value: 1, text: 'Arvestatud' },
          { value: 3, text: 'Mitte ilmunud' },
          { value: 4, text: 'Kõrvaldatud' }
         ]
     });
 });

// START: xeditable aadress ehk toimumiskoha lisamine
 $(function () {
     $('.js-toimumiskoht').editable({
         url: '/post',
         title: 'Sisesta toimumiskoht ja kohtade arv #',
         value: {
             street: "Rävala pst 3, Tallinn",
             building: ""
         }
     });
 });
 (function ($) {
     "use strict";

     var Address = function (options) {
         this.init('address', options, Address.defaults);
     };

     //inherit from Abstract input
     $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

     $.extend(Address.prototype, {
         render: function () {
             this.$input = this.$tpl.find('input');
         },

         value2html: function (value, element) {
             if (!value) {
                 $(element).empty();
                 return;
             }
             var html = '<i class="icon-plus-sign"></i>';
             $(element).html(html);
         },

         html2value: function (html) {
             return null;
         },

         value2str: function (value) {
             var str = '';
             if (value) {
                 for (var k in value) {
                     str = str + k + ':' + value[k] + ';';
                 }
             }
             return str;
         },

         str2value: function (str) {
             return str;
         },

         value2input: function (value) {
             if (!value) {
                 return;
             }
             this.$input.filter('[name="street"]').val(value.street);
             this.$input.filter('[name="building"]').val(value.building);
         },

         input2value: function () {
             return {
                 street: this.$input.filter('[name="street"]').val(),
                 building: this.$input.filter('[name="building"]').val()
             };
         },

         activate: function () {
             this.$input.filter('[name="street"]').focus();
         },

         autosubmit: function () {
             this.$input.keydown(function (e) {
                 if (e.which === 13) {
                     $(this).closest('form').submit();
                 }
             });
         }
     });

     Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
         tpl: '<div class="editable-address"><label><span>Toimumiskoht: </span><select name="street">' +
                                                                                 '<option>Rävala pst 3, Tallinn</option>' +
                                                                                 '<option>Rävala pst 3, Tallinn</option>' +
                                                                                '</select></label></div>' +
              '<div class="editable-address"><label><span>Kohtade arv: </span><input type="text" name="building" class="input-small"></label></div>',

         inputclass: ''
     });

     $.fn.editabletypes.address = Address;

 }(window.jQuery));
// END: xeditable aadress ehk toimumiskoha lisamine

$('table').on('click', '.icon-trash', function(e){

        $(this).closest('tr').remove()

})

$('#add-row').click(function(){
  $("#hiderow").clone().removeAttr("id").prependTo( $("#hiderow").parent(), $("#hiderow a.myeditable ").html("") );

//init editables 
$('.myeditable').editable({
    url: '/post' //this url will not be used for creating new user, it is only for update
});
 
//make username required
$('#new_forename').editable('option', 'validate', function(v) {
    if(!v) return 'Nõutav väli!';
});

$('#new_surname').editable('option', 'validate', function(v) {
    if(!v) return 'Nõutav väli!';
});

//automatically show next editable
$('.myeditable').on('save.newuser', function(){
    var that = this;
    setTimeout(function() {
        $(that).closest('td').next().find('.myeditable').editable('show');
    }, 200);
});

// NO NEED REALLY
// $.mockjax({
//     url: '/post',
//     pk: 1,
//     responseTime: 400,
//     response: function(settings) {
//         if(settings.data.value == 'err') {
//            this.status = 500;  
//            this.responseText = 'Validation error!'; 
//         } else {
//            this.responseText = '';  
//         }
//     }
// });

$.mockjax({
  url: '/role',
  responseTime: 400,
  responseText: [{value: 1, text: 'Administraator'}, {value: 2, text: 'Eksamineeritav'}, {value: 3, text: 'Komisjoni liige'}, {value: 4, text: 'Kantselei töötaja'}]
});

});

// Max length chars http://jsfiddle.net/timur/47a7A/
$(document).ready(function() {
    var text_max = 50000;
    $('#textarea_feedback').html('Jäänud on ' + text_max + ' tähemärki');

    $('#writtentextarea').keyup(function() {
        var text_length = $('#writtentextarea').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html('Jäänud on ' + text_remaining + ' tähemärki');
    });
});
 //bootstrap-modal + bootbox alert

//hide some divs onload
$(document).ready(function () {
  $('#register, #registered').hide();
  $(' #test-end, #written-start').hide();
  $('#test, #test-end').hide();
  
  bootbox.addLocale('en', {
      CONFIRM: 'Kinnita',
      CANCEL: 'Loobu'
  });
 });

//made by: Mari-Liis
function handleRadiobuttonClick() {
            $("#inputDate").prop('disabled', !$('#radios-0').is(':checked'));
            $("#selectbasicDisable").prop('disabled', !$('#radios-0').is(':checked'));
}

//autent page buttons actions
$(document).on("click", "#js-login-mobile-button", function (e) {
  bootbox.alert("Sulle pole veel eksami kohta käivaid andmeid sisestatud. Palun pöördu hiljem tagasi.");
});
$(document).on("click", "#js-login-id-button", function (e) {
    bootbox.prompt("Palun sisesta PIN1", function (result) {
    if (result === null) {
      bootbox.alert("Logimine ebaõnnestus! Veenduge, et kas id kaart on korralikult lugejas või sisestatud PIN kood oli õige. Vea kordumisel palun sulgege brauser ja proovige algusest.");
    } else if (result > 0) {
      $('#welcome').hide(); 
      // $('.pagename h1').html('Registreerimine');
      $('#register').show();
    }
  });
});

// registration page buttons actions
$(document).on("click", "#js-cancel-reg", function(e) {
  e.preventDefault();
  bootbox.confirm("Registreerimine katkestatud. Oled kindel et soovid lõpetada?",
    function(result) {
      if (result) {
      window.location.href='https://www.advokatuur.ee/est/avaleht';
      }
    });
});
$(document).on("click", "#js-confirm-reg", function(e) {
  $('#register').hide();
  $('#registered').show();
});


//confirmation page buttons actions
$("#js-delete-reg").click(function (e) {
  e.preventDefault();
  bootbox.confirm("Oled kindel, et soovid registreeringust loobuda?",
      function (result) {
      if (result) {
              window.location.href = 'https://www.advokatuur.ee/est/avaleht';
      }
    });
});

$("#js-end-test").click(function (e) {
  e.preventDefault();
  bootbox.confirm("Peale testi lõpetamist kinnitatakse testi tulemus ning hiljem vastuseid muuta ei saa. Oled kindel, et soovid testi esitada?",
      function (result) {
      if (result) {
      $('#test').hide(); $('.pagename h1').hide(); $('#test-end').show();
      }
    });
});

//writtentest page buttons actions
$("#js-cancel-writtentest").click(function (e) {
  e.preventDefault();
  bootbox.confirm("Oled kindel, et soovid eksami katkestada? Tulemusi ei salvestata. Kui soovid pausi teha ja hiljem eksamit jätkata, salvesta tekst ja logi ülamenüüst välja.",
      function (result) {
      if (result) {
              window.location.href = 'https://www.advokatuur.ee/est/avaleht';
      }
    });
});

$("#js-confirm-writtentest").click(function (e) {
  e.preventDefault();
  bootbox.confirm("Oled kindel, et soovid kaasuse esitada? Peale esitamist pole enam võimalik teksti muuta ja kirjalik eksam on lõpetatud.",
      function (result) {
      if (result) {
              $('#written-test').hide(); $('.pagename h1').hide(); $('#written-test-end').show();
      }
    });
});

// <!--                 <a id="login" href="#" onclick="$('#login-box').slideToggle();
//                 return false;">
//               </a> -->

// Fixed position taskbar for Test Rules
//    $(function() {
//     $('#nav-wrapper').height($("#nav").height());
//     $('#nav').affix({
//         offset: { top: $('#nav').offset().top }
//     });
// });

// Timer for Test Rules
$('.countdown').downCount({
    date: '12/12/2013 23:30:00',
    offset: +3
}, function () {
    bootbox.alert('Aitäh, eksamiks ettenähtud aeg on läbi!');
});


// Large checkboxes
$().ready(function () {
  $('input.check-lg').prettyCheckable();
});


// One Page Scroll
//   $(".main").onepage_scroll({
//    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
//    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
//    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
//    updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
// });



if (typeof bindPages !== 'undefined' && bindPages) {
    function showPage(id) {
        if (id && $(id).length > 0) {
            $('section:not(' + id + ')').hide();
            $(id).show();
        }
        else {
            $('section:not(:first)').hide();
            $('section:first').show();
        }

        window.setTimeout(function () { window.scrollTo(0, 0); }, 10);
    }
    
    showPage(location.hash);
        
    $(window).on('hashchange', function () {
        showPage(location.hash);
        $(".hiddenOnPage").show();
        $(".shownOnPage").hide();
    });
}

function hideOnPage(jqElem) {
    $(jqElem).hide().addClass("hiddenOnPage");
}

function showOnPage(jqElem) {
    $(jqElem).show().addClass("shownOnPage");
}

function shownOnPage2(jqElem,newclass) {
	$(jqElem).show().removeClass("hidden").removeClass("hiddenOnPage").addClass(newclass);
}

function decreaseCount(id) {
	var value = $(id).text();
	value = value - 1;
	$(id).text(value);
}

function resetValues() {
	$('#etla').text(5); $('#etls').text(1); $('#etl').text(4);
	$('#etqa').text(5); $('#etqs').text(3); $('#etq').text(4);
	$('#ewa').text(5); $('#ews').text(1); $('#ew').text(4);
	$('#oela').text(10); $('#oel').text(9);
}

function calculateTotal() {
	var total = parseInt($('#v1t').val(),10);
	total += parseInt($('#v2t').val(), 10);
	total += parseInt($('#v3t').val(), 10);
	total += parseInt($('#v4t').val(), 10);
	$('#totalq').text(total);
	calculatePercent('#totalq', '#totalc', '#totalp')
}

function calculatePercent(totalElemId, partialElemId, percentElemId) {
	var total = 0;
	if (totalElemId == '#totalq') {
		total = parseInt($(totalElemId).text(), 10);
	} else {
		total = parseInt($(totalElemId).val(), 10);
	}
	var partial = parseInt($(partialElemId).val(), 10);
	var percent = parseInt((partial*100/total),10);
	$(percentElemId).text(percent);
}

$('.date').datepicker();

$(function () {
    $('table.datatable').each(function () {
        $this = $(this);
        var hasNrs = $this.hasClass("datatable-nr");
        var hasPaging = $this.hasClass("datatable-paging");
        $(this).dataTable({
            "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6 pull-right'p>>",
            "sPaginationType": "bootstrap",
            "bFilter": false,
            "bPaginate": hasPaging,
            "fnDrawCallback": function (oSettings) {
                if (hasNrs) {
                    /* Lisab järjekorra numbrid esimesse tulpa */
                    if (oSettings.bSorted || oSettings.bFiltered) {
                        for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++) {
                            this.fnUpdate(i + 1, oSettings.aiDisplay[i], 0, false, false);
                        }
                    }
                }
            },
            "aLengthMenu": [[5, 10, 25, 50], [5, 10, 25, 50]],
            "aoColumnDefs": hasNrs
                ? [
                    { "bSortable": false, "sClass": "index", "aTargets": [0] },
                    { "bSortable": false, "aTargets": ["js-no-sort"] }
                ]
                : [{ "bSortable": false, "aTargets": ["js-no-sort"] }],
            "oLanguage": {
                "sProcessing": "Laadimine...",
                "sLengthMenu": "N&auml;ita kirjeid _MENU_ kaupa",
                "sZeroRecords": "Tulemusi ei leitud.",
                "sInfo": (hasPaging ? "Kokku: _TOTAL_ kirjet (kuvatud _START_-_END_)" : ""),
                "sInfoEmpty": "Otsinguvasteid ei leitud",
                "sInfoFiltered": " - filteeritud _MAX_ kirje seast.",
                "sSearch": "Otsi k&otilde;ikide tulemuste seast:",
                "oPaginate": {
                    "sFirst": "Algus",
                    "sPrevious": "Eelmine",
                    "sNext": "J&auml;rgmine",
                    "sLast": "Viimane"
                }
            }
        });
    });
});
