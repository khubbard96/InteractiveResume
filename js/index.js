var container;
var mainview;
var navigation;
var navigationButton;

$(document).ready(function() {

  container = $(document).find(".bg");
  mainview = $(document).find(".mainview");
  navigation = $(document).find(".navigation-menu");
  navigationButton = $(document).find("#activate_navigation");

  //animation finishing
  var $typer = $(document).find(".typewriter .tp-content");
  var $flyupText = $(document).find(".flyup-text");
  $typer.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
    $flyupText.addClass("on");
  });
  $flyupText.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    $typer.addClass("off");
  });


  //navigation
  $(document).find(".navigation-button").on("click", function(e) {
    if(navigation.hasClass("active")) closeNavigation();
    else openNavigation();
  });
  mainview.on("click",closeNavigation);
  navigation.find(".collection .collection-item").on("click", function(e) {changeNavigationView(e)});
});


function closeNavigation() {
  navigationButton.removeClass("disabled");
  navigation.removeClass("active");
};
function openNavigation() {
  navigationButton.addClass("disabled");
  navigation.addClass("active")
}
function changeNavigationView(e) {
  navigation.find(".collection .collection-item").removeClass("current");
  $(e.currentTarget).addClass("current");
  //navigation.find(".collection .collection-item[data-id='" + navButton + "']")
  //scroll to appropriate section

  //if scrolled to manually, will need to change the active button automatically
}
