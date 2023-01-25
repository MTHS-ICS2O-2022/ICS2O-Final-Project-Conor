/* Global Phaser */
//
//Created by: Conor
//Created on: Jan 2023
//This is the Title Scenes file

/**
 * This class is the Title scene
 */
class TitleScene extends Phaser.Scene {
  /**
   * Method for constructor
   */
  constructor() {
    super({ key: "titleScene" });
    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      allign: "center",
    };
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  //loads title scene and displays "Title Scene" in the console
  preload() {
    console.log("Title Scene");
    this.load.image(
      "titleSceneBackground",
      "./assets/swervethecars.png"
    );
  }

  //Displays the loaded image
  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75);
    this.titleSceneBackgroundImage.x = 1920 / 2;
    this.titleSceneBackgroundImage.y = 1080 / 2;
    //Displays text on the screen
    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Dodge The Cars", this.titleSceneTextStyle)
      .setOrigin(0.5);
  }
  //Changes scene after 6000 cycles
  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene");
    }
  }
}

export default TitleScene;