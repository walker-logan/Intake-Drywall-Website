// main visual typewriter animation

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// scrolling effect on header

function parallaxEffect1() {
  var speed = 0.5;
  var header = document.querySelector("header");
  var windowYOffset = window.pageYOffset;
  var bgPosition = "50% " + windowYOffset * speed + "px";
  header.style.backgroundPosition = bgPosition;
}
window.addEventListener("scroll", parallaxEffect1);

// scrolling effect on music section

function parallaxEffect2() {
  var speed = 0.6;
  var musicSection = document.querySelector(".music-section");
  var windowYOffset = window.pageYOffset;
  var bgPosition = "50% " + windowYOffset * speed + "px";
  musicSection.style.backgroundPosition = bgPosition;
}
window.addEventListener("scroll", parallaxEffect2);

// making sections fade into view

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);})
