// Creo un escuchador de eventos que este vinculado al scroll
window.addEventListener("scroll", parallax);
// Guardamos en una variable a la sombra del hero
const sombraHero = document.querySelector(".primero .js-sombra");
// Guardamos en una variable a la sombra de la segunda seccion
const sombraTercero = document.querySelector(".tercero .js-sombra");
const tercero = document.querySelector(".tercero");
var pastHeight= 0;
// Guardamos en una variable a la sombra de abajo del tercero
const sombraTerceroAbajo = document.querySelector(".tercero .js-sombra:nth-child(3)");
// Guardamos en una variable a la ultima sombra de la tercera seccion
const sombraTerceroUltima = document.querySelector(".tercero .u-sombra:nth-of-type(2)");
// Guardamos en una variable a la cuarta seccion
const cuarto = document.querySelector(".cuarto");
// Guardamos en una variable la imagen referencial de la cuarta seccion
const imagenCuarta = document.querySelector(".cuarto__imagen");
// Guardo e una variable a la imagen que rotara en la quinta seccion
const imagenQuinta = document.querySelector(".quinto__bg");

// Creamos la funcion pertinente del escuchador de eventos
function parallax(event)
{
    // Creamos una variable donde alamacenare la cantidad para el trnaslate
    var position = window.scrollY;
    // Guardamos en una variable a la segunda seccion
    const segundo = document.querySelector(".segundo");
    // Guardamos en una variable a la tercera seccion
    // Guardamos en variables a las imagenes de la tercera seccion
    const imagenesGrilla = document.querySelectorAll(".js-imagenGrid");

    // Comprobacion para ir difuminando la sombra de la seccion del hero
    if(position>=2021)
    {
        if(parseFloat(sombraHero.style.opacity)>=0)
        {
            // sombraHero.style.opacity= parseFloat(sombraHero.style.opacity) - ((parseFloat(document.body.offsetHeight) - position) * 0.00009);
            sombraHero.style.opacity= parseFloat(sombraHero.style.opacity) - 0.02;
        }
    }
    else
    {
        if(parseFloat(sombraHero.style.opacity)<=1)
        {
            // sombraHero.style.opacity= parseFloat(sombraHero.style.opacity) + ((parseFloat(document.body.offsetHeight) - position) * 0.00009);
            sombraHero.style.opacity= parseFloat(sombraHero.style.opacity) + 0.02;
        }
    }

    // comprobacion para volver al scroll nombral la segunda con la tercera seccion
    if(position>=2340)
    {
        segundo.style.position="relative";
        tercero.style.position="relative";
    }
    // Comprobacion para cuando suba volver a mostrar todo igual (segunda y tercera seccion)
    else
    {
        segundo.style.position="";
        tercero.style.position="";
    }
    // Comprobacion para saber si estoy en la tercera seccion
    if(position>=2337)
    {
        // actual= actual - (position * 0.0005);
        var positionPImagen = 200 - position * 0.049;
        var positionSImagen = 100 + position * 0.02;
        var poistionTImagen = 150 - position * 0.05;
        imagenesGrilla[0].style.transform= "translateY(" + positionPImagen +"px)";
        imagenesGrilla[1].style.transform= "translateY(-" + positionSImagen +"px)";
        imagenesGrilla[2].style.transform= "translateY(" + poistionTImagen +"px)";
    }

    // Comprobacion para disolver la sombra de la tercera seccion
    if(position >= 2367 && position <= 2979)
    {
        // Guardo la variable position para comprobar si estoy subiendo o bajando
        var currentHeight = position;


        // Si estoy bajando
        if(currentHeight > pastHeight)
        {
            // Pregunto si la resta hara que la opacidad sea negativa antes de realizarla
            if( (Number(sombraTercero.style.opacity) - 0.02 ) > 0 )
            {
                // Voy quitando la sombra
                sombraTercero.style.opacity = parseFloat(sombraTercero.style.opacity) - 0.02;
            }
            // Si la resta da un numero negativo
            else
            {
                // Quito la sombra
                sombraTercero.style.opacity = 0;
            }
            // Actualizo el valor de la altura actual
            pastHeight = currentHeight;

        }
        // Si estoy subiendo
        else
        {
            // Pregunto si la suma me hara que la opacidad sea mayor a 1 antes de realiarla
            if( (Number(sombraTercero.style.opacity) + 0.02) <= 1 )
            {
                sombraTercero.style.opacity = parseFloat(sombraTercero.style.opacity) + 0.02;
            }
            // Si me dará más de 1
            else
            {
                // le asigno el valor maximo
                sombraTercero.style.opacity= 1;
            }
            // Actualizo el valor de la altura actual
            pastHeight = currentHeight;
        }
    }

    // Si ya la tercera esta casi sin espacio visible
    if(position>=3368)
    {
        var alturaTotal= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // -0.88 por correcion | *10 para que sume mas rapido
        var valor = ((position / alturaTotal)-.88)*10;

        // console.log(alturaTotal, valor);
        // Pregunto si la sombra esta totalmente opaca
        if((sombraTerceroAbajo.style.opacity===1) == false)
        {
            sombraTerceroAbajo.style.opacity = valor.toFixed(2);
        }
        // pregunto si la sombra esta activa
    }

    // Para mostrar la cuarta seccion oculta
    if(position>=3127)
    {
        var alturaTotalDos= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // -0.88 por correcion | *10 para que sume mas rapido
        var valorDos = ((position / alturaTotalDos)-.65)*300;

        // Aplico el margen para generar espaciado
        tercero.style.marginBottom= 802 + "px";
        // voy moviendo la imagen
        imagenCuarta.style.transform= "translateX("+ valorDos +"px)"
    }

    // Para cuando haya terminado de scrollear la tercera seccion oculto la sombra de abajo
    if(position>=3664)
    {
        // Quitamos la sombra
        sombraTerceroUltima.style.opacity=0;
        tercero.style.marginBottom="0";
        cuarto.style.position="relative";
    }
    else
    {
        // Aplicamos la sombra
        sombraTerceroUltima.style.opacity="";
        tercero.style.marginBottom= 802 + "px";
        cuarto.style.position="fixed";
    }

    // Comienzo a rotar la imagen de la quinta seccion
    if(position>=3700)
    {
        var rotacion= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // -0.88 por correcion | *10 para que sume mas rapido
        var rotacionPor = ((position / rotacion)-.70)*250;

        var alturaTranslate = (((position / rotacion)-.70)+50)*.2;

        imagenQuinta.style.transform= "translateY(-"+ alturaTranslate.toFixed(2) +"%)" + "rotate("+ rotacionPor.toFixed(2) +"deg)"
    }

    // console.log(currentHeight)
}