// 3 ways to write events in JS
// 1 - no-DOM - written directly inside the HTML
//      <div onclick="showMore();"> Show More + </div>
// 2 - DOM-0 - events are added using JS
//          const myTarget = document.querySelector("#target");
//          myTarger.onclick = function() { showMore() }
//          If you write subsequent functions targetting the same variable, it will overwrite it
//  3 - DOM-2 -
//          myTarget.addEventListener('event', function(){code});    it attaches to an element and runs the code every time the event occurs
//                                  onclick events...
// What events are there? So many! We can see them on hte mastery

// const h1 = document.querySelector("h1");
// const html = document.querySelector("html");
// html.addEventListener("mousemove", function (e)) {
//   // we can put e instead of event
//   //   console.log(e);
//   h1.textContent = `x: ${e.clientX} y: ${e.clientY}`;
// }
const circle = document.querySelector(".circle");

circle.addEventListener("click", function () {
  circle.style.backgroundColor = randomColor;
});

function randomColor() {
  const num = Math.floor(Math.random() * 360 + 1);
  return `hsl(${num}, 100%, 50%)`;
}

// h1.addEventListener("mousemove", function (event) {
//   console.log("mousemove");
// });
const input = document.querySelector("input");
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    circle.style.backgroundColor = input.value;
  }
});
// input.addEventListener("keypress", function (event) {
//   console.log(event);
// });

// input.addEventListener("keyup", function (event) {
//   console.log("keyup", event.key);
// });
// input.addEventListener("keyup", function (event) {
//   console.log("keyup", event.value);
// });

// KEY UP IS A GOOD ONE - USE THAT ONE -- IT GETS THE NEWEST VALUES
