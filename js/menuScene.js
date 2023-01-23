/* Global Phaser */
//
//Created by: Conor
//Created on: Jan 2023
//This is the Menu Scenes file

/**
 * This class is the Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "menuScene" });

    this.menuSceneBackgroundImage = null;
    this.startButton = null;
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //Displays "Menu Scene" in the console
  preload() {
    console.log("Menu Scene");
    this.load.image("menuSceneBackground", "./assets/starting.png")
    this.load.image("startButton", "./assets/start.png")
  }
  create(data) {
    //Displays the same background image as title scene
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );

     this.player = this.physics.add.sprite(1920 / 2, 1080 - 100, "menuSceneBackground").setScale(3.8);
    
    this.menuSceneBackgroundImage.x = 1920 / 2;
    this.menuSceneBackgroundImage.y = 1080 / 2;

    this.startButton = this.add.sprite(2400 / 2, 1750 / 2 + 100, "startButton");
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on("pointerdown", () => this.clickButton());
  }
  update(time, delta) {
    //pass
  }
  //funtion. When the button is clicked it will start the game scene
  clickButton() {
    this.scene.start("gameScene");
  }
}

export default MenuScene;