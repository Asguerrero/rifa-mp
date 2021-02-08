const host ='https://rifa-database-app.herokuapp.com/disponibles';

const proxyurl = "https://cors-valentina.herokuapp.com/";




function displayImages(source){
	
	for (i = source.length - 1; i >-1 ; i--) {
		create_card(source[i].primer_numero, source[i].segundo_numero)
	}
}

fetch(proxyurl + host)
  .then(response => response.json())
  .then(source => displayImages(source))




function create_card(Numerouno, Numerodos, Nombre, Disponible, Telefono){
	let main_div = document.getElementById('main-div');
    let card = document.createElement("div");
    let numeros = document.createElement('p');
    card.classList.add('cardWidthSet', 'cardStyle')
    let button = document.createElement('button');
    button.innerHTML = 'Comprar boleta';

    button.href =`https://asguerrero.github.io/rifa-mp/formulario.html?${Numerouno}?${Numerodos}`;
    console.log(button.href)
    
	let setNumeroText = document.createTextNode(Numerouno + "-");
	let setNumerodosText = document.createTextNode( Numerodos);
	
	numeros.appendChild(setNumeroText); 

	numeros.appendChild(setNumerodosText); 
	
	button.onclick = function(){
		location.href = `https://asguerrero.github.io/rifa-mp/formulario.html?${Numerouno}?${Numerodos}`;
    
  };

	card.appendChild(button);
    card.appendChild(numeros);
    
    main_div.appendChild(card);


}
