var Kittu = /** @class */ (function () {
    function Kittu(id, name, job, dept, desi) {
        this.kid = id;
        this.kname = name;
        this.kjob = job;
        this.kdept = dept;
        this.kdesi = desi;
    }
    Kittu.prototype.getStudent = function () {
        console.log(this.kid);
        console.log(this.kname);
        console.log(this.kjob);
        console.log(this.kdept);
        console.log(this.kdesi);
    };
    return Kittu;
}());
var k = new Kittu(10, "krishna", "IT", 4, "software");
var m = new Kittu(20, "mohan", "IT", 5, "Software");
k.getStudent();
m.getStudent();
