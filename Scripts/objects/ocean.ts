module objects {
    export class Ocean extends createjs.Bitmap {

        //Private Instance Variables
        private _dy: number;

        //Public Properties

        //Constructors
        constructor(assetManager: createjs.LoadQueue) { 
            super(assetManager.getResult("ocean"));
            this._reset();
            this.Start();
        }

        //Private Methods
        private _reset():void {
            this.y = -960;
        }

        private _checkBounds():void {
            if(this.y >= 0){
                this._reset();
            }
        }

        private _move():void {
            this.y += this._dy;
        }
        //Public Methods

        //Initialization
        public Start():void {
            this._dy = 5; // move 5 pixels down every frame
        }

        //Update the Object every frame
        public Update():void {
            this._move();
            this._checkBounds();
        }
    }
}