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
    document.getElementById("CabaniasResp").innerHTML = "Chalé";

    document.getElementById("FotosID").innerHTML = "Fotos";
    document.getElementById("FotosInstResp").innerHTML = "Instalações";
    document.getElementById("FotosServResp").innerHTML = "Serviços";
    document.getElementById("MasFotosResp").innerHTML = "Mais fotos";

    document.getElementById("UbicacionResp").innerHTML = "Localização";
    document.getElementById("ContactoResp").innerHTML = "Contacto";

    //cosas individuales de la pagina

    document.getElementById("InstalacionesTitulo").innerHTML = "Instalações";
    document.getElementById("contenidoInst").innerHTML = `
    <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div> Espaçosos campos arborizados, sem instalação eléctrica, porque a oferta destina-se a ser o mais natural possível.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Carpic cabines. Têm camas, beliches, colchões e almofadas. Têm luz, um pequeno convés e uma zona para barbecue. Os chuveiros e sanitários estão no parque de campismo.
    <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Churrascaria.<br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Armários de sanitários.
    <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Banhos com  água quente 24 horas por dia.<br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Lavatórios de louça.
    <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Lava-loiça.<br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Estacionamento com vigilância.
    <br>
  </li>
    `;

    document.getElementById("botonFoto1").innerHTML = "VER FOTOS";
    document.getElementById("tituloServ").innerHTML = "Serviços";
    document.getElementById("ServCont").innerHTML = `    
    <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Restaurante.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Grelha.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Pizzeria.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Padaria.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Comércio.
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Board jogos para crianças e adultos.<br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>
  </li>
  <li>Livros e materiais de desenho para crianças.
  <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Livros de informação e entretenimento para adultos.
    <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Aluguer de fogões a gás e cobertores.
    <br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>WiFi.<br>
  </li>
  <li>
    <div class="class u-list-icon u-text-custom-color-6">
      <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
    </div>Transferências em carrinha sem custos adicionais (à chegada e à partida).
    <br>
  </li>
    
    
    `;
    document.getElementById("botonFoto2").innerHTML = "VER FOTOS";
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
    document.getElementById("Cabanias").innerHTML = "Cottage";

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
    document.getElementById("CabaniasResp").innerHTML = "Cottage";

    document.getElementById("FotosID").innerHTML = "Photos";
    document.getElementById("FotosInstResp").innerHTML = "Facilities";
    document.getElementById("FotosServResp").innerHTML = "Services";
    document.getElementById("MasFotosResp").innerHTML = "More photos";

    document.getElementById("UbicacionResp").innerHTML = "Location";
    document.getElementById("ContactoResp").innerHTML = "Contact";

      //cosas individuales de la pagina

      document.getElementById("InstalacionesTitulo").innerHTML = "Facilities";
      document.getElementById("contenidoInst").innerHTML = `
      <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div> Spacious wooded fields, without electrical installation, because the offer is intended to be as natural as possible.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Carpic cabins. They have beds, bunk beds, mattresses and pillows. They have light, a small deck and a barbecue area. Showers and toilets are on the campsite.
      <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Barbecues.<br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Toilet cupboards.
      <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Showers with hot water 24 hours a day.<br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Dishwashing sinks.
      <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Dishwasher.<br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Parking with surveillance.
      <br>
    </li>
      `;
  
      document.getElementById("botonFoto1").innerHTML = "SEE PHOTOS";
      document.getElementById("tituloServ").innerHTML = "Services";
      document.getElementById("ServCont").innerHTML = `    
      <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Restaurant.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Grill.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Pizzeria.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Bakery.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Storage.
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Board games for children and adults.<br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>
    </li>
    <li>Books and drawing materials for children.
    <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Information and entertainment books for adults.
      <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Gas cooker hire and blankets.
      <br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>WiFi.<br>
    </li>
    <li>
      <div class="class u-list-icon u-text-custom-color-6">
        <div xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" class="u-svg-content">➔</div>
      </div>Travels by van at no additional cost (on arrival and departure).
      <br>
    </li>
      
      
      `;
      document.getElementById("botonFoto2").innerHTML = "SEE PHOTOS";
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