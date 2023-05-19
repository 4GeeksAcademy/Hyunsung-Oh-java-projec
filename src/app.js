/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {});
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "the"];
  let subject = ["tiger", "lion", "driver", "singer", "dragon", "teacher"];
  let action = ["took my", "threw my", "bit my", "stole my"];
  let goods = ["food", "car", "shoe", "toy"];
  let where = ["onthe jungle", "in my house", "in the park"];

  let proindx = Math.floor(Math.random() * pronoun.length);
  let subjindx = Math.floor(Math.random() * subject.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let goodsindx = Math.floor(Math.random() * goods.length);
  let whereindx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proindx] +
    " " +
    subject[subjindx] +
    " " +
    action[actionindx] +
    " " +
    goods[goodsindx] +
    " " +
    where[whereindx]
  );
};
