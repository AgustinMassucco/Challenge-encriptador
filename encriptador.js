var boton=true;
var caja=true
//Limpiar mensaje inicial al hacer click
function limpiarCaja(){
    if (caja) {
        document.getElementById('texto').innerHTML="";
        caja=false;
    }
}

function encriptar(){
    //Leer texto
    let tex = document.getElementById('texto').innerHTML;
    
    //Encriptar texto
    tex=tex.replaceAll('e','enter');
    tex=tex.replaceAll('i','imes');
    tex=tex.replaceAll('a','ai');
    tex=tex.replaceAll('o','ober');
    tex=tex.replaceAll('u','ufat');
    
    //Mostrar texto
    mostrarTexto(tex)
  
    //Agregar boton de copiar
    if (boton) {
        agregarBoton();  
        boton=false;
    }
    
}

function desencriptar(){
    //Leer texto
    let tex = document.getElementById('texto').innerHTML;
  
    //Encriptar texto
    tex=tex.replaceAll('ai','a');
    tex=tex.replaceAll('enter','e');
    tex=tex.replaceAll('imes','i');
    tex=tex.replaceAll('ober','o');
    tex=tex.replaceAll('ufat','u');
    
    //Mostrar texto
    mostrarTexto(tex);

    //Agregar boton de copiar
    if (boton) {
        agregarBoton();  
        boton=false;
    }
}

function agregarBoton(){
    var elemento = document.createElement("button")
    elemento.innerHTML = "Copiar";
    elemento.setAttribute('id','copiar')
    elemento.setAttribute('onclick','copiar()')
    document.body.appendChild(elemento);
}

function copiar(){
    let texto = document.getElementById('respuesta').innerText;
    navigator.clipboard.writeText(texto);
}

function mostrarTexto(texto){
    let elementoHTML = document.getElementById('respuesta');
    elementoHTML.innerHTML = texto;
    elementoHTML.setAttribute('id','respuesta')
    elementoHTML.setAttribute('class','formato-respuesta')
}





