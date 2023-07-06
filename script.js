document.addEventListener("DOMContentLoaded", function() {
  const character = document.getElementById("character");
  const enemy = document.getElementById("enemy");
  let characterX = 800;
  let characterY = 400;
  const enemyX = 225; // Position X centrée de l'ennemi
  const enemyY = 225; // Position Y centrée de l'ennemi
  const characterWidth = 50; // Largeur du personnage
  const characterHeight = 50; // Hauteur du personnage
  const enemyWidth = 50; // Largeur de l'ennemi
  const enemyHeight = 50; // Hauteur de l'ennemi
  let isCollision = false;

  function updateCharacterPosition() {
    character.style.left = characterX + "px";
    character.style.top = characterY + "px";
  }

  function updateEnemyPosition() {
    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";
  }

  function checkCollision() {
    if (
      characterX < enemyX + enemyWidth &&
      characterX + characterWidth > enemyX &&
      characterY < enemyY + enemyHeight &&
      characterY + characterHeight > enemyY
    ) {
      // Collision détectée !
      isCollision = true;
    } else {
      isCollision = false;
    }

    // Modifier la couleur du personnage en fonction de l'état de collision
    if (isCollision) {
      character.style.backgroundColor = "green" ;
      
    } else {
      character.style.backgroundColor = "red";
    }
  }

  function moveCharacter() {
    checkCollision();

    updateCharacterPosition();
    requestAnimationFrame(moveCharacter);
  }

  function handleKeyDown(event) {
    const key = event.key;
    
    if (key === "ArrowUp") {
      characterY -= 2;
    } else if (key === "ArrowDown") {
      characterY += 2;
    } else if (key === "ArrowLeft") {
      characterX -= 2;
    } else if (key === "ArrowRight") {
      characterX += 2;
    }
  }

  document.addEventListener("keydown", handleKeyDown);

  moveCharacter(); // Démarre le mouvement du personnage
  updateEnemyPosition(); // Positionne l'ennemi initial
});

