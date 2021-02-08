const host ='https://rifa-database-app.herokuapp.com/todas';

const proxyurl = 'https://cors-valentina.herokuapp.com/';

let name = document.getElementById("Name");
let phone = document.getElementById("Phone");
let boleta_number = document.getElementById("boletaNumero");




let url = location.search.split('?');
let string_one = url[1];
let string_two = url[2];







function fetchBoleta(){
	
let request = `${string_one}/${string_two}`



  fetch(proxyurl + host)
  .then(response => response.json())
  .then(source => displayImages(source))

  
	

}


function displayImages(source){
	console.log(source)
	for (i = source.length - 1; i >-1 ; i--) {
		if (source[i].primer_numero == string_one && source[i].segundo_numero == string_two){
			console.log('fo')
			    let nombre = document.createElement('h5');
			    let telefono = document.createElement('h5');
			    let boleta = document.createElement('h5');
			    let setNombre = document.createTextNode('Nombre:' + source[i].nombre);
				let setTelefono = document.createTextNode('Telefono:' + source[i].telefono);
				let setBoletaOne = document.createTextNode('Numero de boleta:' + source[i].primer_numero + '/');
				let setBoletaTwo = document.createTextNode(source[i].segundo_numero);
				nombre.appendChild(setNombre); 
				telefono.appendChild(setTelefono);
				boleta.appendChild(setBoletaOne);
				boleta.appendChild(setBoletaTwo);
				name.appendChild(nombre);
				phone.appendChild(telefono);
				boleta_number.appendChild(boleta)
		} 
	}

}


fetchBoleta()