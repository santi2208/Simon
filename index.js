const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const audioCeleste = document.getElementById("audioCeleste");
const audioVioleta = document.getElementById("audioVioleta");
const audioNaranja = document.getElementById("audioNaranja");
const audioVerde = document.getElementById("audioVerde");
const ULTIMO_NIVEL = 3

const coloresNums = {
    0: 'celeste',
    1: 'violeta',
    2: 'naranja',
    3: 'verde'
}

const coloresDescriptsNums = {
    'celeste': 0,
    'violeta': 1,
    'naranja': 2,
    'verde': 3
}

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()

    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toogleBtn()

        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }

        this.audios = {
            'celeste':audioCeleste,
            'violeta':audioVioleta,
            'naranja':audioNaranja,
            'verde': audioVerde 
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel() {
        this.subNivel = 0
        this.agregarEventoClick()
        this.iluminarSecuencia()
    }

    iluminarSecuencia() {
        for (var i = 0; i < this.nivel; i++) {
            const color = coloresNums[this.secuencia[i]]
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        this.audios[color].play();
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }



    agregarEventoClick() {
        //Opcion 2: Ver inicializar
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev) {
        
        const nombreColor = ev.target.dataset.color
        const numeroColor = coloresDescriptsNums[nombreColor]
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subNivel]) {
            this.subNivel++
            if (this.subNivel === this.nivel) {
                this.nivel++

                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoJuego()
                } else {
                    setTimeout(this.siguienteNivel, 800)
                }
            }
        } else {
            this.perdioJuego()
        }
    }

    ganoJuego() {
        this.eliminarEventosClick()
        swal("Felicitaciones!", "Has ganado el  juego.", "success");
        this.inicializar()
    }

    perdioJuego() {
        this.eliminarEventosClick()
        swal("Lo sentimos", "Has perdido el  juego :(", "error");
        this.inicializar()
    }

    toogleBtn() {
        //console.log(`Boton inicializar oculto?: ${btnEmpezar.classList.contains('hide')}`)
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }
}

function empezarJuego() {
    window.juego = new Juego()
    console.log(juego.secuencia);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('sw.js')
        .then(registration => console.log('Service Worker registered'))
        .catch(err => 'SW registration failed'));
}