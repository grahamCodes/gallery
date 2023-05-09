// Make a responsive photo gallery
// Use html to add the header , second container
// We have a array of objects
// Use js to create to loop through the array and pull the "title" and the "image" src
// use the for .. of loop
// This loop will iterate through the array one at a time
// we'll create the element for a picture, add the url to that picture
// First - grab things from the html using const xx = document.querySelector(xx)
// Second - loop through the array
// Third - in the loop, create divs using const xx = document.createElement("xx")
//         - have the created divs appended to the body using parent.appendChild(child)
//          - add classes to the divs using div.classList.add("classname")
// Fourth - in the loop, create imgs using the same as the divs
//          - have hte imgs appended to the divs using div.appendChild(img);
// fifth - in the loop, create h3's using h3 = document.createElement("h3");
//          - append hte h3s to the div using div.appendChild(h3);
//          - add text to the h3 using h3.textContent = "blah"

// sixth -- add creater and price
//          in loop, make a new div
//          inside the div, add the text

const pictures = [
  {
    image: "https://picsum.photos/id/237/200/200",
    title: "Dog",
    creator: "Jim Beam",
    price: "$9.99",
  },
  {
    image: "https://picsum.photos/id/238/200/200",
    title: "City",
    creator: "Jack Daniels",
    price: "$6.50",
  },
  {
    image: "https://picsum.photos/id/239/200/200",
    title: "Dandelion",
    creator: "Johnnie Walker",
    price: "$19.00",
  },
  {
    image: "https://picsum.photos/id/244/200/200",
    title: "Pelicans",
    creator: "John Jameson",
    price: "$12.50",
  },
  {
    image: "https://picsum.photos/id/248/200/200",
    title: "Cactus",
    creator: "Jim Beam",
    price: "$15.99",
  },
  {
    image: "https://picsum.photos/id/249/200/200",
    title: "Bridge",
    creator: "William Grant",
    price: "$29.99",
  },
  {
    image: "https://picsum.photos/id/250/200/200",
    title: "Camera",
    creator: "George Smith",
    price: "$10.00",
  },
  {
    image: "https://picsum.photos/id/251/200/200",
    title: "Landscape",
    creator: "Johnnie Walker",
    price: "$29.00",
  },
  {
    image: "https://picsum.photos/id/255/200/200",
    title: "Private Drive",
    creator: "John Jameson",
    price: "$19.00",
  },
  {
    image: "https://picsum.photos/id/256/200/200",
    title: "Snowy Mountains",
    creator: "William Grant",
    price: "$19.99",
  },
  {
    image: "https://picsum.photos/id/257/200/200",
    title: "Canal",
    creator: "Jim Beam",
    price: "$19.99",
  },
  {
    image: "https://picsum.photos/id/258/200/200",
    title: "Birds",
    creator: "Johnnie Walker",
    price: "$24.00",
  },
  {
    image: "https://picsum.photos/id/259/200/200",
    title: "Waterfront",
    creator: "George Smith",
    price: "$15.00",
  },
  {
    image: "https://picsum.photos/id/261/200/200",
    title: "Dune",
    creator: "John Jameson",
    price: "$7.50",
  },
  {
    image: "https://picsum.photos/id/274/200/200",
    title: "City Night",
    creator: "Jim Beam",
    price: "$14.99",
  },
];

const body = document.querySelector("body");
const main = document.createElement("main");
main.classList.add("main");
body.appendChild(main);

for (const word of pictures) {
  const div = document.createElement("div");
  main.appendChild(div);
  div.classList.add("card", "photo");
  const img = document.createElement("img");
  img.setAttribute("src", word.image);
  img.setAttribute("alt", `A picture of a ${word.title}`);
  div.appendChild(img);
  const h3 = document.createElement("h3");
  h3.textContent = word.title;
  div.appendChild(h3);
  const h4 = document.createElement("h4");
  h4.textContent = `${word.creator} ~ ${word.price}`;
  div.appendChild(h4);
}

onclick.h4.classList;

// could we do this exercise again as background images?
// it could be a whole css set up that has a class we toggle on and off
// if the class is on, this CSS takes effect:
// divs become size of 100% width and height;
// main is no longer flex? Maybe block
// scroll snapping can't really work without ID's. We'd need ID's to be added to everything.
//
