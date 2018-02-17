module scenes {
    export class PlayScene extends objects.Scene {
      // Private Instance Variables
      private _ocean: objects.Ocean;
      

      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
  
        this.Start();
      }
  
      // Private Mathods
      private _nextButtonClick():void {
        objects.Game.currentScene = config.Scene.OVER;
      }

      private _backButtonClick():void {
        objects.Game.currentScene = config.Scene.START;
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean(this.assetManager);
        this.Main();
      }
  
      public Update(): void {
        this._ocean.Update();
      }
  
      // This is where the fun happens
      public Main(): void {
        // add ocean to the scene
        this.addChild(this._ocean);
      }
    }
  }
  