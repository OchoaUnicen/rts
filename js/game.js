document.addEventListener('DOMContentLoaded', cargar_game_js);

function cargar_game_js() {

    "use strict";
    //compatibilidad con multiples navegadores
    let frame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    let canvas = document.getElementById('lienzo');
    let context = canvas.getContext('2d');



    //limites del mapa
    const LIMITE_IZQUIERDO = -10;
    const LIMITE_DERECHO = 920;
    const LIMITE_INFERIOR = 415;
    const LIMITE_SUPERIOR = -20;





    function crearMatriz(w, h) {
        const matriz = [];
        while (h--) {
            matriz.push(new Array(w).fill(0));

        }
        return matriz;
    }
    const mapa = crearMatriz(100, 50);
 
    
 



    //-------


 //*************************************************************************************************************/
    
    canvas.onmousemove = function (e) {
        
        
      
        // console.log("----------------------------");
        
      
       
        //console.log(getMousePos(canvas, e));
    

    }


//*************************************************************************************************************/

    canvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvas, evt);

        //console.log("clicked");
        console.log(mousePos.x + ',' + mousePos.y);     




      
            //falta agregar precision
            if((mousePos.x >= Trabajador.posicion_x && mousePos.x <= Trabajador.posicion_x + Trabajador.imagen.naturalWidth) &&
                mousePos.y >= Trabajador.posicion_y && mousePos.y <= Trabajador.posicion_y + Trabajador.imagen.naturalHeight ) {
                    console.log("clickeo en trabajador");

                    Trabajador.seleccionado = true;

            }





            else {
                Trabajador.seleccionado = false;


            }

            console.log(Trabajador.seleccionado);





        
    }, false);

    canvas.addEventListener('contextmenu', seHizoClickDerecho, false);


    function seHizoClickDerecho(evt){
       

        var mouse_pos = getMousePos(canvas, evt);
        
            console.log(mouse_pos.x + ", " + mouse_pos.y);



        //----------

        if (Trabajador.seleccionado == true) {
            console.log("trabajador seleccionado");
            Trabajador.objetivo_x = mouse_pos.x;
            Trabajador.objetivo_y = mouse_pos.y;


            //si el click derecho no se hizo sobre alguna otra construccion entonces caminando ,, sino depende de la contruccion su funcion



            // luego ese hardcode de posiciones tiene que se el x,y + sus respectivos w,h  de Spot Madera
            if (((Trabajador.objetivo_x >= 32 && Trabajador.objetivo_x <= 88) && (Trabajador.objetivo_y >= 100 && Trabajador.posicion_y <= 153))) {

                    console.log("rightclickeo en madera");
                    Trabajador.estado = "buscando";

            }





            //por alguna razon a veces toma mas distancia en y de Spot Madera que lo que deberia --REVISAR
            else {


                Trabajador.estado = "caminando";
                console.log("estado trabajador : " + Trabajador.estado);

            }


        }

        // if (Trabajador.seleccionado == true && (Trabajador.posicion_x != mouse_pos.x) && (Trabajador.posicion_y != mouse_pos.y)) {
        //     console.log("entro");
        //     if (Trabajador.posicion_x <= mouse_pos.x){

        //         Trabajador.posicion_x += 5;

        //     }

        //     if (Trabajador.posicion_x >= mouse_pos.x){

        //         Trabajador.posicion_x -= 5;

        //     }


        //     if (Trabajador.posicion_y <= mouse_pos.y){

        //         Trabajador.posicion_y += 5;

        //     }

        //     if (Trabajador.posicion_y >= mouse_pos.y){

        //         Trabajador.posicion_y -= 5;

        //     }


        // }


        //----------





            evt.preventDefault();
    }



    
    //Get Mouse Position
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.floor(evt.clientX - rect.left),
            y: evt.clientY - rect.top
        };
    }




    //-------



   

    //renderizacion - Todo dentro se realizarada 60 veces por segundo
    function tiempo() {
        frame(tiempo);
       
        context.clearRect(0, 0, canvas.width, canvas.heigh);
        


        //drawImage tiene 4 parametros: Imagen a ser invocada en la funcion,inicio eje x,inicio eje y, tamaño.widht, tamaño.heigh 
        //dibuja el fondo 
        dibujarFondo(context);

        




        dibujarPersonaje(context);


        dibujarBase(context);
        dibujarSpot_madera(context);



        //clase trabajador.js
        dibujarTrabajador(context);
        moverTrabajador();
        buscarElemento();


        console.log(Trabajador.cooldown);
        

        if (Trabajador.cooldown > 0) {

            Trabajador.cooldown -= 10;
        }


        if (Trabajador.cooldown < 0) {

            Trabajador.cooldown = 0;
        }



       












        

    }
    tiempo();




}





