$(document).ready(function(){

  //nav collapse/open
  $(document).find(".top-nav .menu").on("click",function(){
    $(document).find("#page_nav_container .left-nav-wrap").toggleClass("collapsed");/*.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
      $(this).find(".left-nav-fab").click();
    });*/
  });
  /*$('.left-nav .left-nav-fab').floatingActionButton({
    direction:"bottom",
  });*/

  $(".left-nav a").on("click",function(e){
    $(document).find(".left-nav-wrap").addClass("collapsed");
    e.stopPropagation();
    //go to section
  })
  $(document).on("click", function(e){
    $(document).find(".left-nav-wrap").addClass("collapsed");
    e.stopPropagation();
  });
  $(".top-nav a.menu, .left-nav").on("click", function(e){
    e.stopPropagation();
  });

  $(".tooltipped").tooltip({
    delay: 50,
    customClass: "pinned",
  });
  $("#page_nav_container").on("mousewheel",function(e){
    e.preventDefault();
  })



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
