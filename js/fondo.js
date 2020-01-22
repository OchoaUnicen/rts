
let imagen_fondo = new Image();
imagen_fondo.src = "./img/fondo.png";




let Fondo = {
 
    "imagen": imagen_fondo    


}


function dibujarFondo(context) {

context.drawImage(Fondo.imagen, 0, 0);
     
}