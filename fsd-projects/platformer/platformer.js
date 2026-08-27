$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 0, 10, 600);
    createPlatform(100, 600, 1150, 10);
    createPlatform(100, 500, 40, 10);
    createPlatform(250, 150, 10, 325);
    createPlatform(215, 400, 40, 10);
    createPlatform(1360, 650, 100 , 10);
    createPlatform(1390, 0, 10, 800)
    createPlatform(250, 475, 1150, 10);
    createPlatform(100, 300, 40, 10);
    createPlatform(220, 200, 40, 10);
    createPlatform(250, 150, 1050, 10);
    createPlatform(1300, 150, 10, 225)
    createBadPlatform(260, 465, 990, 10, "red")
   // TODO 3 - Add collectables
     createCollectable ("database", 300 , 300);
     createCollectable ("database", 600, 500);


    
    // TODO 4 - Create Cannons
    createCannon ("top", 240, 1000);
    createCannon ("top", 500, 1000 );
    createCannon ("top", 600, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
