//call bootstrap js
//*****************

//Popover for help
  $('.glyphicon-info-sign').popover();

  // $('.make-switch').bootstrapSwitch('toggleActivation');


//Call external plugins
//****************

 //bootstrap-modal + bootbox alert

//hide some divs onload
$(document).ready(function () {
  $('#register, #registered').hide();
  $('#test, #test-end, #written-start').hide();
  // $('#test-start, #test-end').hide(); to access test directly
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
      $('.pagename h1').html('Registreerimine');
      $('#register').show();
    }
  });
});

$('.js-textarea').wysihtml5({
  "image": false
});
//registration page buttons actions
// $(document).on("click", "#js-cancel-reg", function(e) {
//   e.preventDefault();
//   bootbox.confirm("Registreerimine katkestatud. Oled kindel et soovid lõpetada?",
//     function(result) {
//       if (result) {
//       window.location.href='https://www.advokatuur.ee/est/avaleht';
//       }
//     });
// });
// $(document).on("click", "#js-confirm-reg", function(e) {
//   $('#register').hide();
//   $('.pagename h1').html('Registreerimise kinnitus');
//   $('#registered').show();
// });
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
  $('.pagename h1').html('Registreerimise kinnitus');
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

// Better selectbox
$('.selectpicker').selectpicker();

if (bindPages) {
    function showPage(id) {
        if (id && $(id).length > 0) {
            $('section:not(' + id + ')').hide();
            $(id).show();
        }
        else {
            $('section:not(:first)').hide();
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
