const host ='https://rifa-database-app.herokuapp.com/';

const proxyurl = "https://cors-valentina.herokuapp.com/";

let name = document.getElementById("inputName");
let phone = document.getElementById("inputPhone");
let boleta_number = document.getElementById("boletaNumber");


let button = document.getElementById("buttonSubmit");

console.log(name)
console.log(phone)


let url = location.search.split('?');
let string_one = url[1];
let string_two = url[2];


let numeros = document.createElement('p');
let setNumeroText = document.createTextNode(string_one + '/');
let setNumerodosText = document.createTextNode(string_two);

numeros.appendChild(setNumeroText); 
numeros.appendChild(setNumerodosText); 
boleta_number.appendChild(numeros);


button.addEventListener("click", updateBoleta);


button.onclick = function(){
	location.href = `file:///Users/valentinaguerrero/Desktop/PAU/boleta.html?${string_one}?${string_two}`;
		console.log('test')

}

function openNewBoleta(string_one, string_two){
		button.location.href = `file:///Users/valentinaguerrero/Desktop/PAU/boleta.html?${string_one}?${string_two}`;
		console.log('test')
  };


function updateBoleta(){
	
let request = `boleta_pendiente/${name.value}/${string_one}/${string_two}/${phone.value}`



  fetch(proxyurl + host + request)

  window.open(`file:///Users/valentinaguerrero/Desktop/PAU/boleta.html?${string_one}?${string_two}`);
  
	

}


function displayMessage(source){
	console.log(source)

}






