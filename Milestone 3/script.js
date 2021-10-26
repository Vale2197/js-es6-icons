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


lista.forEach((element) => {
    document.querySelector(".container").innerHTML += `<div class="iconCard ${element.type}s">
                                                            <div class="icon">
                                                                <i class="${element.type} ${element.family} ${element.prefix}${element.name}"></i>
                                                                <p>${element.name}</p>
                                                            </div>
                                                        </div>`;
});

/* let listIconHtml = document.querySelectorAll("i"); */
let optionList = document.getElementById("select");

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

let listaCardAnimal = document.querySelectorAll(".iconCard.animals");
let listaCardVegetable = document.querySelectorAll(".iconCard.vegetables");
let listaCardUser = document.querySelectorAll(".iconCard.users");

for (let i = 0; i < listaCardAnimal.length; i++) {
    let cardAnimali = listaCardAnimal[i];
    let cardVeg = listaCardVegetable[i];
    let cardUs = listaCardUser[i];

    optionList.addEventListener("change", function() {
        if (optionList.value == "all") {
            cardAnimali.style.display = "block";
            cardVeg.style.display = "block";
            cardUs.style.display = "block";
        }
        else if (optionList.value == "animal") {
            cardVeg.style.display = "none";
            cardUs.style.display = "none";
        }
        else if (optionList.value == "vegetable") {
            cardAnimali.style.display = "none";
            cardUs.style.display = "none";
            cardVeg.style.display = "block";
        }
        else if (optionList.value == "user") {
            cardAnimali.style.display = "none";
            cardVeg.style.display = "none";
            cardUs.style.display = "block";
        }
        
    })

    
}







