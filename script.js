window.addEventListener('load',()=>{//escuchamos cuando se carga el documento
const idn=['idn1','idn2','idn3','idn4','idn5','idn6','idn7','idn8','idn9','idn0'];
const boton = idn.map(id =>document.getElementById(id));//declaras un boton 
// map para recorrer ese array y obtener las referencias a los elementos usando

const idM=['suma','resta','multiplicación','division'];// Lista de IDs de botones
const botonM = idM.map(idM =>document.getElementById(idM));//declaras un boton 
const sumar = document.getElementById('igual');//declaras un boton 


const clear = document.getElementById('clear');//declaras un boton 

const resultado = document.getElementById('enter');


if (resultado.value==='0'){

let nestedData = [];//array
let estado=[];


//lenght representa la longitud de una cadena
boton.forEach(boton =>{
// Agregar evento de escucha al botón
  boton.addEventListener('click', function() {
    // Obtener el valor del botón al ser presionado
    //const valorBoton = boton.value;
    
    nestedData.push(boton.textContent);//textContent para obtener el contenido de los botones,
    //push es para añadir datos a un array

    // Mostrar el valor en el elemento de resultado para un <p>
   // resultado.textContent = `Valor del botón: ${valorBoton}`;


    estado.push(boton.textContent);

    if (resultado.value == 0){
      resultado.value='';
    } 
    // Mostrar el valor en el campo de entrada para un input
    resultado.value = nestedData.join('');
   // console.log(resultado[1].value.includes('*'));

  });
});

 

///Chequeo de los botones, se checa el primer dato y el ultimo part 1
function esSimbolo(caracter) {
  const simbolos = ['+', '-', '*', '/'];
  return simbolos.includes(caracter);
}



botonM.forEach(botonM =>{

  botonM.addEventListener('click', function(){
    
    //part 2
    const primerCaracter = nestedData[0];
    const ultimoCaracter = nestedData[nestedData.length - 1];

    console.log(esSimbolo(primerCaracter));
    console.log(esSimbolo(ultimoCaracter));
    if (esSimbolo(primerCaracter)==true){
      console.log("hola");
    }



  if(esSimbolo(primerCaracter)==true||nestedData.length === 0 ){

      resultado.value = resultado.value.slice(0, -1); // Eliminar el último carácter

    }else if(esSimbolo(primerCaracter)==false){
 
     
    console.log(estado.join(''));



    nestedData.push(botonM.textContent);
    
    resultado.value = nestedData.join('');
    }

  });

}); 

 

sumar.addEventListener('click',()=>{

resultado.value = eval(resultado.value);/*Tomar el string, resolverlo y guardarlo en el innerHtml del display*/
console.log(resultado.value);
  
});

//borro los datos introduccidos
clear.addEventListener('click', ()=>{
  resultado.value = "0";  

  nestedData = [];//se reinicia el array

});


//function updateInputValue() {
  //nestedDataInput.value = nestedData.join(', ');//join para unir los elementos del array 
//}
  //En este ejemplo, hemos agregado un párrafo con el id "resultado" donde mostraremos el valor del botón. Luego, usando addEventListener, hemos agregado un escucha al evento de clic del botón. Cuando el botón se presione, el valor se obtiene y se muestra en el párrafo de resultado.
  //Cuando hagas clic en el botón, verás el valor del botón mostrado en el párrafo debajo del botón.

  console.log("Exito");
}

//prueba de impresion  
const Prueba1 = boton.value;

console.log(Prueba1);


});