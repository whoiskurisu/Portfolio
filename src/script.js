html = document.querySelector("#html");
css = document.querySelector("#css");
tailwind = document.querySelector("#tailwind");
js = document.querySelector("#js");
react = document.querySelector("#react");
img1 = document.querySelector("#img1");
img2 = document.querySelector("#img2");
img3 = document.querySelector("#img3");
img4 = document.querySelector("#img4");

htmlText = document.createElement("div");
htmlText.textContent = "HTML";
htmlText.style.fontSize = "30px";
htmlText.style.color = "black";

cssText = document.createElement("div");
cssText.textContent = "CSS";
cssText.style.fontSize = "30px";
cssText.style.color = "black";

tailwindText = document.createElement("div");
tailwindText.textContent = "TAILWIND";
tailwindText.style.fontSize = "30px";
tailwindText.style.color = "black";

jsText = document.createElement("div");
jsText.textContent = "JavaScript";
jsText.style.fontSize = "30px";
jsText.style.color = "black";

reactText = document.createElement("div");
reactText.textContent = "REACT";
reactText.style.fontSize = "30px";
reactText.style.color = "black";

html.addEventListener("mouseover", () => {
  html.style.width = "170px";
  html.style.height = "85px";
  html.style.borderRadius = "10px";
  html.append(htmlText);
  html.style.display = "flex";
  html.style.justifyContent = "space-evenly";
  html.style.alignItems = "center";
  html.style.marginTop = "-5px";
  img1.style.backgroundColor = "black";
  html.style.backgroundColor = "rgb(209 213 219)";
  html.style.marginLeft = "-5px";

  css.style.visibility = "hidden";
  tailwind.style.visibility = "hidden";
  js.style.visibility = "hidden";
  react.style.visibility = "hidden";
});

html.addEventListener("mouseout", () => {
  htmlText.remove();
  html.style.width = "77px";
  html.style.heigth = "90px";
  img1.style.width = "50px";
  html.style.backgroundColor = "black";
  img1.style.borderRadius = "50%";
  html.style.marginLeft = "0px";

  css.style.visibility = "visible";
  tailwind.style.visibility = "visible";
  js.style.visibility = "visible";
  react.style.visibility = "visible";
});

css.addEventListener("mouseover", () => {
  css.style.width = "150px";
  css.style.height = "85px";
  css.style.borderRadius = "10px";
  css.append(cssText);
  css.style.display = "flex";
  css.style.justifyContent = "space-evenly";
  css.style.alignItems = "center";
  css.style.marginTop = "-5px";
  img2.style.backgroundColor = "black";
  css.style.backgroundColor = "rgb(209 213 219)";
  css.style.marginLeft = "-7px";

  html.style.visibility = "hidden";
  tailwind.style.visibility = "hidden";
  js.style.visibility = "hidden";
  react.style.visibility = "hidden";
});

css.addEventListener("mouseout", () => {
  cssText.remove();
  css.style.width = "77px";
  css.style.heigth = "90px";
  img2.style.width = "50px";
  css.style.backgroundColor = "black";
  img2.style.borderRadius = "50%";
  css.style.marginLeft = "0px";

  html.style.visibility = "visible";
  tailwind.style.visibility = "visible";
  js.style.visibility = "visible";
  react.style.visibility = "visible";
});

tailwind.addEventListener("mouseover", () => {
  tailwind.style.width = "230px";
  tailwind.style.height = "85px";
  tailwind.style.borderRadius = "10px";
  tailwind.append(tailwindText);
  tailwind.style.display = "flex";
  tailwind.style.justifyContent = "space-evenly";
  tailwind.style.alignItems = "center";
  tailwind.style.marginTop = "-5px";
  tailwind.style.marginLeft = "-7.5px";
  tailwind.style.backgroundColor = "rgb(209 213 219)";

  css.style.visibility = "hidden";
  html.style.visibility = "hidden";
  js.style.visibility = "hidden";
  react.style.visibility = "hidden";
});

tailwind.addEventListener("mouseout", () => {
  tailwindText.remove();
  tailwind.style.width = "75px";
  tailwind.style.heigth = "75px";
  img3.style.width = "75px";
  tailwind.style.backgroundColor = "black";
  img3.style.borderRadius = "50%";
  tailwind.style.marginLeft = "0px";

  css.style.visibility = "visible";
  html.style.visibility = "visible";
  js.style.visibility = "visible";
  react.style.visibility = "visible";
});

