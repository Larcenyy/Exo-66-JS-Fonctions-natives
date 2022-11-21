let elementOne = document.getElementById("entier");
let elementTwo = document.getElementById("flottant");
let elementThree = document.getElementById("non-numerique");
let elementFour = document.getElementById("random");
let elementFive = document.getElementById("trunc");
let elementSix = document.getElementById("replace");



let operande = 10;
elementOne.style.color = "red";
console.log(typeof elementOne);

elementOne.innerHTML = operande * parseInt(elementOne.innerHTML);

//////////////////////////////////////// 2

elementTwo.innerHTML = operande * parseFloat(elementTwo.innerHTML);

elementTwo.innerHTML = parseInt(elementOne.innerHTML) + parseFloat(elementTwo.innerHTML);
elementTwo.style.color = "red";

//////////////////////////////////////// 3
elementThree.innerHTML = "0"
console.log(typeof elementThree);
//////////////////////////////////////// 4
elementFour.innerHTML = Math.random();
console.log(typeof elementFour);
//////////////////////////////////////// 5
elementFive.innerText = Math.floor(elementFive.innerText);
//////////////////////////////////////// 6
elementSix.innerText = elementSix.innerText.replace('world', 'rémy comeau')