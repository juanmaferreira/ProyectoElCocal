var datosTarifa;

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

    $.getJSON("tarifas.json", function(json) {
      datosTarifa = json;
      
      cargarDatosTarifa();
    });
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
    document.getElementById("CabaniasResp").innerHTML = "Carpicabañas";

    document.getElementById("FotosResp").innerHTML = "Fotos";
    document.getElementById("FotosInstResp").innerHTML = "Instalações";
    document.getElementById("FotosServResp").innerHTML = "Serviços";
    document.getElementById("MasFotosResp").innerHTML = "Mais Fotos";

    document.getElementById("UbicacionResp").innerHTML = "Localização";
    document.getElementById("ContactoResp").innerHTML = "Contacto";

    //cosas individuales de la pagina

    document.getElementById("PrimerBloque").innerHTML = `
    <h2 class="u-text u-text-default u-text-1">Taxas de acampamento
    </h2>
    <p class="u-text u-text-2">Época <em id="anio1">2021</em><br>As tarifas mencionadas abaixo são por pessoa e por dia. O preço está em pesos uruguaios.
    </p>
    <div class="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
      <div class="u-gutter-0 u-layout">
        <div class="u-layout-row">
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-3 u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
            <div class="u-container-layout u-container-layout-1">
              <h4 class="u-text u-text-3">Até 7 dias</h4>
              <h2 id="elBajo" class="u-text u-text-4">$U 420</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1" target="_blank"><span class="u-icon u-icon-1"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVA

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20hasta%207%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-2"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVA

              </a>
            </div>
          </div>
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-20 u-layout-cell-2">
            <div class="u-container-layout u-container-layout-2">
              <h4 class="u-text u-text-5">8 a 15 dias</h4>
              <h2 id="elMedio" class="u-text u-text-6">$U 390</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-3" target="_blank"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVA

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20de%208%20a%2015%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVA

              </a>
            </div>
          </div>
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-2 u-layout-cell u-left-cell u-size-20 u-layout-cell-3">
            <div class="u-container-layout u-container-layout-3">
              <h4 class="u-text u-text-7">Mais de 15 dias</h4>
              <h2 id="elAlto" class="u-text u-text-8">$U 360</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-5" target="_blank"><span class="u-icon"><svg class="u-svg-content" viewBox="0 0 512 512"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span> &nbsp;RESERVA

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20m%C3%A1s%20de%2015%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-6"><span class="u-icon u-icon-6"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVA

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="Instalaciones.html#carousel_db6b" data-page-id="76424729" class="u-active-grey-40 u-border-none u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-7">VER INSTALAÇÕES</a>
    <a href="Instalaciones.html#sec-407e" data-page-id="76424729" class="u-active-grey-40 u-border-none u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-8">VER SERVIÇOS
    </a>`;
