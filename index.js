'use strict'


var arrayTareas = [];
var parrafo = "";
var texto = "";

//Funcion recogiendo tarea introducida por usuario
var formulario = document.querySelector("#formulario");
formulario.addEventListener('submit' , function(){

    var tarea = document.querySelector("#izquierda").value;
    arrayTareas.push(tarea);
    //Guardar en localStorage 
    localStorage.setItem("tarea", JSON.stringify(arrayTareas));
    // console.log(arrayTareas);

    //Añdiendo tareas en el div de lista
    for(let tarea in arrayTareas){
        //Por cada iteracion del bucle se crea un parrafo
        parrafo = document.createElement("p");
        texto = document.createTextNode(arrayTareas[tarea]);  
    }
    
    parrafo.appendChild(texto);
    document.querySelector("#lista").appendChild(parrafo); 
   
});
//Mostrando elemento del localStorage al abrirse la pagina
var recogiendo = localStorage.getItem("tarea");
recogiendo = JSON.parse(recogiendo);
document.querySelector("#lista").innerHTML = recogiendo; 

