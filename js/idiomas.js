function cambiarIdioma(id){//voy a cambiar a el idioma que falta

    if (document.getElementById("espaniol") === null){//significa que falta español
        agregarEspañol(id);
    } 

    if (document.getElementById("portugues") === null){//significa que falta portugues
        agregarPortugues(id);
    } 
    if (document.getElementById("ingles") === null){//significa que falta ingles
        agregarIngles(id);
    } 

}

function agregarEspañol(identificador){
    document.getElementById(identificador).src = "images/espania.jpg";
    document.getElementById(identificador).title = "Español";
    document.getElementById(identificador).id = "espaniol"; 
}

function agregarPortugues(identificadorP){
    document.getElementById(identificadorP).src = "images/Brasil.png";
    document.getElementById(identificadorP).title = "Português";
    document.getElementById(identificadorP).id = "portugues";  
}

function agregarIngles(identificadorI){
    document.getElementById(identificadorI).src = "images/gc597b02fc70a409cc9cc2917942426f1de33173d7a4b18b4c927dce3c57aa933404a5b09e512eba56b6b713cb3dfbf0c_1280.png";
    document.getElementById(identificadorI).title = "English";
    document.getElementById(identificadorI).id = "ingles"; 
}