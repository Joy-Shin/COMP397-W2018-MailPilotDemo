var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //Constructors
        function Plane(assetManager) {
            var _this = _super.call(this, assetManager, "plane") || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        Plane.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        // Public Methods
        // Initialization
        Plane.prototype.Reset = function () {
        };
        Plane.prototype.CheckBounds = function () {
            //check the right boundary 
            if (this.x >= 640 - this.halfWidth) {
                this.x = 640 - this.halfWidth;
            }
            //check the left boundary
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        Plane.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
        };
        Plane.prototype.Start = function () {
        };
        // Updates the Object every frame
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map