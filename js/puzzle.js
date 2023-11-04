/* Script de Juego 3 en Raya */
class Puzzle {
    constructor(alto, ancho) {
        this.alto = alto,
        this.ancho = ancho,
        this.movimientos = 0;
        this.tiempo = 5 * 60; //tiempo en segundos (5 minutos)
        this.tablero = this.generarTablero();
        this.espacio = 0;//this.encontrarEspacio();
    }

    generarTablero() {
        var tabla = document.createElement("table");

        console.log(this.alto);
        console.log(this.ancho);

        for (let i=0 ; i<this.alto ; i++) {
            var fila = document.createElement("tr");
            for (let j=0 ; j<this.ancho ; j++) {
                var celda = document.createElement("td");

                celda.style.width = this.ancho+"00px";
                celda.style.border = "1px dashed black";

                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }

        tabla.style.height = this.alto+"00px";
        tabla.style.width = this.alto+"00px";
        tabla.style.borderCollapse = "collapse";
        tabla.style.backgroundColor = "gray";

        return tabla;
    }

    dibujarTablero() {
        console.log(this.tablero);
        var body = document.getElementsByTagName("body")[0];
        var pTiempo = document.getElementById("tiempo");

        body.appendChild(this.tablero);

        
            var self = this; // Guardar la referencia al objeto Puzzle para usar dentro de setTimeout
    
            function actualizarTiempo() {
                pTiempo.textContent = self.tiempo;
                self.tiempo--;
    
                if (self.tiempo >= 0) {
                    setTimeout(actualizarTiempo, 1000); // Actualizar cada segundo
                } else {
                    document.getElementById("tRestante").textContent = "Tiempo agotado!";
                }
            }
    
            setTimeout(actualizarTiempo, 1000); // Iniciar la cuenta regresiva
        
    }
}