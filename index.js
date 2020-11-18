'use strict'

//Variables
var arrayTareas = [];
var parrafo = "";
var texto = "";
var recogiendo = "";
var parrafote = "";
var textito = "";
var lista;

 //Mostrando elemento del localStorage al abrirse la pagina
recogiendo = localStorage.getItem("tarea"); 

//Si existen datos en el localstorage, cargalos y si no existen crea una lista
if(recogiendo){
     lista = JSON.parse(recogiendo);
     LoadList(lista);
}else{
    lista = [];
}

function LoadList(array){
    for (const tarea in array) {
         parrafote = document.createElement("p");
         textito = document.createTextNode(array[tarea]);
         parrafote.appendChild(textito);
         document.querySelector("#lista").appendChild(parrafote);
    }
}

//Funcion recogiendo tarea introducida por usuario
var formulario = document.querySelector("#formulario");
formulario.addEventListener('submit' , function(){

    var tarea = document.querySelector("#izquierda").value;
    arrayTareas.push(tarea);
    //Guardar en localStorage 
    localStorage.setItem("tarea",JSON.stringify(arrayTareas)); 

    //Añdiendo tareas en el div de lista
    for(const task in arrayTareas){
        //Por cada iteracion del bucle se crea un parrafo
        parrafo = document.createElement("p");
        texto = document.createTextNode(arrayTareas[task]);
        
    }
    parrafo.appendChild(texto);
    document.querySelector("#lista").appendChild(parrafo);
});



