$(document).ready(function(){
  $(".design").click(function(){
    $(".design").hide();
    $(".designp").toggle();
    $(".designp").show();
  })

  $(".designp").click(function(){
    $(".design").toggle();
    $(".designp").hide();
    $(".design").show();
  })

  $(".dev").click(function(){
    $(".dev").hide();
    $(".devp").toggle();
    $(".devp").show();
  })

  $(".devp").click(function(){
    $(".dev").toggle();
    $(".devp").hide();
    $(".dev").show();
  })

  $(".prod").click(function(){
    $(".prod").hide();
    $(".prodp").toggle();
    $(".prodp").show();
  })

  $(".prodp").click(function(){
    $(".prod").toggle();
    $(".prodp").hide();
    $(".prod").show();
  });

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
  var user = document.getElementById('contactform').reset();
  if (input1 && email != ''){
      alert('Thanks ' +   input1 + " we've got you covered.");
  }else {
    alert ('Invalid input')
  }
   });
});