js.addEventListener("mouseover", () => {
  js.style.width = "225px";
  js.style.height = "85px";
  js.style.borderRadius = "10px";
  js.append(jsText);
  js.style.display = "flex";
  js.style.justifyContent = "space-evenly";
  js.style.alignItems = "center";
  js.style.marginTop = "-5px";
  img4.style.backgroundColor = "black";
  js.style.backgroundColor = "rgb(209 213 219)";
  js.style.marginLeft = "-5.5px";

  html.style.visibility = "hidden";
  tailwind.style.visibility = "hidden";
  css.style.visibility = "hidden";
  react.style.visibility = "hidden";
});

js.addEventListener("mouseout", () => {
  jsText.remove();
  js.style.width = "77px";
  js.style.heigth = "90px";
  img4.style.width = "50px";
  js.style.backgroundColor = "black";
  img4.style.borderRadius = "50%";
  js.style.marginLeft = "0px";

  html.style.visibility = "visible";
  tailwind.style.visibility = "visible";
  css.style.visibility = "visible";
  react.style.visibility = "visible";
});

react.addEventListener("mouseover", () => {
  react.style.width = "179px";
  react.style.height = "85px";
  react.style.borderRadius = "10px";
  react.append(reactText);
  react.style.display = "flex";
  react.style.justifyContent = "space-evenly";
  react.style.alignItems = "center";
  react.style.marginTop = "-5px";
  img5.style.backgroundColor = "black";
  react.style.backgroundColor = "rgb(209 213 219)";
  react.style.marginLeft = "-5px";

  html.style.visibility = "hidden";
  tailwind.style.visibility = "hidden";
  css.style.visibility = "hidden";
  js.style.visibility = "hidden";
});

react.addEventListener("mouseout", () => {
  reactText.remove();
  react.style.width = "77px";
  react.style.heigth = "90px";
  img5.style.width = "50px";
  react.style.backgroundColor = "black";
  img5.style.borderRadius = "50%";
  react.style.marginLeft = "0px";

  html.style.visibility = "visible";
  tailwind.style.visibility = "visible";
  css.style.visibility = "visible";
  js.style.visibility = "visible";
});

github = document.querySelector("#github");
ghtext = document.querySelector("#ghtext");
ghlogo = document.querySelector("#ghlogo");
insta = document.querySelector("#insta");
igtext = document.querySelector("#igtext");
iglogo = document.querySelector("#iglogo");
mail = document.querySelector("#mail");
mailtext = document.querySelector("#mailtext");
maillogo = document.querySelector("#maillogo");

github.addEventListener("click", () => {
  location.href = "https://github.com/whoiskurisu";
});

github.onmouseover = () => {
  github.style.backgroundImage = 'url("./images/github.png")';
  github.style.backgroundSize = "cover";
  github.style.border = "black";
  github.style.boxShadow = "0px 0px 3px #563D7C";
  github.style.color = "white";
  ghlogo.style.transform = "scale(1.1)";
};

github.onmouseout = () => {
  github.style.backgroundImage = "none";
  github.style.backgroundColor = "black";
  github.style.boxShadow = "none";
  ghlogo.style.transform = "none";
  github.style.color = "rgb(209 213 219)";
  github.style.border = "1px solid rgb(209 213 219)";
};

insta.addEventListener("click", () => {
  location.href = "https://www.instagram.com/krish.py";
});

insta.onmouseover = () => {
  insta.style.backgroundImage = 'url("./images/insta.jpg")';
  insta.style.backgroundSize = "cover";
  insta.style.border = "black";
  insta.style.boxShadow = "0px 0px 3px #F58138";
  insta.style.color = "white";
  iglogo.style.transform = "scale(1.09)";
};

insta.onmouseout = () => {
  insta.style.backgroundImage = "none";
  insta.style.backgroundColor = "black";
  insta.style.boxShadow = "none";
  iglogo.style.transform = "none";
  insta.style.color = "rgb(209 213 219)";
  insta.style.border = "1px solid rgb(209 213 219)";
};

mail.addEventListener("click", () => {
  location.href =
    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFTfRKsftPqSZcRLKQZxqxvTWwnKMbznrBZdcdQkZDlZcnMlTRZdKDwBClHcbCSZhFHxB";
});

mail.onmouseover = () => {
  mail.style.backgroundImage = 'url("./images/mail.png")';
  mail.style.backgroundColor = "#A67B5B";
  mail.style.backgroundSize = "cover";
  mail.style.border = "black";
  mail.style.boxShadow = "0px 0px 3px #906942";
  mail.style.color = "white";
  maillogo.style.transform = "scale(1.09  )";
};

mail.onmouseout = () => {
  mail.style.backgroundImage = "none";
  mail.style.backgroundColor = "black";
  mail.style.boxShadow = "none";
  maillogo.style.transform = "none";
  mail.style.color = "rgb(209 213 219)";
  mail.style.border = "1px solid rgb(209 213 219)";
};
