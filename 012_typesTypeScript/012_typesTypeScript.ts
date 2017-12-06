//boolean
let paidAccount : boolean = true;

//number
let age : number = 33;
let taxRate : number = 7.5;

//string
let fullName : string = "Kete";

//array
let ages : number[] = [33, 35, 28];

//tuple
let player : [number, string, number, number];
player = [3, 'carrera', 3.333, 33];

//Enum
enum stage {Approved, Pending, Rejected};
let job : stage = stage.Approved;

//any
var apiDate : any[] = [123, 'Kete', false]

//void
function (msg: string) : void {
    console.log(msg)
}