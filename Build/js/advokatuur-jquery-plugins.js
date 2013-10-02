//call bootstrap js
//*****************

//Popover for help
  $('.glyphicon-info-sign').popover();


//Call external plugins
//****************

 //bootstrap-modal + bootbox alert
 $(document).on("click", "#js-login-mobile-button", function(e) {
  bootbox.alert("Sõnum on saadetud Teie telefonile. Teie kontrollkood on: XXXXX. Kontrollige koodi! Mobiil-IDga sisselogimiseks tuleb Teil oma telefoni sisestada Mobiil-ID PIN1-kood pärast seda, kui olete saanud SMS-i sama kontrollkoodiga, mida näete siin.", function() {
  });
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
$(document).on("click", "#js-cancel-reg", function(e) {
  bootbox.alert("Registreerimine katkestatud");
  window.location.href='https://www.advokatuur.ee/est/avaleht';

});
$(document).on("click", "#js-confirm-reg", function(e) {
  $('#register').hide();
  $('.pagename h1').html('Registreerimise kinnitus');
  $('#registered').delay(2000).show();
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
    date: '10/03/2013 23:30:00',
    offset: +3
}, function () {
    alert('Aitäh, eksamiks ettenähtud aeg on läbi!');
});


// Large checkboxes
$().ready(function(){
  $('input.check-lg').prettyCheckable();
});

// Dynamic paging for Test Rules
$('.field1').bootpag({
    total: 10,
    page: 1
  }).on("page", function(event, num){
      $(".content1").html("Test question " + num); // or some ajax content loading...
  });
$('.field2').bootpag({
    total: 10,
    page: 1
  }).on("page", function(event, num){
      $(".content2").html("Test question " + num); // or some ajax content loading...
  });
$('.field3').bootpag({
    total: 9,
    page: 1
  }).on("page", function(event, num){
      $(".content3").html("Test question " + num); // or some ajax content loading...
  });
$('.field4').bootpag({
    total: 4,
    page: 1, 
    maxVisible: 3
  }).on("page", function(event, num){
      $(".content4").html("Test question " + num); // or some ajax content loading...
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
