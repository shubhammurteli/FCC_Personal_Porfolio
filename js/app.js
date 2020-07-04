const display = document.getElementById("text");

const text = ["https://twitter.com/Shubz_12", "https://www.instagram.com/19_shubhamm/?hl=en", "https://codepen.io/19_cipher", "https://github.com/shubhammurteli", "shubhammurteli19@gmail.com"]

const logo = document.querySelectorAll(".contact-logo"); // Gives an array of the elements with class ".contact-logo"

logo.forEach(function (pic) {
  pic.addEventListener("mouseover", function(e) {
    const clicked = e.currentTarget.id; //gives the id of the element which triggered the event
  if (clicked == "twitter") {
    display.innerHTML = text[0]
  }
  else if (clicked == "instagram") {
    display.innerHTML = text[1]
    cleartext(text[1]); 
  }
  else if (clicked == "codepen") {
    display.innerHTML = text[2]
    cleartext(text[2]);
  }
  else if (clicked == "github") {
    display.innerHTML = text[3]
    cleartext(text[3]);
  }
  else {
    display.innerHTML = text[4]
  }
  });
});
