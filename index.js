'use strict'


var arrayTareas = [];
var parrafo = "";
var texto = "";

//Funcion recogiendo tarea introducida por usuario
var formulario = document.querySelector("#formulario");
formulario.addEventListener('submit' , function(){

    var tarea = document.querySelector("#izquierda").value;
    arrayTareas.push(tarea);
    // console.log(arrayTareas);

    //Añdiendo tareas en el div de lista
    for(let tarea in arrayTareas){
        //Por cada iteracion del bucle se crea un parrafo
        parrafo = document.createElement("p");
        texto = document.createTextNode(arrayTareas[tarea]);

        //Funciona pero se esta sobreescribiendo
        localStorage.setItem("tarea", arrayTareas[tarea]);
        
    }
    parrafo.appendChild(texto);
    //Guardar en localStorage y disponer al abrirse la pagina
    document.querySelector("#lista").appendChild(parrafo);   
    
    /*localStorage.setItem("parrafo", parrafo);
    var memory = localStorage.getItem("parrafo");
    var text = document.createTextNode(memory);
    */
   
});


