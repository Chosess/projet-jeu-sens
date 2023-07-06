document.querySelector(".perso").style.left = "50%";
let pos = 50;
let a = 0;
let test = 1;
let vie = 3;

setInterval(function () {

    let obs = document.querySelectorAll(".obstacles>div");

    obs.forEach(function (element) {
        let perso = document.querySelector(".perso");
        let calculx = Math.floor(element.getBoundingClientRect()["x"] - perso.getBoundingClientRect()["x"]) ;
        let calculy = Math.floor(element.getBoundingClientRect()["y"] - perso.getBoundingClientRect()["y"]) ; 

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/2 && calculx > perso.getBoundingClientRect()["x"]/4) {
            document.querySelector(".coeur>div:first-child").remove();
            element.remove();
            vie--;
        }

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/5 && calculx > perso.getBoundingClientRect()["x"]/6) {
            document.querySelector(".coeur>div:first-child").remove();
            element.remove();
            vie--;
        }

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/7 && calculx > perso.getBoundingClientRect()["x"]/15) {
            document.querySelector(".coeur>div:first-child").remove();
            element.remove();
            vie--;
        }

        if(vie == 0){
            document.querySelector(".defaite").style.display = "block";
        }
        console.log(calculx);
    
    })
}, 100);

function obstacle(time) {
    setTimeout(function () {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            document.querySelector(".obstacles").insertAdjacentHTML("beforeend", "<div class='gauche'></div>");
        }
        if (random == 1) {
            document.querySelector(".obstacles").insertAdjacentHTML("beforeend", "<div class='milieu'></div>");
        }
        if (random == 2) {
            document.querySelector(".obstacles").insertAdjacentHTML("beforeend", "<div class='droite'></div>");
        }
    }, time)
}


obstacle(4000);
obstacle(8000);

obstacle(11000);
obstacle(15000);
obstacle(19000);

obstacle(25000);
obstacle(29000);

obstacle(31000);
obstacle(36000);

obstacle(38000);
obstacle(42000);

obstacle(47000);
obstacle(51000);

obstacle(54000);
obstacle(58000);

obstacle(62000);




let score = 0;

setInterval(function () {

    let check = document.querySelectorAll(".checkpoint>div");

    check.forEach(function (element) {
        let perso = document.querySelector(".perso");
        let calculx = Math.floor(element.getBoundingClientRect()["x"] - perso.getBoundingClientRect()["x"]) ;
        let calculy = Math.floor(element.getBoundingClientRect()["y"] - perso.getBoundingClientRect()["y"]) ; 

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/2 && calculx > perso.getBoundingClientRect()["x"]/3) {
            score++;
            element.remove();
        }

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/5 && calculx > perso.getBoundingClientRect()["x"]/6) {
            score++;
            element.remove();
        }

        if (calculy < 60 && calculy > 20 && calculx < perso.getBoundingClientRect()["x"]/7 && calculx > perso.getBoundingClientRect()["x"]/15) {
            score++;
            element.remove();
            
        }

        if(score == 10){
            document.querySelector(".victoire").style.display = "block";
        }
    })
}, 100);

function check(time) {
    setTimeout(function () {
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            document.querySelector(".checkpoint").insertAdjacentHTML("beforeend", "<div class='gauche'></div>");
        }
        if (random == 1) {
            document.querySelector(".checkpoint").insertAdjacentHTML("beforeend", "<div class='milieu'></div>");
        }
        if (random == 2) {
            document.querySelector(".checkpoint").insertAdjacentHTML("beforeend", "<div class='droite'></div>");
        }
    }, time)
}


check(5000);
check(10000);

check(15000);
check(20000);

check(25000);
check(30000);

check(35000);
check(40000);

check(45000);
check(50000);

check(55000);
check(60000);

check(65000);


document.onkeydown = deplacement;

function deplacement(e) {
    if (e.key == "ArrowRight" && pos < 60) {
        pos += 14;
        a += 1;
    }

    if (e.key == "ArrowLeft" && pos > 40) {
        pos -= 14;
        a -= 1;
    }
    document.querySelector(".perso").style.left = pos + "%";
}

// document.querySelector(".debut").addEventListener("click", function(){
//     document.querySelector(".accueil").style.display = "none";
//     document.querySelector(".jeu").style.display = "block";
// })

// document.querySelector(".victoire>p").addEventListener("click", function(){
//     document.querySelector(".accueil").style.display = "block";
//     document.querySelector(".jeu").style.display = "none";
// })

// document.querySelector(".defaite>p").addEventListener("click", function(){
//     document.querySelector(".accueil").style.display = "block";
//     document.querySelector(".jeu").style.display = "none";
// })