//boolean
var paidAccount = true;
//number
var age = 33;
var taxRate = 7.5;
//string
var fullName = "Kete";
//array
var ages = [33, 35, 28];
//tuple
var player;
player = [3, 'carrera', 3.333, 33];
//Enum
var stage;
(function (stage) {
    stage[stage["Approved"] = 0] = "Approved";
    stage[stage["Pending"] = 1] = "Pending";
    stage[stage["Rejected"] = 2] = "Rejected";
})(stage || (stage = {}));
;
var job = stage.Approved;
//any
var apiDate = [123, 'Kete', false];
//void
function (msg) {
    console.log(msg);
}
//# sourceMappingURL=012_typesTypeScript.js.map