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
var Son = /** @class */ (function () {
    function Son(name, id1, name1) {
        this.sname = name;
        this.sage = id1;
        this.scolor = name1;
    }
    Son.prototype.getStd = function () {
        console.log("Hi iam krishnateja");
    };
    return Son;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(name2, id, name, id1, name1) {
        var _this = _super.call(this, name, id, name1) || this;
        _this.pname = name2;
        _this.page = id;
        console.log(_this.pname);
        console.log(_this.page);
        console.log(_this.sname);
        console.log(_this.sage);
        console.log(_this.scolor);
        return _this;
    }
    return Parent;
}(Son));
var p = new Parent("srinu", 50, "krishna", 24, "black");
p.getStd();
