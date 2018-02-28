function chBackcolor() {
  var randomColor = getRandomColor();
   document.body.style.background =randomColor;
  document.getElementById("facebook").style.background=randomColor;
  document.getElementById("twitter").style.background=randomColor;
  document.getElementById("new-quote").style.background=randomColor;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
