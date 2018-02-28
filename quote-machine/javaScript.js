//Random color funtion to the elements
function chBackcolor() {
  var randomColor = getRandomColor();
   document.body.style.background =randomColor;
  document.getElementById("facebook").style.background=randomColor;
  document.getElementById("twitter").style.background=randomColor;
  document.getElementById("new-quote").style.background=randomColor;
}

//generate a random color
function getRandomColor() {
  var cssHSL = "hsl(" + 360 * Math.random() + ',' +
      (25 + 70 * Math.random()) + '%,' +
      (55 + 10 * Math.random()) + '%)';
      return cssHSL;
  }
//fade out query effect
/*
  $(".quote-btn").click(function(){
    $("body").fadeOut();
    $("#facebook").fadeOut();
    $("#twitter").fadeOut("slow");
    $("#new-quote").fadeOut(3000);
  });
  */