document.getElementById("bloque2").innerHTML = `
    <h2 class="u-text u-text-default u-text-1">Taxas de carpicabaña</h2>
    <p class="u-text u-text-2"> Época <em id="anio2">2021</em>
    <br>A taxa mencionada abaixo é por dia. O preço está em pesos uruguaios.
    </p>
    <div class="u-clearfix u-expanded-width u-gutter-12 u-layout-wrap u-layout-wrap-1">
      <div class="u-gutter-0 u-layout">
        <div class="u-layout-row">
          <div class="u-align-center u-container-style u-custom-color-3 u-layout-cell u-size-30 u-layout-cell-1">
            <div class="u-container-layout u-container-layout-1">
              <h4 class="u-text u-text-3">Para 2 pessoas
              </h4>
              <h2 id="Carpi1" class="u-text u-text-4">$U 1500</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1" target="_blank"><span class="u-icon u-icon-1"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVA
              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20Capricaba%C3%B1a" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-2"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVA
              </a>
            </div>
          </div>
          <div class="u-align-center u-container-style u-custom-color-1 u-layout-cell u-size-30 u-layout-cell-2">
            <div class="u-container-layout u-container-layout-2">
              <h4 class="u-text u-text-5">Para 4 pessoas</h4>
              <h2 id="Carpi2" class="u-text u-text-6">$U 2500</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-3" target="_blank"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVA
              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20Capricaba%C3%B1a" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="Instalaciones.html#carousel_db6b" data-page-id="76424729" class="u-active-grey-40 u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-5">VER INSTALAÇÕES</a>
    <a href="Instalaciones.html#sec-407e" data-page-id="76424729" class="u-active-grey-40 u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-6">VER SERVIÇOS
    </a>
    `;
    
    document.getElementById("bloque3").innerHTML = `
    <h3 class="u-text u-text-custom-color-6 u-text-1">Reservas</h3>
        <p class="u-text u-text-2"> Crianças com menos de 5 anos de idade livres.<br>As crianças entre os 6 e 12 anos de idade têm um desconto de 50%.<br>
        São aceitos dólares americanos ou pesos uruguaios.&nbsp;<br>Os cartões de crédito são aceites. Trabalhamos com Visa, Mastercard e Oca.<br>
        </p>
        <a href="https://www.brou.com.uy/cotizaciones" class="u-btn u-button-style u-none u-text-active-custom-color-2 u-text-custom-color-1 u-text-hover-custom-color-3 u-btn-1" target="_blank">VER COTAÇÃO DA DATA (BROU) <span class="u-text-custom-color-2">
            <span class="u-text-custom-color-1"></span>
          </span>&nbsp;<span class="u-icon u-text-custom-color-6 u-icon-1"><svg class="u-svg-content" viewBox="0 -32 426.66667 426" style="width: 1em; height: 1em;"><path d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0"></path><path d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0"></path></svg><img></span>
        </a>
        <div class="u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-1" data-image-width="600" data-image-height="480">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-2" data-image-width="150" data-image-height="75">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-2"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-3" data-image-width="150" data-image-height="75">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-4" data-image-width="600" data-image-height="480">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-4"></div>
            </div>
          </div>
        </div>
        <div class="u-list u-list-2">
          <div class="u-repeater u-repeater-2">
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-2" target="_blank"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 512 512" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2; width: 1em; height: 1em;"><path d="M381.953,-0.001c3.073,0 9.216,0 13.824,0.512c11.264,0 26.112,1.024 32.768,2.56c10.24,2.048 19.968,5.12 27.648,9.216c9.728,4.608 17.92,10.752 25.6,18.432c7.168,7.168 13.312,15.36 17.92,25.088c4.096,7.68 7.168,17.408 9.216,27.648c1.536,6.656 2.56,21.504 3.072,32.768l0,265.729c0,3.072 0,9.216 -0.512,13.824c0,11.264 -1.024,26.112 -2.56,32.768c-2.048,10.24 -5.12,19.968 -9.216,27.648c-4.608,9.728 -10.752,17.92 -18.432,25.6c-7.168,7.168 -15.36,13.312 -25.088,17.92c-7.68,4.096 -17.408,7.168 -27.648,9.216c-6.656,1.536 -21.504,2.56 -32.768,3.072l-265.728,0c-3.072,0 -9.216,0 -13.824,-0.512c-11.264,0 -26.112,-1.024 -32.768,-2.56c-10.24,-2.048 -19.968,-5.12 -27.648,-9.216c-9.728,-4.608 -17.92,-10.752 -25.6,-18.432c-7.168,-7.168 -13.312,-15.36 -17.92,-25.088c-4.096,-7.68 -7.168,-17.408 -9.216,-27.648c-1.536,-6.656 -2.56,-21.504 -3.072,-32.768l0,-265.729c0,-3.072 0,-9.216 0.512,-13.824c0,-11.264 1.024,-26.112 2.56,-32.768c2.048,-10.24 5.12,-19.968 9.216,-27.648c4.608,-9.728 10.752,-17.92 18.432,-25.6c7.168,-7.168 15.36,-13.312 25.088,-17.92c7.68,-4.096 17.408,-7.168 27.648,-9.216c6.656,-1.536 21.503,-2.56 32.768,-3.072l265.728,0Zm8.696,122.563c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076Zm-129.102,280.709l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645Zm83.207,-113.573c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325Z" id="WhatsApp-Logo-Icon" style="fill-rule:nonzero;"></path></svg><img></span>&nbsp; <span style="font-size: 1.25rem;">(+598) 99 824 175 </span>
                </a>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-6">
                <a href="tel:+598 4470 5832" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-3"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 56.7 56.7" style="width: 1em; height: 1em;"><g transform="translate(0.000000,950.000000) scale(0.100000,-0.100000)"><path d="M113.3835,9464.4268c-9.5542-1.0557-20.323-4.4873-29.771-9.3965c-22.2234-11.7178-38.7445-34.5215-43.126-59.6475   c-0.9507-5.3311-1.0033-12.5098-1.0033-178.415v-172.873l1.2147-5.3838c7.601-34.3633,31.8819-58.6455,66.2458-66.2461   l5.384-1.2139h173.6645h173.6653l5.384,1.2139c34.363,7.6006,58.6448,31.8828,66.2458,66.2461l1.2138,5.3838v172.873   c0,165.9053-0.0526,173.084-1.0023,178.415c-1.32,7.707-3.9588,15.4668-7.9713,23.4893   c-12.5096,25.1797-37.636,42.5986-65.823,45.6602C451.2644,9465.2188,119.6121,9465.165,113.3835,9464.4268z M301.986,9376.6436   c18.1584-2.2695,32.8326-6.6504,48.9327-14.5156c15.8352-7.7598,25.9698-15.0967,39.3776-28.4512   c12.5631-12.6162,19.531-22.1699,26.9207-37.0029c10.2935-20.6924,16.1528-45.29,17.1552-72.3691   c0.3701-9.2363,0.1062-11.2959-2.0058-13.9346c-4.0114-5.1211-12.8272-4.2754-15.8353,1.4775   c-0.9507,1.9004-1.2147,3.5361-1.5313,10.9268c-0.528,11.3486-1.319,18.6855-2.9029,27.4482   c-6.2285,34.3633-22.6979,61.8115-48.9854,81.501c-21.9058,16.4688-44.5511,24.4932-74.2159,26.2344   c-10.0295,0.5811-11.7713,0.9502-14.0409,2.6924c-4.2238,3.3252-4.4341,11.1367-0.3701,14.7793   c2.4811,2.2705,4.2228,2.5869,12.8272,2.3232C291.7987,9377.5947,298.3965,9377.0664,301.986,9376.6436z M181.3184,9370.9434   c1.8479-0.6338,4.6982-2.1113,6.3347-3.167c10.0286-6.6514,37.9525-42.3867,47.0849-60.2285   c5.2252-10.1875,6.9669-17.7363,5.3314-23.3311c-1.6901-6.0176-4.4868-9.1855-16.9973-19.2676   c-5.0147-4.0635-9.7129-8.2334-10.4513-9.3428c-1.9005-2.7451-3.4318-8.1289-3.4318-11.9297   c0.0536-8.8145,5.7541-24.8086,13.2499-37.1084c5.8057-9.5537,16.2044-21.7998,26.4979-31.1953   c12.0878-11.0859,22.7505-18.6338,34.7857-24.5986c15.466-7.7061,24.915-9.6592,31.8302-6.4404   c1.7417,0.792,3.5887,1.8486,4.1701,2.3223c0.527,0.4756,4.592,5.4375,9.0262,10.9268   c8.5508,10.7695,10.5039,12.5107,16.3632,14.5166c7.4432,2.5332,15.0442,1.8477,22.6978-2.0586   c5.8067-3.0088,18.4751-10.874,26.6567-16.5742c10.7679-7.5488,33.7823-26.3408,36.8976-30.0889   c5.4892-6.7559,6.4399-15.4121,2.7441-24.9678c-3.9062-10.0811-19.1083-28.9785-29.7184-37.0547   c-9.6067-7.2852-16.4158-10.0811-25.3894-10.5039c-7.3896-0.3691-10.4513,0.2637-19.9003,4.1699   c-74.1107,30.5625-133.2834,76.1689-180.263,138.8262c-24.5448,32.7266-43.2312,66.668-56.0058,101.876   c-7.4422,20.5332-7.8115,29.4541-1.6891,39.959c2.6398,4.4336,13.8831,15.4131,22.0647,21.5361   c13.6191,10.1348,19.9003,13.8828,24.915,14.9385C171.5529,9372.8965,177.5173,9372.3154,181.3184,9370.9434z M305.6283,9338.374   c32.0415-4.6973,56.8503-19.583,73.1082-43.7588c9.1323-13.6182,14.8329-29.6123,16.786-46.7676   c0.6858-6.2822,0.6858-17.7363-0.0526-19.6367c-0.6868-1.7949-2.9038-4.2227-4.8044-5.2256   c-2.0584-1.0557-6.4389-0.9502-8.8674,0.3164c-4.065,2.0586-5.2787,5.332-5.2787,14.1992c0,13.6719-3.537,28.082-9.6593,39.2725   c-6.9679,12.7744-17.1024,23.3311-29.4542,30.6689c-10.61,6.334-26.2874,11.0322-40.5924,12.1934   c-5.1735,0.4229-8.0238,1.4775-9.9769,3.748c-3.0081,3.4307-3.3256,8.0762-0.792,11.9287   C288.7897,9339.5889,293.0125,9340.2754,305.6283,9338.374z M316.8716,9298.5215c10.3987-2.2168,18.3699-6.1758,25.179-12.5635   c8.7622-8.2861,13.5664-18.3164,15.6773-32.7266c1.4252-9.3955,0.8446-13.0908-2.4811-16.1523   c-3.1141-2.8506-8.8672-2.9561-12.3517-0.2637c-2.5337,1.9004-3.3257,3.9062-3.9062,9.3428   c-0.6858,7.2314-1.953,12.2988-4.1166,16.9971c-4.6456,9.9766-12.8272,15.1494-26.6567,16.8389   c-6.4935,0.792-8.4465,1.5303-10.5575,4.0107c-3.8536,4.5928-2.3759,12.0361,2.9555,14.7803   c2.0067,1.0029,2.8512,1.1094,7.2845,0.8447C310.643,9299.4717,314.708,9298.9971,316.8716,9298.5215z"></path>
</g></svg><img></span>
                  <span style="font-size: 1.25rem;">&nbsp;(+598) 4470 5832</span>
                </a>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                <a href="mailto:camping.elcocal@gmail.com?subject=Rersevas%20general" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g id="_x31_12-gmail_x2C__email_x2C__mail"><g><g><g><rect height="358.87" style="fill:#F1F5F7;" width="357.904" x="77.045" y="76.565"></rect><path d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z M256.002,293.738" style="fill:#DCE6EA;"></path><path d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134      c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014      l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565      L449.861,76.565z M449.861,76.565" style="fill:#F84437;"></path>
</g>
</g>
</g>
</g></svg><img></span>&nbsp;<span style="font-size: 1.125rem;">camping.elcocal@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="u-text u-text-3"> Se tiver alguma dúvida, não tema em contactar-nos, teremos todo o prazer em responder-lhe o mais rapidamente possível.<br>Também o pode fazer preenchendo o formulário de contacto.
        </p>
    `;   

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
    
        document.getElementById("Fotos").innerHTML = "Photos";
        document.getElementById("FotosInstResp").innerHTML = "Facilities";
        document.getElementById("FotosServResp").innerHTML = "Services";
        document.getElementById("MasFotosResp").innerHTML = "More photos";
    
        document.getElementById("UbicacionResp").innerHTML = "Location";
        document.getElementById("ContactoResp").innerHTML = "Contact";
    //cosas individuales de la pagina

    document.getElementById("PrimerBloque").innerHTML = `
    <h2 class="u-text u-text-default u-text-1">Camping prices
    </h2>
    <p class="u-text u-text-2">Season <em id="anio1">2021</em><br>The rates mentioned below are per person per day. The price is in Uruguayan pesos.
    </p>
    <div class="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
      <div class="u-gutter-0 u-layout">
        <div class="u-layout-row">
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-3 u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
            <div class="u-container-layout u-container-layout-1">
              <h4 class="u-text u-text-3">Up to 7 days</h4>
              <h2 id="elBajo" class="u-text u-text-4">$U 420</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1" target="_blank"><span class="u-icon u-icon-1"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVE

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20hasta%207%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-2"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVE

              </a>
            </div>
          </div>
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-1 u-layout-cell u-left-cell u-size-20 u-layout-cell-2">
            <div class="u-container-layout u-container-layout-2">
              <h4 class="u-text u-text-5">8 to 15 days</h4>
              <h2 id="elMedio" class="u-text u-text-6">$U 390</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-3" target="_blank"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVE

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20de%208%20a%2015%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVE

              </a>
            </div>
          </div>
          <div class="u-align-center u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-custom-color-2 u-layout-cell u-left-cell u-size-20 u-layout-cell-3">
            <div class="u-container-layout u-container-layout-3">
              <h4  class="u-text u-text-7">More than 15 days</h4>
              <h2 id="elAlto" class="u-text u-text-8">$U 360</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-5" target="_blank"><span class="u-icon"><svg class="u-svg-content" viewBox="0 0 512 512"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span> &nbsp;RESERVE

              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20m%C3%A1s%20de%2015%20d%C3%ADas" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-6"><span class="u-icon u-icon-6"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVE

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="Instalaciones.html#carousel_db6b" data-page-id="76424729" class="u-active-grey-40 u-border-none u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-7">SEE FACILITIES</a>
    <a href="Instalaciones.html#sec-407e" data-page-id="76424729" class="u-active-grey-40 u-border-none u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-8">SEE SERVICES
    </a>`;
