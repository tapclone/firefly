// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");

var modalImg = document.getElementById("img01");

function enlarge() {
  modal.style.display = "block";
  modalImg.src = img1.src;
  captionText.innerHTML = this.alt;
}

function enlarge2() {
  modal.style.display = "block";
  modalImg.src = img2.src;
  captionText.innerHTML = this.alt;
}

function enlarge3() {
  modal.style.display = "block";
  modalImg.src = img3.src;
  captionText.innerHTML = this.alt;
}

function enlarge4() {
  modal.style.display = "block";
  modalImg.src = img4.src;
  captionText.innerHTML = this.alt;
}

function enlarge5() {
  modal.style.display = "block";
  modalImg.src = img5.src;
  captionText.innerHTML = this.alt;
}

function enlarge6() {
  modal.style.display = "block";
  modalImg.src = img6.src;
  captionText.innerHTML = this.alt;
}

function enlarge7() {
  modal.style.display = "block";
  modalImg.src = img7.src;
  captionText.innerHTML = this.alt;
}

function enlarge8() {
  modal.style.display = "block";
  modalImg.src = img8.src;
  captionText.innerHTML = this.alt;
}

function enlarge9() {
  modal.style.display = "block";
  modalImg.src = img9.src;
  captionText.innerHTML = this.alt;
}

function enlarge10() {
  modal.style.display = "block";
  modalImg.src = img10.src;
  captionText.innerHTML = this.alt;
}

function enlarge11() {
  modal.style.display = "block";
  modalImg.src = img11.src;
  captionText.innerHTML = this.alt;
}

function enlarge12() {
  modal.style.display = "block";
  modalImg.src = img12.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
