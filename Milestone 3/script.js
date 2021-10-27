/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

let lista = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

listaCompleta(lista);
aggiuntaClassi();

let optionList = document.getElementById("select");

let container = document.querySelector(".container");

optionList.addEventListener("change", function() {
	container.innerHTML = "";
	let listaFiltrata = lista.filter((icona) => {
		if (icona.type == this.value)
		return true
	})

	if (this.value == "animal") {
		container.innerHTML = "";
		listaCompleta(listaFiltrata);
	}
	else if (this.value == "vegetable") {
		container.innerHTML = "";
		listaCompleta(listaFiltrata);
		
	}
	else if (this.value == "user") {
		container.innerHTML = ""
		listaCompleta(listaFiltrata)
	}
	else if (this.value == "all") {
		container.innerHTML = ""
		listaCompleta(lista);
		
	}

	aggiuntaClassi()

	
})










function listaCompleta(lista) {
	lista.forEach((icona) => {
		document.querySelector(".container").innerHTML += `<div class="iconCard ${icona.type}s">
																<div class="icon">
																	<i class="${icona.type} ${icona.family} ${icona.prefix}${icona.name}"></i>
																	<p>${icona.name}</p>
																</div>
															</div>`;
	});
}


function aggiuntaClassi() {

	let listIconHtml = document.querySelectorAll("i");
	
	  for (let i = 0; i < listIconHtml.length; i++) {
		const element = listIconHtml[i];
		
		
			if (element.classList.contains("animal")) {
				
				 element.classList.add("blue");
				 
			}
			else if(element.classList.contains("vegetable")) {
				element.classList.add("orange")
			}
			else {
				element.classList.add("purple")
			}
	  
	}   
}