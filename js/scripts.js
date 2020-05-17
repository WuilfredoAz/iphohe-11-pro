// Creo un escuchador de eventos que este vinculado al scroll
window.addEventListener("scroll", parallax);
// Guardamos en una variable a la sombra del hero
const sombraHero = document.querySelector(".primero .js-sombra");
// Guardamos en una variable a la sombra de la segunda seccion
const sombraTercero = document.querySelector(".tercero .js-sombra");
const tercero = document.querySelector(".tercero");
var pastHeight= 0;


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

    // console.log(currentHeight)
}