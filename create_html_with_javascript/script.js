console.log("Good Luck!");

const html = document.querySelector("html");
html.setAttribute("lang", "en");

const head = document.querySelector("head");

const meta = document.createElement("meta");
meta.setAttribute("charset", "UTF-8");

head.appendChild(meta);

const link = document.createElement("link");
link.setAttribute("href", "style.css");
link.rel = "stylesheet";
head.appendChild(link);

const h1 = document.createElement("h1");
h1.classList.add("big");
h1.textContent = "Day";

const body = document.querySelector("body");

body.classList.add("center", "day");

body.appendChild(h1);

const img = document.createElement("img");

img.setAttribute("src", "./sun_transparent.png");
// img.src = "./sun_transparent.png";
img.setAttribute("height", "400");
img.setAttribute("width", "400");

body.appendChild(img);

const div = document.createElement("div");
div.classList.add("glow");
div.setAttribute("onclick", "change()");
body.appendChild(div);

const h2 = document.createElement("h2");
h2.textContent = "Change";
div.appendChild(h2);

// to add tags , first add variables

// we need to grab things from the DOM

// .setAttribute to add attributes

// document.createElement to create elemtns

// parent.appendChild(element you watn to add)

// sometimes we can use parent.attribute (aka head.href = "attribute")

// in order to add classes, parent.classList.add("name of class")

// we can also use .className = "class1 class2" to add classes aka h1.className="class1 class2";

// you can add multiple classes aka body.classList.add("class1", "class2")

// to add text, we must do targetElement.textContent ="" aka h1.textContent=""

// we can also use element.innerHTML = "text" to add text AND elemnts AND classes aka h2.innerHTML = "<h1 class='big white'> Text </h1>"" 

// People usulaly don't use .innerHTML

// in order to add text, we must target the parent

// we msut always grab all the elements we will be using! Like body, head, etc, if we want to add things to them

// for things that are present in the brower's elemnts, but not in the html, we'll need to target those with .querySelector and attach them to a variable

// if you want, you can grab all the things you need and put them into variables right at the start!

function change() {
  if (body.classList.contains("day")) {
    body.classList.remove("day");
    img.src = "./moon_transparent.png";
    body.classList.add("night");
    h1.classList.add("white");
    h1.textContent = "Night";
  } else {
    body.classList.remove("night");
    img.src = "./sun_transparent.png";
    body.classList.add("day");
    h1.classList.remove("white");
    h1.textContent = "Day";
  }
}

// in order to check class lists on an element - body.classList.contains

// in order to remove and add classes use body.classList.add("") / .remove("")

// We can simply target element.textContent = "new text"; in order to change text

// we can also target images to change their src by doing img.src = "./newsrc"

// we could use element.classList.toggle("className") to turn a class on or off