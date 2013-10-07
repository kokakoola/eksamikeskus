//call bootstrap js
//*****************

//Popover for help
  $('.glyphicon-info-sign').popover();

  $('.test-sidenav').scrollspy();

  $('.test-sidenav').affix();


//Call external plugins
//****************

 //bootstrap-modal + bootbox alert

//hide some divs onload
  $( document ).ready( function () {
  $('#register, #registered').hide();
  $('#test').hide();
 });

//autent page buttons actions
 $(document).on("click", "#js-login-mobile-button", function(e) {
  bootbox.alert("Sulle pole veel eksami kohta käivaid andmeid sisestatud. Palun pöördu hiljem tagasi.");
});
 $(document).on("click", "#js-login-id-button", function(e) {
  bootbox.prompt("Palun sisesta PIN1", function(result) {
    if (result === null) {
      bootbox.alert("Logimine ebaõnnestus! Veenduge, et kas id kaart on korralikult lugejas või sisestatud PIN kood oli õige. Vea kordumisel palun sulgege brauser ja proovige algusest.");
    } else if (result > 0) {
      $('#welcome').hide(); 
      $('.pagename h1').html('Registreerimine');
      $('#register').show();
    }
  });
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


//confirmation page buttons actions
$("#js-delete-reg").click(function(e){
  e.preventDefault();
  bootbox.confirm("Oled kindel, et soovid registreeringust loobuda?",
    function(result) {
      if (result) {
      window.location.href='https://www.advokatuur.ee/est/avaleht';
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
    date: '10/10/2013 23:30:00',
    offset: +3
}, function () {
    bootbox.alert('Aitäh, eksamiks ettenähtud aeg on läbi!');
});


// Large checkboxes
$().ready(function(){
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
