/* // Dia 1
let numeroUno = 1
let stringUno = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'
if (numeroUno == stringUno) {
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor')
}
if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}
if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

// Dia 2
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
const mensaje = `¡Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
alert(mensaje);
const gusta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 - SÍ o 2 - NO`);
if (gusta == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if (gusta == 2){
    alert("Oh, qué pena... ¿Has intentado aprender otros lenguajes?");
}

// Dia 3 
const area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:");
let lenguaje = "";
if (area === "Front-End") {
    lenguaje = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
    lenguaje = prompt("¿Quieres aprender C# o Java?");
} else {
    alert("¡No ingresaste un área válida!");
}
const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (especialidadOFullstack == 1) {
    alert(`¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!`);
} else if (especialidadOFullstack == 2) {
    alert(`¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!`);
} else {
    alert("¡No ingresaste un valor válido!");
}
let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}

// Dia 4A
const numeroAdivinacion = 7;
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!");
}

// Dia 4B
const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;
for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}

// Dia 5
let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    while (agregarMas != "sí" && agregarMas != "no") {  //mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
	alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
        break;
    }
    comida = prompt("¿Qué comida deseas agregar?");
    categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'lacteos'){
        lacteos.push(comida);
    } else if (categoria === 'dulces'){
        dulces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Esa categoria no está predefinida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);

// Dia 6
let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }
	
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "eliminar") {  //mientras el texto leído sea diferente de "sí", "no" y "eliminar", mostrar que no fue reconocido y preguntar nuevamente
	alert(`¡Operación no reconocida!`);
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
	break;
    }
	
    if(agregarMas === "sí"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'lacteos'){
            lacteos.push(comida);
        } else if (categoria === 'dulces'){
            dulces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Esa categoria no está predefinida.")
        }
    } else if(agregarMas === "eliminar"){
	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  //si la lista está vacía (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "sí" y "no")
		alert(`¡La lista está vacía!`);
	} else {  //si la lista no está vacía
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);
*/
// Dia 7
function suma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function resta(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicacion(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function division(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacion = "";

do {  //usando 'do...while', ya que la primera vez siempre vamos a entrar
    
    operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    while (operacion != "suma" && operacion != "resta" && operacion != "multiplicación" && operacion != "división" && operacion != "salir") {  //mientras el texto leído sea diferente de "suma", "resta", "multiplicación", "división" y "salir", mostrar que no fue reconocido y preguntar nuevamente
        alert(`¡Operación no reconocida!`);
        operacion = prompt(`¿Qué operación quieres realizar? Responde 'suma', 'resta', 'multiplicación', 'división' o 'salir'.`);
    }
    
    if (operacion === "salir") {  //si el texto leído es "salir", salir del loop y de la calculadora
        break;
    }
    
    valor1 = prompt(`Ingresa el primer valor:`);
    valor2 = prompt(`Ingresa el segundo valor:`);
    switch (operacion) {
        case 'suma':
            alert(`El resultado de la ${operacion} es ${suma(valor1, valor2)}`);
            break;
        case 'resta':
            alert(`El resultado de la ${operacion} es ${resta(valor1, valor2)}`);
            break;
        case 'multiplicación':
            alert(`El resultado de la ${operacion} es ${multiplicacion(valor1, valor2)}`);
            break;
        case 'división':
            alert(`El resultado de la ${operacion} es ${division(valor1, valor2)}`);
            break;
    }
} while (operacion === "suma" || operacion === "resta" || operacion === "multiplicación" || operacion === "división")
alert(`¡Hasta la próxima!`);
