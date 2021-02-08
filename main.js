const host ='https://rifa-database-app.herokuapp.com/todas';

const proxyurl = "https://cors-valentina.herokuapp.com/";


function displayImages(source){
	
	for (i = source.length - 1; i >-1 ; i--) {
		create_card(source[i].primer_numero, source[i].segundo_numero, source[i].nombre, source[i].disponible, source[i].telefono)
	}
}

fetch(proxyurl + host)
  .then(response => response.json())
  .then(source => displayImages(source))




function create_card(Numerouno, Numerodos, Nombre, Disponible, Telefono){
	let main_div = document.getElementById('main-div');
    let card = document.createElement("div");
    let numerouno = document.createElement('p');
    let numerodos = document.createElement('p');
    let nombre = document.createElement('p');
    let disponible = document.createElement('p');
    let telefono = document.createElement('p');
	let setNumerounoText = document.createTextNode("Numero uno:" + Numerouno);
	let setNumerodosText = document.createTextNode("Numero dos:" + Numerodos);
	let setNombreText = document.createTextNode("Nombre:" + Nombre);
	let setDisponibleText = document.createTextNode("Disponible:" + Disponible);
	let setTelefonoText = document.createTextNode("Telefono:" + Telefono);
	let button = document.createElement('button');
    button.innerHTML = 'Editar boleta';

    button.href =`https://asguerrero.github.io/rifa-mp/manejar_boleta.html?${Nombre}?${Numerouno}?${Numerodos}`;

    button.onclick = function(){
    	window.open(`https://asguerrero.github.io/rifa-mp/manejar_boleta.html?${Nombre}?${Numerouno}?${Numerodos}`);
	location.href = `https://asguerrero.github.io/rifa-mp/manejar_boleta.html?${Nombre}?${Numerouno}?${Numerodos}`;
		console.log('test')

}
    console.log(button.href)
	numerouno.appendChild(setNumerounoText); 
	numerodos.appendChild(setNumerodosText);
	nombre.appendChild(setNombreText);
	disponible.appendChild(setDisponibleText);
	telefono.appendChild(setTelefonoText);
    card.appendChild(numerouno);
    card.appendChild(numerodos);
    card.appendChild(nombre);
    card.appendChild(disponible);
    card.appendChild(telefono);
    card.appendChild(button);
    main_div.appendChild(card);


}
