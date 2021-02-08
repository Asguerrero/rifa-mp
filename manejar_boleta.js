const host_reset ='https://rifa-database-app.herokuapp.com/eliminar_boleta/';

const host_confirm ='https://rifa-database-app.herokuapp.com/nueva_boleta/';

const proxyurl = "https://cors-valentina.herokuapp.com/";


let boleta_number = document.getElementById("boletaNumber");
let resetButton = document.getElementById("resetButton");
let confirmButton = document.getElementById("confirmButton");


let url = location.search.split('?');
let name = url[1];
let string_one = url[2];
let string_two = url[3];

let numeros = document.createElement('p');
let setNumeroText = document.createTextNode(string_one + '/');
let setNumerodosText = document.createTextNode(string_two);

numeros.appendChild(setNumeroText); 
numeros.appendChild(setNumerodosText); 
boleta_number.appendChild(numeros);





function resetBoleta(){

console.log(name);
console.log(string_one);
console.log(string_two);

let reset_info = `${name}/${string_one}/${string_two}`;

fetch(proxyurl + host_reset+ reset_info)
  .then(response => response.json())
  .then(source => displayMessage(source))

}

function confirmBoleta(){
	console.log(name);
console.log(string_one);
console.log(string_two);

let confirm_info = `${string_one}/${string_two}`

fetch(proxyurl + host_confirm + confirm_info)
  .then(response => response.json())
  .then(source => displayMessage(source))


}


function displayMessage(source){
	alert(source.message);

}

resetButton.addEventListener("click", resetBoleta);
confirmButton.addEventListener("click", confirmBoleta);

