
const header = document.querySelector("header");
const body = document.querySelector("body");
const toggle = document.querySelector(".checkbox");
const headerText = document.querySelector("#headertext");
const label = document.querySelector("label");
const count = document.querySelectorAll("h2");
const overviewCount = document.querySelectorAll("h3");
const followers = document.querySelectorAll("h4");
const overviewLabel = document.querySelectorAll("h5");
const username = document.querySelectorAll(".username");
const topcardBg = document.querySelectorAll(".topcard");
const overviewCardBg = document.querySelectorAll(".overviewcard");


toggle.addEventListener("click", function(){
  // DARK MODE

  if (toggle.checked) {
    header.style.backgroundColor = "hsl(232, 19%, 15%)";
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    headerText.style.color = "white";
    label.style.color = "white";
    
    for (let i = 0; i < count.length; i++) {
      count[i].style.color = "white";
    }
    for (let i = 0; i < overviewCount.length; i++) {
      overviewCount[i].style.color = "white";
    }
    for (let i = 0; i < overviewLabel.length; i++) {
      overviewLabel[i].style.color = "hsl(228, 34%, 66%)";
    }
    for (let i = 0; i < username.length; i++) {
      username[i].style.color = "hsl(228, 34%, 66%)";
    }
    for (let i = 0; i < followers.length; i++) {
      followers[i].style.color = "hsl(228, 34%, 66%)";
    }
    for (let i = 0; i < overviewCardBg.length; i++) {
      overviewCardBg[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    for (let i = 0; i < topcardBg.length; i++) {
      topcardBg[i].style.backgroundColor = "hsl(228, 28%, 20%)";
    }
  } else {
    header.style.backgroundColor = "hsl(225, 100%, 98%)";
    body.style.backgroundColor = "white";
    headerText.style.color = "hsl(230, 17%, 14%)";
    label.style.color = "hsl(230, 17%, 14%)";
    
    for (let i = 0; i < count.length; i++) {
      count[i].style.color = "hsl(230, 17%, 14%)";
    }
    for (let i = 0; i < overviewCount.length; i++) {
      overviewCount[i].style.color = "hsl(230, 17%, 14%)";
    }
    for (let i = 0; i < overviewLabel.length; i++) {
      overviewLabel[i].style.color = "hsl(228, 12%, 44%)";
    }
    for (let i = 0; i < username.length; i++) {
      username[i].style.color = "hsl(228, 12%, 44%)";
    }
    for (let i = 0; i < followers.length; i++) {
      followers[i].style.color = "hsl(228, 12%, 44%)";
    }
    for (let i = 0; i < overviewCardBg.length; i++) {
      overviewCardBg[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    }
    for (let i = 0; i < topcardBg.length; i++) {
      topcardBg[i].style.backgroundColor = "hsl(227, 47%, 96%)";
    }
  }
})