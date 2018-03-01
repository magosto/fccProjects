//Quote array
var quoteArray = [ ["Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.", "- Mosher’s Law of Software Engineering"],
["I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.", "- Oktal"],
["Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "- Bill Gates"],
["FORTRAN is not a flower but a weed — it is hardy, occasionally blooms, and grows in every computer.", "- Alan J. Perlis"],
["Good design adds value faster than it adds cost.", "- Thomas C. Gale"],
["Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck.", "- Cory Dodt"],
["Talk is cheap. Show me the code.","- Linus Torvalds"],
["In theory, theory and practice are the same. In practice, they’re not.","- Yoggi Berra"],
["You can’t have great software without a great team, and most software teams behave like dysfunctional families.","- Jim McCarthy"],
["The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.","- Seymour Cray"],
["I don't care if it works on your machine! We are not shipping your machine!","- Vidiu Platon"] ];

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

//change quote - passed in a boolean
function changeQuote(toChange) {
    //document.getElementById('quote').innerHTML = "test";
    //var oldQuote = document.getElementById('quote').innerHTML;
    //var oldAuthor = document.getElementById('author').innerHTML;
    var randomQuote = getRandomQuote();
    var newQuote = randomQuote[0];
    var newAuthor = randomQuote[1];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

}

//randomly select quote from array and return it
function getRandomQuote() {
  var quoteWithName = quoteArray[Math.floor(Math.random() * 10)];
  return quoteWithName;
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
