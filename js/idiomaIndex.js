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
    document.getElementById("Cabanias").innerHTML = "Carpicabañas";

    document.getElementById("Fotos").innerHTML = "Fotos";
    document.getElementById("FotosInst").innerHTML = "Instalações";
    document.getElementById("FotosServ").innerHTML = "Serviços";
    document.getElementById("MasFotos").innerHTML = "Mais fotos";

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
    document.getElementById("CabaniasResp").innerHTML = "Carpicabañas";

    document.getElementById("FotosResp").innerHTML = "Fotos";
    document.getElementById("FotosInstResp").innerHTML = "Instalações";
    document.getElementById("FotosServResp").innerHTML = "Serviços";
    document.getElementById("MasFotosResp").innerHTML = "Mais fotos";

    document.getElementById("UbicacionResp").innerHTML = "Localização";
    document.getElementById("ContactoResp").innerHTML = "Contacto";

    //cosas individuales de la pagina

    document.getElementById("Alojamiento").innerHTML = "ALOJAMENTO <br>TURISTICO";
    document.getElementById("Bienvenidos").innerHTML = "BEM-VINDO"; 
    document.getElementById("textoPrincipal").innerHTML = `
    <span style="font-weight: 700;" class="u-text-custom-color-2"> El Cocal</span>&nbsp;é um lugar onde a harmonia da natureza nos convida a desfrutar e a sentirmo-nos mais realizados. Dunas, montanhas e uma extensa praia onde se podem encontrar os restos de um navio que encalhou, cujo nome levámos para nomear o parque de campismo e parador. O Parador está localizado a 30 metros acima do nível do mar e tem um grande salão e terraço panorâmico que o torna um miradouro natural. Daqui pode contemplar o nascer do sol e o mágico nascer da lua no horizonte do mar. Também se pode ver a silhueta do Polónio e o seu farol, Valizas, Águas Dulce e as ilhas de Castillos.<br>
    <br>Se estiver a pensar em férias, descansar e passar bons momentos com a família ou amigos, tenha em conta este lugar, é um destino natural.
    <br>
    <br>
    O parque de campismo ecológico <span style="font-weight: 700;" class="u-text-custom-color-2">El Cocal</span> em Rocha convida todos aqueles que amam o turismo natural a fazer parte do mesmo. Os espaços verdes, a praia, as montanhas baixas e os restos do emblemático barco de pesca, fazem do El Cocal um lugar para desfrutar, descansar e sonhar.
    <br>
    <br>Venha visitar-nos! Não se deve falar apenas disso, é preciso vivê-lo: natureza, paz, imensidão e plenitude.
    `;
    
    document.getElementById("Dudas").innerHTML = "Dúvidas frequentes";
    document.getElementById("pregunta1").innerHTML = "Como chegar lá de ônibus?";
    document.getElementById("respuesta1").innerHTML ="Do Terminal 3 Cruces apanhar um ônibus das empresas Cynsa, Rutas del Sol ou Cot com destino à Chuy. Apanhar o ônibus para La Esmeralda, desembarcar no km 273.100 da rota 9. Pedimos ao hóspede para dar um aviso prévio a fim de coordenar a transferência para El Cocal. ";

    document.getElementById("pregunta2").innerHTML = "As transferências custam dinheiro?";
    document.getElementById("respuesta2").innerHTML ="Não, o convidado de El Cocal poderá coordenar (aviso prévio) a sua recepção na rota 9 273,100 Km a cargo de El Cocal, que o irá buscar numa carrinha. Também nos oferecemos para o levar à estrada no momento da sua partida, também gratuitamente.";

    




}

function cambiarAEspaniol(){
    document.getElementById("logoNav").src = "images/Logo.png";
    document.getElementById("logoPie").src = "images/Logo.png";
}

