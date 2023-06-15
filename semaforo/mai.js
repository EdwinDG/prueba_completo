function cambios() {
    let clr_rojo = document.getElementById("rojo");
    let clr_amarillo = document.getElementById("amarillo");
    let clr_verde = document.getElementById("verde");

    clr_rojo.style.backgroundColor = "red";
    clr_amarillo.style.backgroundColor = "transparent";
    clr_verde.style.backgroundColor = "transparent";

    setTimeout(function () {
        clr_rojo.style.backgroundColor = "transparent";
        clr_amarillo.style.backgroundColor = "yellow";
        clr_verde.style.backgroundColor = "transparent";

        setTimeout(function () {
            clr_rojo.style.backgroundColor = "transparent";
            clr_amarillo.style.backgroundColor = "transparent";
            clr_verde.style.backgroundColor = "green";

            setTimeout(cambios, 2000);
        }, 2000);
    }, 2000);
}

cambios();

let colorActual = 2;
let cambiar = document.getElementsByClassName("cambiar");

function cambiarOtro() {
    cambiar[colorActual].style.backgroundColor = "";
    colorActual = (colorActual + 1) % cambiar.length;
    cambiar[colorActual].style.backgroundColor = getColorClass(colorActual);
}

function getColorClass(clr) {
    if (clr === 0) {
        return "red";
    } else if (clr === 1) {
        return "yellow";
    } else if (clr === 2) {
        return "green";
    }
}