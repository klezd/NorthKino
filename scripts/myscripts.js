$(document).ready(function(){
  console.log("b");
  //sign in
  var signinButton = document.getElementById("sign-inButton");
  var signinModal = document.getElementById("sign-in");
  signinButton.onclick = function() {
    signinModal.style.display = "block";
  }
  window.onclick = function(event) {
    if ((event.target == signinModal)||(event.target == signupModal)||(event.target == trailerModal)){
      signinModal.style.display = "none";
      signupModal.style.display = "none";
      trailerModal.style.display = "none";
    }
  }
  //sign up
  var signupButton = document.getElementById("sign-upButton");
  var signupModal = document.getElementById("sign-up");
  signupButton.onclick = function() {
    signupModal.style.display = "block";
    signinModal.style.display = "none";
  }
  // Trailer btn
  var trailerButton = document.getElementById("trailerBtn");
  var trailerModal = document.getElementById("trailerModal");
  if (trailerButton != null) {
    trailerButton.onclick = function() {
      console.log("a");
      trailerModal.style.display = "block";
    }
  }
});
//show password
function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//form
$(document).ready(function(){
    $(".inputfield").focus(function(){
        $(".inputLabel").fadeTo(1000,1).fadeIn(500).css("display", "block");
    });
});

//show and hide tabSlideshow
$(document).ready(function(){
  $(".tab-links a").on("click", function(e){
    var currentTab = $(this).attr("href");
    //show and hide tabs
    $('.tab'+currentTab).show(600).siblings().hide(600);
    //add active class
    $(this).parent('li').addClass("active").siblings().removeClass("active");
    //Prevent Default Anchor Link Behaviour
    e.preventDefault();
  });
});
// Javascript to enable link to tab
function changeTab(){
  var url = document.location.toString();
  if (url.match('#')) {
      $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
  }
}

$(document).ready(function () {
  window.addEventListener("hashchange", changeTab);
  changeTab();
});
// script works for casourel movies tabs
$(document).ready(function() {
  $('#media').carousel({
      pause: true,
      interval: false,
    })
});
$(document).ready(function() {
  $('#media2').carousel({
      pause: true,
      interval: false,
    })
});


$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
