"use strict";
const x = 'Həsənqulu yaxşı oğlandır';
document.getElementById("hesen").innerHTML = x;

function myFunction() {
  document.getElementById("tapdiq").innerHTML = "Tapdıq yaxşı oğlandır";
}
function ok() {
  let name = document.getElementById('namebox').value;

  document.getElementById('salamlama').innerText = name.length  ;

if(name.length === 0){
  document.getElementById('error').innerText = "Adınızı daxil edin";
} else if ( name.length <= 2) {
  document.getElementById('error').innerText = "Keçərli ad daxil edin";
} else {
  document.getElementById('salamlama').innerText = ("Salam " + name);
}
 }

