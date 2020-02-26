var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, id1, id2) {
        this.vno = id;
        this.vname = name;
        this.vmy = id1;
        this.nops = id2;
    }
    return Vehicle;
}());
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(name1, id, name, id1, id2) {
        var _this = _super.call(this, id, name, id1, id2) || this;
        _this.bcolor = name1;
        console.log(_this.bcolor);
        console.log(_this.vno);
        console.log(_this.vname);
        console.log(_this.vmy);
        console.log(_this.nops);
        return _this;
    }
    return Bmw;
}(Vehicle));
var b = new Bmw("red", 2000, "BMW", 2015, 7);
