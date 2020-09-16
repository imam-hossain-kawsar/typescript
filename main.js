//this is sing line comment
/*
this is a multi-line comment
*/
// var message:string = "Hello world"
// console.log(message);
// class Gretting{
//     greet():void {
//         console.log("Hello world!!!");
//     }
// }
// var obj = new Gretting();
// obj.greet();
// var Name :string = "kawsar";
// var score1:number = 40;
// var score2:number = 34;
// var sum = score1+score2;
// console.log("name: "+Name);
// console.log("first score: "+score1);
// console.log("second score: "+score2);
// console.log("sum of the scores: "+sum);
//type assertion
// var str = '1';
// var str2:number =  <any> str;
// console.log(typeof(str2))
// var num = 2;
// console.log("Value of num "+num);
// num = "12";
// console.log(num);
// var global_num = 12;
// class Numbers{
//     num_val = 13;
//     static sval = 10;
//     storeNum():void{
//         var local_num = 14;
//     }
// }
// console.log("Global num: "+global_num);
// console.log(Numbers.sval);
// var obj = new Numbers();
// console.log(obj.num_val);
// var x:number = 4;
// var y = -x;
// console.log("value of x: ",x);
// console.log("Value of y: ",y);
// var msg:string = "Hello" + " World";
// console.log(msg);
// var num:number = -2;
// var result = num>0?"Positive": "non-positive";
// console.log(result)
// var num =3;
// if(num>0){
//     console.log("Number is positive");
// }
// var num:number = 12;
// if(num%2 == 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }
// var num:number = 2;
// if(num > 0){
//     console.log(num + " is positive");
// }else if(num < 0){
//     console.log(num + " is negative");
// }else{
//     console.log(num + " is neither positive nor negative");
// }
var grade = "A";
switch (grade) {
    case "A": {
        console.log("Excellent");
        break;
    }
    case "B": {
        console.log("Good");
        break;
    }
    case "C": {
        console.log("Fair");
        break;
    }
    default: {
        console.log("Invalid Choice");
        break;
    }
}
