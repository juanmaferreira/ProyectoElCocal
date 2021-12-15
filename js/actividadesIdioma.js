document.addEventListener("DOMContentLoaded", function(e){ 
    let idiomaGuardado = localStorage.getItem("idioma");
    if(idiomaGuardado === null || idiomaGuardado === "Espaniol"){
        cambiarAEspaniol();
    }

    if(idiomaGuardado === "Portugues"){
        cambiarAPortugues();
    }

    if(idiomaGuardado === "Ingles"){
        cambiarAIngles();
    }
});

function cambiarIdiomaPT(){
    let idioma = "Portugues";
    localStorage.setItem("idioma", idioma);
}

function cambiarIdiomaES(){
    let idioma = "Espaniol";
    localStorage.setItem("idioma", idioma);
}

function cambiarIdiomaEN(){
    let idioma = "Ingles";
    localStorage.setItem("idioma", idioma);
}


//Funciones que si bien son iguales su interior cambia

function cambiarAPortugues(){
    //logo
    document.getElementById("logoNav").src = "images/LogoPor.png";
    document.getElementById("logoPie").src = "images/LogoPor.png";

    //nav bar
    document.getElementById("Inicio").innerHTML = "Começo";
    document.getElementById("Actividades").innerHTML = "Atividades";

    document.getElementById("Instalaciones").innerHTML = "Instalações";
    document.getElementById("InstalacionesSub").innerHTML = "Instalações";
    document.getElementById("Servicios").innerHTML = "Serviços";

    document.getElementById("Tarifas").innerHTML = "Tarifas";
    document.getElementById("Camping").innerHTML = "Camping";
    document.getElementById("Cabanias").innerHTML = "Chalé";

    document.getElementById("Fotos").innerHTML = "Fotos";
    document.getElementById("FotosInst").innerHTML = "Instalações";
    document.getElementById("FotosServ").innerHTML = "Serviços";
    document.getElementById("MasFotos").innerHTML = "Mais Fotos";

    document.getElementById("Ubicacion").innerHTML = "Localização";
    document.getElementById("Contacto").innerHTML = "Contacto";

    //navBar responsive
    document.getElementById("InicioResp").innerHTML = "Começo";
    document.getElementById("ActividadesResp").innerHTML = "Atividades";

    document.getElementById("InstalacionesResp").innerHTML = "Instalações";
    document.getElementById("InstalacionesSubResp").innerHTML = "Instalações";
    document.getElementById("ServiciosResp").innerHTML = "Serviços";

    document.getElementById("TarifasResp").innerHTML = "Tarifas";
    document.getElementById("CampingResp").innerHTML = "Camping";
    document.getElementById("CabaniasResp").innerHTML = "Chalé";

    document.getElementById("FotosResp").innerHTML = "Fotos";
    document.getElementById("FotosInstResp").innerHTML = "Instalações";
    document.getElementById("FotosServResp").innerHTML = "Serviços";
    document.getElementById("MasFotosResp").innerHTML = "Mais Fotos";

    document.getElementById("UbicacionResp").innerHTML = "Localização";
    document.getElementById("ContactoResp").innerHTML = "Contacto";

    //cosas individuales de la pagina

}

function cambiarAEspaniol(){
    document.getElementById("logoNav").src = "images/Logo.png";
    document.getElementById("logoPie").src = "images/Logo.png";
}

function cambiarAIngles(){
    document.getElementById("logoNav").src = "images/Logo-Ing.png";
    document.getElementById("logoPie").src = "images/Logo-Ing.png";
}

/*
    document.getElementById("Inicio").innerHTML = "";
    document.getElementById("Actividades").innerHTML = "";

    document.getElementById("Instalaciones").innerHTML = "";
    document.getElementById("InstalacionesSub").innerHTML = "";
    document.getElementById("Servicios").innerHTML = "";

    document.getElementById("Tarifas").innerHTML = "";
    document.getElementById("Camping").innerHTML = "";
    document.getElementById("Cabanias").innerHTML = "";

    document.getElementById("Fotos").innerHTML = "";
    document.getElementById("FotosInst").innerHTML = "";
    document.getElementById("FotosServ").innerHTML = "";
    document.getElementById("MasFotos").innerHTML = "";

    document.getElementById("Ubicacion").innerHTML = "";
    document.getElementById("Contacto").innerHTML = "";

    */