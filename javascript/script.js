document.querySelector(".perso").style.left = "50%";
let pos = 50;

document.onkeydown = deplacement;

function deplacement(e) {
    if (e.key == "ArrowRight" && pos < 60) {
        pos += 14;
    }

    if (e.key == "ArrowLeft" && pos > 40) {
        pos -= 14;
    }

    document.querySelector(".perso").style.left = pos + "%";
}
