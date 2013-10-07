

function QuestionListCtrl($scope) {
  $scope.tests = [
    {"question": "Käsipant, samuti õiguste pant lõpeb",
     "answer1": "pandiga tagatud nõude loovutamisel",
     "answer2": "pandi registrist kustutamisel",
     "answer3": "pandi eseme üleandmisel",
     "answer4": "kui pandipidaja teatab pantijale kirjalikult pandi vabastamisest"
   },
   {
    "question": "Nõude aegumine peatub mh",
    "answer1": "hagiavalduse esitamisega",
    "answer2": "nõude tunnustamisega kohustatud isiku poolt",
    "answer3": "läbirääkimiste pidamisega läbirääkimiste toimumise ajaks",
    "answer4": "nõude loovutamisega"
   },
   {
    "question": "Tsiviilasjades võib maakohtu otsuse peale apellatsioonkaebuse esitada",
    "answer1": "10 päeva jooksul alates otsuse apellandile kättetoimetamisest",
    "answer2": "15 päeva jooksul alates otsuse apellandile kättetoimetamisest",
    "answer3": "20 päeva jooksul alates otsuse apellandile kättetoimetamisest",
    "answer4": "30 päeva jooksul alates otsuse apelllandile kättetoimetamisest"
   }
  ];
}

 //bootstrap-modal + bootbox alert
 $(document).on("click", "#js-login-mobile-button", function(e) {
  bootbox.alert("Sõnum on saadetud Teie telefonile. Teie kontrollkood on: XXXXX.  Kontrollige koodi! Mobiil-IDga sisselogimiseks tuleb Teil oma telefoni sisestada Mobiil-ID PIN1-kood pärast seda, kui olete saanud SMS-i sama kontrollkoodiga, mida näete siin.", function() {
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
  $('#registered').show();
});




