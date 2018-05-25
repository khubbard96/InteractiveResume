$(document).ready(function(){


  //render language ratings
  var langRatings = lang_rate;
  console.log(langRatings);
  var fullStar = "<i class='fas fa-star'></i>";
  var halfStar = "<i class='fas fa-star-half'></i>";
  _.each(langRatings, function(value,key){
    var langID = key;
    var langName = langRatings[key].name;
    var langRate = parseFloat(langRatings[key].rate);
    var langImg = langRatings[key].img;
    var starsFull = "";
    var starsEmpt = "";
    for(var i = langRate; i > 0; i--){
      if(i/0.5 == 1){
        starsFull += halfStar;
      }
      else {
        starsFull += fullStar;
      }
    }
    var newCard = $($("#lang_desc_card").html());
    newCard.find(".card-image img").attr("src", langImg);
    newCard.find(".lang-name").html(langName);
    newCard.find(".rating").html(starsFull);
    var allRows = $(document).find("#experience .section-content .row");
    var appended = false;
    var count = 0;
    while(!appended){
      var row = allRows.eq(count);
      if(langRate >= row.data("level")){
        appended = true;
        row.append(newCard);
      }
      else count++;
    }
  });
});

//simple function to determine int/float
function isInt(n){return n % 1 === 0;}
