/* Global Phaser */
//
//Created by: Conor
//Created on: Jan 2023
//This is the Splash Scenes file

/**
 * This class is the Splash scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "splashScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }
  //loads splash scene and displays “Splash Scene” in the console
  preload() {
    console.log("Splash Scene");
    this.load.image("splashSceneBackground", "./assets/dodgethecars.png");
  }
  
  //Code to display the splash scene
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    ).setScale(4.0);
    
    this.splashSceneBackgroundImage.x = 1920 / 2;
    this.splashSceneBackgroundImage.y = 1080 / 2;
  }
  //Switches scene to title scene after a delay
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene");
    }
  }
}

export default SplashScene;