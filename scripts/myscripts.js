$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function(){
    $(".inputfield").focus(function(){
        $(".inputLabel").fadeTo(200,1).fadeIn(500).css("display", "block");
    });
});

//sign in MODALS
var signinButton = document.getElementById("sign-inButton");
var signinModal = document.getElementById("sign-in");
var closeButton = document.getElementsByClassName("close")[0];

signinButton.onclick = function() {
  signinModal.style.display = "block";
}

closeButton.onclick = function() {
  signinModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
}

function openModal() {
  signinModal.style.display = "block";
}
