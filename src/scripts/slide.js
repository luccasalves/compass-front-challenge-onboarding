const buttonContinue = document.querySelector("#btn-continue");
const buttonSkip = document.querySelector("#btn-skip");

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");

const bullet1 = document.querySelector("#c1");
const bullet2 = document.querySelector("#c2");
const bullet3 = document.querySelector("#c3");

const slides = [slide1, slide2, slide3];

slide1.setAttribute("checked", "true");

function verificationStatePosition(position) {
  if (position == "1") {
    buttonContinue.innerHTML = "Back";
    return;
  }
  if (position == "2") {
    buttonContinue.innerHTML = "Continue";
    slide1.checked = true;
    return;
  }
}

function goSlide(slide) {
  slide.checked = true;
}

function nextSlide() {
  for (const slide of slides) {
    if (slide.checked == true) {
      const position = slides.indexOf(slide);
      verificationStatePosition(position);
      slides[position + 1].checked = true;
      break;
    }
  }
}
function skiptSlide() {
  buttonContinue.innerHTML = "back";
  slide3.checked = true;
}

setInterval(() => {
  nextSlide();
}, 7000);

buttonContinue.addEventListener("click", nextSlide);
buttonSkip.addEventListener("click", skiptSlide);

bullet1.addEventListener("click", () => goSlide(slide1));
bullet2.addEventListener("click", () => goSlide(slide2));
bullet3.addEventListener("click", () => goSlide(slide3));
