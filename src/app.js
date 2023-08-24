/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let img = document.getElementById("img");
  let pics = [
    "https://www.science.org/do/10.1126/science.aav0458/abs/0808_dogPee_16x9.jpg?w=5",
    "https://t3.ftcdn.net/jpg/02/39/42/00/360_F_239420088_yOXhuDymb8IBbggLrv8j8YZkICw934br.jpg",
    "https://clipart-library.com/newhp/venus-raphael-leonardo-michelangelo-teenage-mutant-ninja-turtles-tmnt.jpg",
    "https://t3.ftcdn.net/jpg/03/49/32/28/360_F_349322868_pnh7gwrSXKmbCuu6ebDPjUjRi8QQ6uJm.jpg"
  ];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomIdx = Math.floor(Math.random() * who.length);
  let whoR = who[randomIdx];
  let picsR = pics[randomIdx];
  let actionR = action[Math.floor(Math.random() * action.length)];
  let whatR = what[Math.floor(Math.random() * what.length)];
  let whenR = when[Math.floor(Math.random() * when.length)];
  img.src = picsR;

  document.getElementById("excuse").innerHTML =
    whoR + " " + actionR + " " + whatR + " " + whenR;
};
