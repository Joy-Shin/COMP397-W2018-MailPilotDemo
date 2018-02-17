module objects {
    export class Plane extends objects.GameObject {

        //Private Instance Variables
        private _dy: number;
        private _dx: number;

        //Public Properties
        public width: number;
        public height: number;
        public halfWidth: number;
        public halfHeight: number;
        

        //Constructors
        constructor(assetManager: createjs.LoadQueue) { 
            super(assetManager, "plane");
            this.Start();
        }

        // Private Methods
        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }

      // Public Methods
      // Initialization
      public Reset():void {
  
    }

    public CheckBounds():void {
        //check the right boundary 
        if(this.x >= 640 - this.halfWidth) {
            this.x = 640 - this.halfWidth;
        }

        //check the left boundary
        if(this.x <= this.halfWidth) {
            this.x = this.halfWidth;
        }
    }

    public Move():void {
        this.x = objects.Game.stage.mouseX;
    }

    public Start():void {

    }

    // Updates the Object every frame
    public Update():void {
        this.Move();
        this.CheckBounds();
    }

  }
}