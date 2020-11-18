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

//Cargando fecha
actualDate();

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
         var listaHTML = document.querySelector("#lista");
         listaHTML.appendChild(parrafote);
         //Propiedades css desde javascript
         listaHTML.style.color = 'black';
         listaHTML.style.fontStyle = 'bold';
         listaHTML.style.fontFamily = 'monospace';
         listaHTML.style.fontSize = '15px';
    }
}

function actualDate(){
   
    var today = new Date();
    var dia = today.getDay();
    var mes = today.getUTCMonth();
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();


    //Pasando dia de numero a letra
    var dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"]

    if(dia == 0){
        var day = dayarray[0];
    }else if(dia == 1){
        var day = dayarray[1];
    }else if(dia == 2){
        var day = dayarray[2]
    }else if(dia == 3){
        var day = dayarray[3]
    }else if(dia == 4){
        var day = dayarray[4]
    }else if(dia == 5){
        var day = dayarray[5]
    }else if(dia == 6){
        var day = dayarray[6]
    }

    //Pasando Mes de numero a letra

    var meses = ["January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"];

    switch (mes) {
        case 0:
            mes = meses[0];
        break;
        case 1:
            mes = meses[1];
        break;
        case 2:
             mes = meses[2];
        break;
        case 3:
            mes = meses[4];
        break;
        case 5:
            mes = meses[5];
        break;
        case 6:
            mes = meses[6];
        break;
        case 7:
            mes = meses[7];
        break;
        case 8:
            mes = meses[8];
        break;
        case 9:
            mes = meses[9];
        break;
        case 10:
            mes = meses[10];
        break;
        case 11:
            mes = meses[11];
        break;
                      
        default:
            break;
    }

    //Fecha actual
    today = day + ', ' + dd + ' ' + mes + ' ' + yyyy;
    
    var fect = today;

    var fechahtml = document.querySelector("#fecha");
    fechahtml.innerHTML = fect;
    //Propiedades css desde javascript
    fechahtml.style.color = 'black';
    fechahtml.style.fontStyle = 'bold';
    fechahtml.style.fontFamily = 'monospace';
    fechahtml.style.fontSize = '25px';

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



