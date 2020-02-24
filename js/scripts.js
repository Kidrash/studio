$(document).ready(function(){
   $(".designp").click(function(){
    $(".designp").hide();
    $("#design").toggle();
    $("#design").show();
  })
 $("#design").click(function(){
    $("#design").hide();
    $(".designp").toggle();
    $(".designp").show();
  })

  $(".devp").click(function(){
    $("#dev").toggle();
    $(".devp").hide();
    $("#dev").show();
  })

 $("#dev").click(function(){
    $("#dev").hide();
    $(".devp").toggle();
    $(".devp").show();
  })

    $(".prodp").click(function(){
    $("#prod").toggle();
    $(".prodp").hide();
    $("#prod").show();
  });

$("#prod").click(function(){
    $("#prod").hide();
    $(".prodp").toggle();
    $(".prodp").show();
  })

  $('.hov').hover(function () {
    $(this).animate({opacity:'0.3'});
    },
    function () {
    $(this).animate({opacity:'0'});
});

$("button").click(function(event){
  event.preventDefault();
  var input1 = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var user = document.getElementById('contact').reset();
  if (input1 && email != ''){
      alert('Thanks ' +   input1 + " we'll start working on your project as soon as possible!!");
  }else {
    alert ('Invalid input')
  }
   });
});