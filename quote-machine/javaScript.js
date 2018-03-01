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

function chBackcolor() {
  var randomColor = getRandomColor();
   document.body.style.background =randomColor;
  document.getElementById("quote").style.color=randomColor;
  document.getElementById("author").style.color=randomColor;
  document.getElementById("facebook").style.background=randomColor;
  document.getElementById("twitter").style.background=randomColor;
  document.getElementById("new-quote").style.background=randomColor;
}

function getRandomColor() {
  var cssHSL = "hsl(" + 360 * Math.random() + ',' +
      (25 + 70 * Math.random()) + '%,' +
      (55 + 10 * Math.random()) + '%)';
      return cssHSL;
  }

//change quote when button is clicke - only button is new quote button
$(document).ready(function() {
  $("button").click(function test() {
    $('#quote, #author').fadeOut(500, function() {
        var randomQuote = getRandomQuote();
        var newQuote = randomQuote[0];
        var newAuthor = randomQuote[1];

        $("#quote").text(newQuote).fadeIn(1000);
        $("#author").text(newAuthor).fadeIn(1000);
    });
  });
});


//randomly select quote from array and return it
function getRandomQuote() {
  var quoteWithName = quoteArray[Math.floor(Math.random() * 10)];
  return quoteWithName;
}