function cambiarAIngles(){
   
    //logo
    document.getElementById("logoNav").src = "images/Logo-Ing.png";
    document.getElementById("logoPie").src = "images/Logo-Ing.png";

    //nav bar
    document.getElementById("Inicio").innerHTML = "Home";
    document.getElementById("Actividades").innerHTML = "Activities";

    document.getElementById("Instalaciones").innerHTML = "Facilities";
    document.getElementById("InstalacionesSub").innerHTML = "Facilities";
    document.getElementById("Servicios").innerHTML = "Services";

    document.getElementById("Tarifas").innerHTML = "Fees";
    document.getElementById("Camping").innerHTML = "Camping";
    document.getElementById("Cabanias").innerHTML = "Carpicabañas";

    document.getElementById("Fotos").innerHTML = "Photos";
    document.getElementById("FotosInst").innerHTML = "Facilities";
    document.getElementById("FotosServ").innerHTML = "Services";
    document.getElementById("MasFotos").innerHTML = "More photos";

    document.getElementById("Ubicacion").innerHTML = "Location";
    document.getElementById("Contacto").innerHTML = "Contact";

    //navBar responsive
    document.getElementById("InicioResp").innerHTML = "Home";
    document.getElementById("ActividadesResp").innerHTML = "Activities";

    document.getElementById("InstalacionesResp").innerHTML = "Facilities";
    document.getElementById("InstalacionesSubResp").innerHTML = "Facilities";
    document.getElementById("ServiciosResp").innerHTML = "Services";

    document.getElementById("TarifasResp").innerHTML = "Fees";
    document.getElementById("CampingResp").innerHTML = "Camping";
    document.getElementById("CabaniasResp").innerHTML = "Carpicabañas";

    document.getElementById("FotosResp").innerHTML = "Photos";
    document.getElementById("FotosInstResp").innerHTML = "Facilities";
    document.getElementById("FotosServResp").innerHTML = "Services";
    document.getElementById("MasFotosResp").innerHTML = "More photos";

    document.getElementById("UbicacionResp").innerHTML = "Location";
    document.getElementById("ContactoResp").innerHTML = "Contact";

    //cosas individuales de la pagina

    document.getElementById("Alojamiento").innerHTML = "TOURIST <br>ACCOMMODATION";
    document.getElementById("Bienvenidos").innerHTML = "WELCOME"; 
    document.getElementById("textoPrincipal").innerHTML = `
    <span style="font-weight: 700;" class="u-text-custom-color-2"> El Cocal</span>&nbsp;is a place where the harmony of nature invites us to enjoy and feel more fulfilled. Dunes, mountains and an extensive beach where you can find the remains of a ship that ran aground, whose name we took to name the campsite and parador. The Parador is located 30 metres above sea level and has a large lounge and panoramic terrace that makes it a natural belvedere. From here you can contemplate the sunrise and the magical moonrise on the sea horizon. You can also see the silhouette of Polonio and its lighthouse, Valizas, Aguas Dulce and the islands of Castillos.<br>
    <br>If you are thinking about holidays, resting and having a good time with family or friends, consider this place, it is a natural destination.
    <br>
    <br>
    The ecological campsite called <span style="font-weight: 700;" class="u-text-custom-color-2">El Cocal</span>, eThe green spaces, the beach, the low mountains and the remains of the emblematic fishing boat, make El Cocal a place to enjoy, rest and dream.
    <br>
    <br>Come and visit us! You should not only talk about it, you have to live it: nature, peace, immensity and plenitude.
    `;
    
    document.getElementById("Dudas").innerHTML = "Frequent questions";
    document.getElementById("pregunta1").innerHTML = "How do I get there by bus?";
    document.getElementById("respuesta1").innerHTML ="From Terminal 3 Cruces, take a bus with the companies Cynsa, Rutas del Sol or Cot to Chuy. Take the bus to La Esmeralda, get off at km 273.100 of Route 9. We ask the guest to give advance notice in order to coordinate the transfer to El Cocal.";

    document.getElementById("pregunta2").innerHTML = "Do the transfers cost money?";
    document.getElementById("respuesta2").innerHTML ="No, the guest from El Cocal can coordinate (prior notice) his reception on route 9 273.100 Km in charge of El Cocal, who will pick him up in a van. We also offer to take you to the road at the moment of your departure, also free of charge.";

    


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