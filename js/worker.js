
let imagen_worker = new Image();
imagen_worker.src = "./img/worker.png"

let Worker = {

    "imagen": imagen_worker,
    "posicion_x": 100,
    "posicion_y": 100
      




}



function dibujarWorker(context) {

    context.drawImage(Worker.imagen, Worker.posicion_x, Worker.posicion_y);




}