
let imagen_base = new Image();
imagen_base.src = "./img/base.png"

let Base = {


    "imagen": imagen_base,
    "posicion_x": 300,
    "posicion_y": 10,
    

    w: 200,
    h: 200

}





function dibujarBase (context) {


    context.drawImage(Base.imagen, Base.posicion_x, Base.posicion_y);



}