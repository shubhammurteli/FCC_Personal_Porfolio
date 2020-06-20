const display = document.getElementById("text");
const github = "https://github.com/shubhammurteli";
const twitter = "https://twitter.com/Shubz_12";
const insta = "https://www.instagram.com/19_shubhamm/?hl=en";
const codepen = "https://codepen.io/19_cipher";
const gmail = "shubhammurteli19@gmail.com";
const logo = document.querySelectorAll(".contact-logo");

logo.forEach(function (pic) {
  pic.addEventListener("mouseover", function(e) {
    const image = e.currentTarget.id; //gives the id of the element which triggered the event
    if(image == "twitter"){
      display.innerHTML = twitter;
    }
    else if(image == "instagram"){
      display.innerHTML = insta;
    }
    else if(image == "codepen"){
      display.innerHTML = codepen;
    }
    else if(image == "github"){
      display.innerHTML = github;
    }
    else{
      display.innerHTML = gmail;
    }
  });
});