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
    //Carrusel
    document.getElementById("Pesca1").innerHTML = "Pesca";
    document.getElementById("PescaLuz").innerHTML = "Pescar com luz deslumbrante";
    document.getElementById("RecorridoPlaya").innerHTML = "Passeio de praia, duna e montanha";
    document.getElementById("Aves").innerHTML = "Observação de aves";
    document.getElementById("Parador").innerHTML = "Actividades no Parador";
    document.getElementById("Prismaticos").innerHTML = "Binóculos";
    document.getElementById("ExtensasPlayas").innerHTML = "Praia longa";

    //Acordion
    document.getElementById("masInfo").innerHTML = "Mais informações sobre as actividades";

    document.getElementById("Pesca2").innerHTML = "Pesca";
    document.getElementById("textoPesca").innerHTML = "Pode desfrutar da actividade em ambientes naturais, dotados de belas paisagens, de uma flora e fauna seleccionadas e de condições climáticas agradáveis. Os grandes corvineiros pretos, solas, douradas, burriquetas, abróteas, garoupas, badejos, silversides e anchovas, são algumas das espécies mais atractivas para os entusiastas da pesca. Os grandes corvineiros pretos, assim como as solas que atingem pesos superiores a 10 quilos, são um património exclusivo da região da costa marítima uruguaia e um dos grandes troféus dos pescadores.";

    document.getElementById("PescaEncandilada").innerHTML = "Pescar com luz deslumbrante";
    document.getElementById("textoLuz").innerHTML = "A pesca à linha é uma modalidade de pesca desportiva baseada na utilização de uma luz forte com a intenção de deslumbrar o peixe. Este tipo de pesca baseia-se numa característica da retina de algumas variedades de peixe, em que existem dois tipos de células sensíveis à luz, os cones e as varas. Durante o dia, o olho do peixe expõe a imagem aos cones, que são menos sensíveis à luz mas sensíveis às cores, enquanto à noite, a imagem é focada nas varas, que não são sensíveis à cor mas são muito mais sensíveis à luz. Quando o peixe é surpreendido por uma luz forte centrada nas varas da retina, produz-se uma espécie de sobrecarga no seu sistema nervoso, que o imobiliza momentaneamente. Este é o momento em que os pescadores aproveitam para capturar o peixe com uma rede ou arpão. Nas praias do parque de campismo El Cocal, especialmente nas noites quentes sem lua cheia, é comum ver pessoas a pescar na praia, num estado deslumbrante. A pesca é feita com a família ou um grupo de amigos, utilizando uma lanterna de gás, mas hoje em dia é mais fácil utilizar uma lanterna potente e um pequeno caldeirão ou meio mundo (equipamento de pesca circular com cabo) e sacos (para colocar o peixe) que são levados numa alça de ombro por aqueles que participam. As crianças também podem participar nesta bela experiência, porque existem pequenos caldeirões para elas.";

    document.getElementById("RecorridoP").innerHTML = "Passeio de praia, duna e montanha";
    document.getElementById("textoRecorrido").innerHTML = "A combinação de praia, dunas e montanhas faz de um passeio uma aventura. Desfrutar de um passeio apreciando a fauna e flora do lugar é algo muito relaxante, especialmente se acrescentarmos a brisa que acaricia os nossos rostos e apreciarmos o aroma característico das costas uruguaias. Andar sobre as sombras da floresta faz-nos sentir cheios e harmoniosos.";

    document.getElementById("aves2").innerHTML = "Observação de aves";
    document.getElementById("textoAves").innerHTML = "A observação de aves consiste na observação respeitosa, estudo e conservação das aves selvagens nos seus ambientes naturais, identificando as espécies e aprendendo sobre a sua alimentação, nidificação, época de reprodução, migrações, ecossistemas onde se instalam e todas as características que tornam cada ave única e particular. Uruguai em Guarani significa ''rio das aves pintadas'' e não é em vão que o povo indígena deu ao país o nome das suas aves. Mais de 220 espécies de aves migratórias e residentes habitam as massas de água e os pântanos da Rocha. Existe a maior concentração na região de cisnes de pescoço preto, gansos coscoroba, gaivotas, tarambolas, viúvas brancas e é também um local de nidificação para outras espécies.";

    document.getElementById("Parador2").innerHTML = "Actividades no Parador";
    document.getElementById("textoParador").innerHTML = "Temos binóculos para ver o Polónio e o seu farol, Valizas, Águas Dulces e as ilhas de Castillos.";

    document.getElementById("Prisma").innerHTML = "Binóculos";
    document.getElementById("textoPrisma").innerHTML = "Temos binóculos para ver o Polónio e o seu farol, Valizas, Águas Dulces e as ilhas de Castillos";

    document.getElementById("muchaPlaya").innerHTML = "Praia longa";
    document.getElementById("textoMucha").innerHTML = "Uma extensa praia de areia fina e branca, rodeada por dunas, montanhas e pelo Oceano Atlântico. A praia é ideal para desfrutar com a família ou sozinha para meditar ou contemplar a natureza no seu estado mais sereno. Nas nossas praias encontrará um navio que encalhou em 1969, o qual é considerado uma atracção turística, o qual terá o prazer de ver.";

    //Segundo bloque
    document.getElementById("contenidoMapa").innerHTML = `
    <h2 class="u-text u-text-1"> ¡Toda&nbsp;<span style="font-weight: 700;">a Rocha&nbsp;</span>a um passo de distância!
    </h2>
    <blockquote class="u-border-custom-color-6 u-text u-text-2">Num raio de 40 quilómetros, pode visitar as seguintes estâncias balneares:
    </blockquote>
    <ul class="u-text u-text-3">
      <li> La Esmeralda (12&nbsp;Km)</li>
      <li>Águas doces (22 Km)</li>
      <li>Castelos  (​12&nbsp;Km)</li>
      <li>Valizas (35 Km)</li>
      <li>Punta del diablo (​38 Km)</li>
      <li>Cabo Polonio (​38 Km)</li>
    </ul>
    <p class="u-text u-text-4">Se desejar desfrutar de um passeio pela praia, pode visitar La Esmeralda (3,5 Km) e Aguas Dulces (9 Km).
    </p>
    <a href="https://www.google.com/maps/place/El+Cocal+-+Camping+ecol%C3%B3gico/@-34.193283,-53.7202477,17z/data=!3m1!4b1!4m5!3m4!1s0x957336dff26a34f7:0x71d8a6a36cb37742!8m2!3d-34.193283!4d-53.718059" class="u-align-center u-border-none u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1">VER LOCALIZAÇÃO</a>
  
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

    document.getElementById("FotosResp").innerHTML = "Photos";
    document.getElementById("FotosInstResp").innerHTML = "Facilities";
    document.getElementById("FotosServResp").innerHTML = "Services";
    document.getElementById("MasFotosResp").innerHTML = "More photos";

    document.getElementById("UbicacionResp").innerHTML = "Location";
    document.getElementById("ContactoResp").innerHTML = "Contact";

    //cosas individuales de la pagina
    //Carrusel
    document.getElementById("Pesca1").innerHTML = "Fishing";
    document.getElementById("PescaLuz").innerHTML = "Fishing in dazzling light";
    document.getElementById("RecorridoPlaya").innerHTML = "Beach, dune and mountain walk";
    document.getElementById("Aves").innerHTML = "Bird watching";
    document.getElementById("Parador").innerHTML = "Activities at the Parador";
    document.getElementById("Prismaticos").innerHTML = "Binoculars";
    document.getElementById("ExtensasPlayas").innerHTML = "Long beach";

    //Acordion
    document.getElementById("masInfo").innerHTML = "More information about the activities";
    document.getElementById("Pesca2").innerHTML = "Fishing";
    document.getElementById("textoPesca").innerHTML = "You can enjoy the activity in natural environments, endowed with beautiful landscapes, selected flora and fauna and pleasant weather conditions. The great black croakers, flounders, gilthead bream, jack mackerel, forkbeards, groupers, whiting, silversides and anchovies are some of the most attractive species for fishing enthusiasts. The large black croakers, as well as the soles that reach weights of over 10 kilos, are an exclusive heritage of the Uruguayan sea coast region and one of the great trophies of fishermen.";

    document.getElementById("PescaEncandilada").innerHTML = "Fishing in dazzling light";
    document.getElementById("textoLuz").innerHTML = "Angling is a sport fishing modality based on the use of a strong light with the intention of dazzling the fish. This type of fishing is based on a feature of the retina of some varieties of fish, in which there are two types of light-sensitive cells, the cones and rods. During the day, the fish's eye exposes the image to the cones, which are less sensitive to light but sensitive to colour, while at night, the image is focused on the rods, which are not sensitive to colour but are much more sensitive to light. When the fish is surprised by a strong light focused on the rods in the retina, a kind of overload is produced in its nervous system, which momentarily immobilises it. This is the moment when fishermen take advantage of it to catch the fish with a net or harpoon. On the beaches of the El Cocal campsite, especially on warm nights without a full moon, it is common to see people fishing on the beach in a dazzling state. Fishing is done with the family or a group of friends, using a gas torch, but nowadays it is easier to use a powerful torch and a small cauldron or half-world (circular fishing equipment with a handle) and bags (to put the fish in) that are carried on a shoulder strap by those taking part. Children can also participate in this beautiful experience, because there are small cauldrons for them.";

    document.getElementById("RecorridoP").innerHTML = "Beach, dune and mountain walk";
    document.getElementById("textoRecorrido").innerHTML = "The combination of beach, dunes and mountains makes a walk an adventure. Enjoying a walk appreciating the fauna and flora of the place is something very relaxing, especially if we add the breeze that caresses our faces and enjoy the characteristic aroma of the Uruguayan coasts. Walking under the shadows of the forest makes us feel full and harmonious.";

    document.getElementById("aves2").innerHTML = "Bird watching";
    document.getElementById("textoAves").innerHTML = "Birdwatching is the respectful observation, study and conservation of wild birds in their natural environments, identifying species and learning about their feeding, nesting, breeding season, migrations, ecosystems where they settle and all the characteristics that make each bird unique and particular. Uruguay in Guarani means 'river of painted birds' and it is not in vain that the indigenous people gave the country the name of its birds. Over 220 species of migratory and resident birds inhabit the water bodies and marshes of Rocha. There is the highest concentration in the region of black-necked swans, coscoroba geese, gulls, plovers, white widows and it is also a nesting place for other species.";

    document.getElementById("Parador2").innerHTML = "Activities at the Parador";
    document.getElementById("textoParador").innerHTML = "We have binoculars to see Polonio and its lighthouse, Valizas, Aguas Dulces and the islands of Castillos.";

    document.getElementById("Prisma").innerHTML = "Binoculars";
    document.getElementById("textoPrisma").innerHTML = "We have binoculars to see Polonio and its lighthouse, Valizas, Aguas Dulces and the islands of Castillos.";

    document.getElementById("muchaPlaya").innerHTML = "Long beach";
    document.getElementById("textoMucha").innerHTML = "An extensive beach of fine white sand, surrounded by dunes, mountains and the Atlantic Ocean. The beach is ideal to enjoy with the family or alone to meditate or contemplate nature in its most serene state. On our beaches you will find a ship that ran aground in 1969, which is considered a tourist attraction, which you will have the pleasure of seeing.";

    //Segundo bloque
    document.getElementById("contenidoMapa").innerHTML = `
    <h2 class="u-text u-text-1"> ¡All of&nbsp;<span style="font-weight: 700;"> Rocha&nbsp;</span> a stone's throw away!
    </h2>
    <blockquote class="u-border-custom-color-6 u-text u-text-2">Within a radius of 40 kilometres, you can visit the following seaside resorts:
    </blockquote>
    <ul class="u-text u-text-3">
        <li> La Esmeralda (12&nbsp;Km)</li>
        <li>Águas doces (22 Km)</li>
        <li>Castelos  (​12&nbsp;Km)</li>
        <li>Valizas (35 Km)</li>
        <li>Punta del diablo (​38 Km)</li>
        <li>Cabo Polonio (​38 Km)</li>
    </ul>
    <p class="u-text u-text-4">If you wish to enjoy a walk along the beach, you can visit La Esmeralda (3.5 Km) and Aguas Dulces (9 Km).
    </p>
    <a href="https://www.google.com/maps/place/El+Cocal+-+Camping+ecol%C3%B3gico/@-34.193283,-53.7202477,17z/data=!3m1!4b1!4m5!3m4!1s0x957336dff26a34f7:0x71d8a6a36cb37742!8m2!3d-34.193283!4d-53.718059" class="u-align-center u-border-none u-btn u-btn-round u-button-style u-custom-color-6 u-hover-custom-color-7 u-radius-50 u-btn-1">SEE LOCATION</a>
    
    `;
    
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