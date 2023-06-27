"use strict";
// 1 - VARIANT
// // Получение div элемента
// const divElement = document.querySelector('#qacan_setir');
// // Изменение фона div элемента
// divElement.style.background = 'green';

// 2 - VARIANT
// const divElement = document.querySelector('#qacan_setir').style.background = 'green';


// 3 - VARIANT
// // Получаем ссылку на элемент <div>
// let divElement = document.getElementById("qacan_setir");

// // Изменяем цвет фона на   
// divElement.style.backgroundColor = "green";

// 4 -VARIANT
// let divElement = (document.getElementById("qacan_setir").style.backgroundColor ="green");


let divElement = (document.getElementById("qacan_setir").style.backgroundColor =
  "green");
const textarea = document.getElementById("textarea");
const div = document.getElementById("qacan_setir");

textarea.addEventListener("input", function () {
  div.textContent = textarea.value;
});
