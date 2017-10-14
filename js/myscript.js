// pic slide
var slideIndex = 0;
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("picdetail");
  if (n > x.length - 1) { slideIndex = 0; }
  if (n < 0) { slideIndex = x.length-1 }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  console.log(slideIndex);
  x[slideIndex].style.display = "block";
  y[slideIndex].style.display = "block";
}


