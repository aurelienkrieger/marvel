var personnage_actif = "";

$("#img1").hide();
$("#img2").hide();
$("#img3").hide();

$("#show1").click(function(){
  $("#img1").show();
  $("#img2").hide();
  $("#img3").hide();
  $(document.body).css("background-color", "#ed9f7e");
  personnage_actif = "1";
});

$("#show2").click(function(){
  $("#img2").show();
  $("#img1").hide();
  $("#img3").hide();
  $(document.body).css("background-color", "#88d7e3");
  personnage_actif = "2";
});

$("#show3").click(function(){
  $("#img3").show();
  $("#img1").hide();
  $("#img2").hide();
  $(document.body).css("background-color", "#83f57a");
  personnage_actif = "3";
});

function changer_nom() {
  var nouveau_nom = $("#input_nom").val();
  console.log(nouveau_nom);
  $("#p"+personnage_actif).html(nouveau_nom);
}