document.getElementById("bloque2").innerHTML = `
    <h2 class="u-text u-text-default u-text-1">Prices of carpicabañas</h2>
    <p class="u-text u-text-2"> Season <em id="anio2">2021</em>
    <br>The rate mentioned below is per day. The price is in Uruguayan pesos.
    </p>
    <div class="u-clearfix u-expanded-width u-gutter-12 u-layout-wrap u-layout-wrap-1">
      <div class="u-gutter-0 u-layout">
        <div class="u-layout-row">
          <div class="u-align-center u-container-style u-custom-color-3 u-layout-cell u-size-30 u-layout-cell-1">
            <div class="u-container-layout u-container-layout-1">
              <h4 class="u-text u-text-3"> For 2 people
              </h4>
              <h2 id="Carpi1" class="u-text u-text-4">$U 1500</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1" target="_blank"><span class="u-icon u-icon-1"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVE
              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20Capricaba%C3%B1a" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-2"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVE
              </a>
            </div>
          </div>
          <div class="u-align-center u-container-style u-custom-color-1 u-layout-cell u-size-30 u-layout-cell-2">
            <div class="u-container-layout u-container-layout-2">
              <h4  class="u-text u-text-5">For 4 people</h4>
              <h2 id="Carpi2" class="u-text u-text-6">$U 2500</h2>
              <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-3" target="_blank"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g><path d="M13.5,188.8c5,69.9,178.9,285.9,246,305.7c31.5,9.3,64.7,14,97.3,10c22.6-2.8,50-12.1,71-27.1l-115.4-142   c-6.4,5.4-11.2,12.4-13,20.7c-2.6,11.7-0.3,26.5-10,33.6c-7,5.1-16.7,3.2-25,0.7c-40.7-12.4-144.7-141.7-148.1-184.1   c-0.7-8.6-0.5-18.5,6-24.3c9-8,22.9-2.5,34.9-2.6c8.1,0,15.7-3,22.2-7.7L64.2,29.9C46,47.1,31.9,70.9,24.6,91.6   C13.6,122.6,11.2,156.1,13.5,188.8z" id="XMLID_6_"></path><path d="M191.4,79.1c-8.4-22.8-19.9-45.6-39.5-60.1c-27.6-20.4-55-14.6-77.7,2.5l114.7,141.2   c5.2-6.5,9-14.4,10.8-22.5C204.1,119.8,198.6,98.6,191.4,79.1z" id="XMLID_5_"></path><path d="M347,323.1c-8,0-16.1,1.9-23.4,5.3L438,469.3c20.2-18.4,30.6-43.3,17-73.6c-10-22.2-29.8-38.3-50.3-51.4   C387.3,333.1,367.8,323.1,347,323.1z" id="XMLID_4_"></path><g><path d="M324.5,13.3c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.8c0.7,0.1,1.3,0.1,2,0.2c84.9,8.8,146.9,85,138.1,169.9    l39.7,4.1C509.3,120.1,431.5,24.4,324.5,13.3z" id="XMLID_3_"></path><path d="M316.3,92.8c-0.7-0.1-1.3-0.1-2-0.2l-4.1,39.7c0.7,0.1,1.3,0.1,2,0.2c41.1,4.2,71.1,41.1,66.8,82.2    l39.7,4.1C425.3,155.9,379.3,99.3,316.3,92.8z" id="XMLID_2_"></path><path d="M269.7,203.5c-2,19.2,12,36.4,31.2,38.4c19.2,2,36.4-12,38.4-31.2c2-19.2-12-36.4-31.2-38.4    C288.9,170.3,271.7,184.3,269.7,203.5z" id="XMLID_1_"></path>
</g>
</g></svg><img></span>&nbsp;RESERVE
              </a>
              <a href="mailto:camping.elcocal@gmail.com?subject=Reserva%20Capricaba%C3%B1a" class="u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 24 24" style="width: 1em; height: 1em;"><g id="icons"><path d="M20,3H4C1.8,3,0,4.8,0,7v10c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V7C24,4.8,22.2,3,20,3z M21.6,8.8l-7.9,5.3   c-0.5,0.3-1.1,0.5-1.7,0.5s-1.2-0.2-1.7-0.5L2.4,8.8C2,8.5,1.9,7.9,2.2,7.4C2.5,7,3.1,6.9,3.6,7.2l7.9,5.3c0.3,0.2,0.8,0.2,1.1,0   l7.9-5.3c0.5-0.3,1.1-0.2,1.4,0.3C22.1,7.9,22,8.5,21.6,8.8z" id="email"></path>
</g></svg><img></span>&nbsp;RESERVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="Instalaciones.html#carousel_db6b" data-page-id="76424729" class="u-active-grey-40 u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-5">SEE FACILITIES</a>
    <a href="Instalaciones.html#sec-407e" data-page-id="76424729" class="u-active-grey-40 u-btn u-btn-round u-button-style u-grey-25 u-hover-grey-30 u-radius-50 u-btn-6">SEE SERVICES
    </a>
    `;
    
    document.getElementById("bloque3").innerHTML = `
    <h3 class="u-text u-text-custom-color-6 u-text-1">Reservations</h3>
        <p class="u-text u-text-2"> Children under 5 years free.<br>Children between 6 and 12 years old have a 50% discount.<br>
        US dollars or Uruguayan pesos are accepted.&nbsp;<br>All credit cards are accepted. We work with Visa, Mastercard and Oca.<br>
        </p>
        <a href="https://www.brou.com.uy/cotizaciones" class="u-btn u-button-style u-none u-text-active-custom-color-2 u-text-custom-color-1 u-text-hover-custom-color-3 u-btn-1" target="_blank">SEE DATE QUOTE (BROU) <span class="u-text-custom-color-2">
            <span class="u-text-custom-color-1"></span>
          </span>&nbsp;<span class="u-icon u-text-custom-color-6 u-icon-1"><svg class="u-svg-content" viewBox="0 -32 426.66667 426" style="width: 1em; height: 1em;"><path d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0"></path><path d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0"></path></svg><img></span>
        </a>
        <div class="u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-1" data-image-width="600" data-image-height="480">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-2" data-image-width="150" data-image-height="75">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-2"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-3" data-image-width="150" data-image-height="75">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3"></div>
            </div>
            <div class="u-container-style u-image u-image-round u-list-item u-radius-8 u-repeater-item u-image-4" data-image-width="600" data-image-height="480">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-4"></div>
            </div>
          </div>
        </div>
        <div class="u-list u-list-2">
          <div class="u-repeater u-repeater-2">
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-5">
                <a href="https://api.whatsapp.com/send/?phone=59899824175&amp;text&amp;app_absent=0" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-2" target="_blank"><span class="u-icon u-icon-2"><svg class="u-svg-content" viewBox="0 0 512 512" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2; width: 1em; height: 1em;"><path d="M381.953,-0.001c3.073,0 9.216,0 13.824,0.512c11.264,0 26.112,1.024 32.768,2.56c10.24,2.048 19.968,5.12 27.648,9.216c9.728,4.608 17.92,10.752 25.6,18.432c7.168,7.168 13.312,15.36 17.92,25.088c4.096,7.68 7.168,17.408 9.216,27.648c1.536,6.656 2.56,21.504 3.072,32.768l0,265.729c0,3.072 0,9.216 -0.512,13.824c0,11.264 -1.024,26.112 -2.56,32.768c-2.048,10.24 -5.12,19.968 -9.216,27.648c-4.608,9.728 -10.752,17.92 -18.432,25.6c-7.168,7.168 -15.36,13.312 -25.088,17.92c-7.68,4.096 -17.408,7.168 -27.648,9.216c-6.656,1.536 -21.504,2.56 -32.768,3.072l-265.728,0c-3.072,0 -9.216,0 -13.824,-0.512c-11.264,0 -26.112,-1.024 -32.768,-2.56c-10.24,-2.048 -19.968,-5.12 -27.648,-9.216c-9.728,-4.608 -17.92,-10.752 -25.6,-18.432c-7.168,-7.168 -13.312,-15.36 -17.92,-25.088c-4.096,-7.68 -7.168,-17.408 -9.216,-27.648c-1.536,-6.656 -2.56,-21.504 -3.072,-32.768l0,-265.729c0,-3.072 0,-9.216 0.512,-13.824c0,-11.264 1.024,-26.112 2.56,-32.768c2.048,-10.24 5.12,-19.968 9.216,-27.648c4.608,-9.728 10.752,-17.92 18.432,-25.6c7.168,-7.168 15.36,-13.312 25.088,-17.92c7.68,-4.096 17.408,-7.168 27.648,-9.216c6.656,-1.536 21.503,-2.56 32.768,-3.072l265.728,0Zm8.696,122.563c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076Zm-129.102,280.709l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645Zm83.207,-113.573c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325Z" id="WhatsApp-Logo-Icon" style="fill-rule:nonzero;"></path></svg><img></span>&nbsp; <span style="font-size: 1.25rem;">(+598) 99 824 175 </span>
                </a>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-6">
                <a href="tel:+598 4470 5832" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-3"><span class="u-icon u-icon-3"><svg class="u-svg-content" viewBox="0 0 56.7 56.7" style="width: 1em; height: 1em;"><g transform="translate(0.000000,950.000000) scale(0.100000,-0.100000)"><path d="M113.3835,9464.4268c-9.5542-1.0557-20.323-4.4873-29.771-9.3965c-22.2234-11.7178-38.7445-34.5215-43.126-59.6475   c-0.9507-5.3311-1.0033-12.5098-1.0033-178.415v-172.873l1.2147-5.3838c7.601-34.3633,31.8819-58.6455,66.2458-66.2461   l5.384-1.2139h173.6645h173.6653l5.384,1.2139c34.363,7.6006,58.6448,31.8828,66.2458,66.2461l1.2138,5.3838v172.873   c0,165.9053-0.0526,173.084-1.0023,178.415c-1.32,7.707-3.9588,15.4668-7.9713,23.4893   c-12.5096,25.1797-37.636,42.5986-65.823,45.6602C451.2644,9465.2188,119.6121,9465.165,113.3835,9464.4268z M301.986,9376.6436   c18.1584-2.2695,32.8326-6.6504,48.9327-14.5156c15.8352-7.7598,25.9698-15.0967,39.3776-28.4512   c12.5631-12.6162,19.531-22.1699,26.9207-37.0029c10.2935-20.6924,16.1528-45.29,17.1552-72.3691   c0.3701-9.2363,0.1062-11.2959-2.0058-13.9346c-4.0114-5.1211-12.8272-4.2754-15.8353,1.4775   c-0.9507,1.9004-1.2147,3.5361-1.5313,10.9268c-0.528,11.3486-1.319,18.6855-2.9029,27.4482   c-6.2285,34.3633-22.6979,61.8115-48.9854,81.501c-21.9058,16.4688-44.5511,24.4932-74.2159,26.2344   c-10.0295,0.5811-11.7713,0.9502-14.0409,2.6924c-4.2238,3.3252-4.4341,11.1367-0.3701,14.7793   c2.4811,2.2705,4.2228,2.5869,12.8272,2.3232C291.7987,9377.5947,298.3965,9377.0664,301.986,9376.6436z M181.3184,9370.9434   c1.8479-0.6338,4.6982-2.1113,6.3347-3.167c10.0286-6.6514,37.9525-42.3867,47.0849-60.2285   c5.2252-10.1875,6.9669-17.7363,5.3314-23.3311c-1.6901-6.0176-4.4868-9.1855-16.9973-19.2676   c-5.0147-4.0635-9.7129-8.2334-10.4513-9.3428c-1.9005-2.7451-3.4318-8.1289-3.4318-11.9297   c0.0536-8.8145,5.7541-24.8086,13.2499-37.1084c5.8057-9.5537,16.2044-21.7998,26.4979-31.1953   c12.0878-11.0859,22.7505-18.6338,34.7857-24.5986c15.466-7.7061,24.915-9.6592,31.8302-6.4404   c1.7417,0.792,3.5887,1.8486,4.1701,2.3223c0.527,0.4756,4.592,5.4375,9.0262,10.9268   c8.5508,10.7695,10.5039,12.5107,16.3632,14.5166c7.4432,2.5332,15.0442,1.8477,22.6978-2.0586   c5.8067-3.0088,18.4751-10.874,26.6567-16.5742c10.7679-7.5488,33.7823-26.3408,36.8976-30.0889   c5.4892-6.7559,6.4399-15.4121,2.7441-24.9678c-3.9062-10.0811-19.1083-28.9785-29.7184-37.0547   c-9.6067-7.2852-16.4158-10.0811-25.3894-10.5039c-7.3896-0.3691-10.4513,0.2637-19.9003,4.1699   c-74.1107,30.5625-133.2834,76.1689-180.263,138.8262c-24.5448,32.7266-43.2312,66.668-56.0058,101.876   c-7.4422,20.5332-7.8115,29.4541-1.6891,39.959c2.6398,4.4336,13.8831,15.4131,22.0647,21.5361   c13.6191,10.1348,19.9003,13.8828,24.915,14.9385C171.5529,9372.8965,177.5173,9372.3154,181.3184,9370.9434z M305.6283,9338.374   c32.0415-4.6973,56.8503-19.583,73.1082-43.7588c9.1323-13.6182,14.8329-29.6123,16.786-46.7676   c0.6858-6.2822,0.6858-17.7363-0.0526-19.6367c-0.6868-1.7949-2.9038-4.2227-4.8044-5.2256   c-2.0584-1.0557-6.4389-0.9502-8.8674,0.3164c-4.065,2.0586-5.2787,5.332-5.2787,14.1992c0,13.6719-3.537,28.082-9.6593,39.2725   c-6.9679,12.7744-17.1024,23.3311-29.4542,30.6689c-10.61,6.334-26.2874,11.0322-40.5924,12.1934   c-5.1735,0.4229-8.0238,1.4775-9.9769,3.748c-3.0081,3.4307-3.3256,8.0762-0.792,11.9287   C288.7897,9339.5889,293.0125,9340.2754,305.6283,9338.374z M316.8716,9298.5215c10.3987-2.2168,18.3699-6.1758,25.179-12.5635   c8.7622-8.2861,13.5664-18.3164,15.6773-32.7266c1.4252-9.3955,0.8446-13.0908-2.4811-16.1523   c-3.1141-2.8506-8.8672-2.9561-12.3517-0.2637c-2.5337,1.9004-3.3257,3.9062-3.9062,9.3428   c-0.6858,7.2314-1.953,12.2988-4.1166,16.9971c-4.6456,9.9766-12.8272,15.1494-26.6567,16.8389   c-6.4935,0.792-8.4465,1.5303-10.5575,4.0107c-3.8536,4.5928-2.3759,12.0361,2.9555,14.7803   c2.0067,1.0029,2.8512,1.1094,7.2845,0.8447C310.643,9299.4717,314.708,9298.9971,316.8716,9298.5215z"></path>
</g></svg><img></span>
                  <span style="font-size: 1.25rem;">&nbsp;(+598) 4470 5832</span>
                </a>
              </div>
            </div>
            <div class="u-align-left u-container-style u-list-item u-repeater-item">
              <div class="u-container-layout u-similar-container u-valign-top u-container-layout-7">
                <a href="mailto:camping.elcocal@gmail.com?subject=Rersevas%20general" class="u-active-none u-btn u-button-style u-hover-none u-none u-text-custom-color-2 u-text-hover-custom-color-3 u-btn-4"><span class="u-icon u-icon-4"><svg class="u-svg-content" viewBox="0 0 512 512" style="width: 1em; height: 1em;"><g id="_x31_12-gmail_x2C__email_x2C__mail"><g><g><g><rect height="358.87" style="fill:#F1F5F7;" width="357.904" x="77.045" y="76.565"></rect><path d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z M256.002,293.738" style="fill:#DCE6EA;"></path><path d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134      c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014      l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565      L449.861,76.565z M449.861,76.565" style="fill:#F84437;"></path>
</g>
</g>
</g>
</g></svg><img></span>&nbsp;<span style="font-size: 1.125rem;">camping.elcocal@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p class="u-text u-text-3"> If you have any questions, do not hesitate to contact us, we will be happy to answer you as soon as possible.You can also do this by filling in the contact form.        
        </p>
    `;   

}


function cargarDatosTarifa(){
  document.getElementById("elBajo").innerHTML = "$U" + "  " + datosTarifa.camping[0];
  document.getElementById("elMedio").innerHTML = "$U" + "  " + datosTarifa.camping[1];
  document.getElementById("elAlto").innerHTML ="$U" + "  " + datosTarifa.camping[2];

  document.getElementById("Carpi1").innerHTML ="$U" + "  " + datosTarifa.carpicabañas[0];
  document.getElementById("Carpi2").innerHTML ="$U" + "  " + datosTarifa.carpicabañas[1];

  document.getElementById("anio1").innerHTML = datosTarifa.anio;
  document.getElementById("anio2").innerHTML = datosTarifa.anio;
  
}