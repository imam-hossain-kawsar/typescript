//this is sing line comment
/*
this is a multi-line comment
*/
// var message:string = "Hello world"
// console.log(message);
var Gretting = /** @class */ (function () {
    function Gretting() {
    }
    Gretting.prototype.greet = function () {
        console.log("Hello world!!!");
    };
    return Gretting;
}());
var obj = new Gretting();
obj.greet();
