/* Dodge the cars */
//
//Created by: Conor
//Created on: Jan 2023
//This is the Game Scenes file

/**
 * This class is the Game scene
 */
class GameScene extends Phaser.Scene {
  //create an car
  createCar() {
    const carLocationX = Math.floor(Math.random() * (1920 - 1 + 1) + 1); //Gets a random number between 1 and 1920
    let carVelocityX = Math.floor(Math.random() * 30) + 1; //Gets a random number between 1 and 50
    carVelocityX *= Math.floor(Math.random()) ? 1 : -1; //half of the cars will
    const anCar = this.physics.add.sprite(carLocationX, -100, "car");
    anCar.body.velocity.y = 1500;
    anCar.body.velocity.x = carVelocityX;
    this.carGroup.add(anCar);
  }

  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "gameScene" });
    this.background = null;
    this.player = null;
    this.square = null;
    //To stop the s from firing when the game is over
    this.gameOver = 0;
    console.log(this.gameOver);
    this.score = 0;
    this.scoreText = null;
    this.scoreTextStyle = {
      font: "65px Arial",
      fill: "#ffffff",
      align: "center",
    };
    this.gameOverTextStyle = {
      font: "65px Arial",
      fill: "#ff0000",
      align: "center",
    };
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //Displays "Game Scene" in the console
  preload() {
    console.log("Game Scene");

    //Preloads the images
    this.load.image("roadBackground", "./assets/road.png");
    this.load.image("personPlayer", "./assets/person.png");
    this.load.image("car", "./assets/cars.png");
    this.load.image("square","./assets/gray-square.png");

    //preloads sounds
    this.load.audio("explosion", "./assets/barrelExploding.wav");
  }
  create(data) {
    //adds the background
    this.background = this.add.image(0, 0, "roadBackground").setScale(4.2);
    this.background.setOrigin(0, 0);

    //for score
    this.scoreText = this.add.text(
      10,
      10,
      "Score: " + this.score.toString(),
      this.scoreTextStyle
    );

    //adds the personplayer
    this.player = this.physics.add.sprite(1920 / 2, 1080 - 100, "personPlayer").setScale(0.5);

    //Create car and car group
    this.carGroup = this.add.group();
    this.createCar();

    //Create square
    this.square = this.physics.add.sprite(2000 / 2, 2100, "square").setScale(1.7)
    this.square.body.immovable = true

    //Car player collision code
    this.physics.add.collider(
      this.carGroup,
      this.player,
      function (playerCollide, carCollide) {
        this.gameOver = 1;
        this.sound.play("explosion");
        this.physics.pause();
        carCollide.destroy();
        playerCollide.destroy();
        this.gameOverText = this.add
          .text(
            1920 / 2,
            1080 / 2,
            "Game Over\nClick to play again.",
            this.gameOverTextStyle
          )
          .setOrigin(0.5);
        this.gameOverText.setInteractive({ useHandCursor: true });
        this.gameOverText.on("pointerdown", () =>
          this.scene.start("gameScene")
        );
        // Binding
      }.bind(this)
    );
    
    // new code
    this.physics.add.collider(
      this.carGroup,
      this.square,
      function (squareCollide, carCollide) {
        squareCollide.destroy();
        this.score = this.score + 1;
        this.createCar();
        //this.createCar();
      }.bind(this)
    );
  }

  update(time, delta) {
    //Variables to call for the arrow keys, a & d keys, as well as the space bar.
    const keyLeftObj = this.input.keyboard.addKey("LEFT");
    const keyRightObj = this.input.keyboard.addKey("RIGHT");

    //Allows the player to move left when the left arrow key is pressed
    if (keyLeftObj.isDown === true) {
      this.player.x -= 15;
      if (this.player.x < 0) {
        this.player.x = 0;
      }
    }
    //Allows the player to move right when the right arrow key is pressed
    if (keyRightObj.isDown === true) {
      this.player.x += 15;
      if (this.player.x > 1920) {
        this.player.x = 1920;
      }
    }

      }
    }
  


export default GameScene;