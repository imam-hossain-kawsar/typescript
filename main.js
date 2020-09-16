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
// var grade:string = "A";
// switch(grade){
//     case "A":{
//         console.log("Excellent");
//         break;
//     }
//     case "B":{
//         console.log("Good");
//         break;
//     }
//     case "C":{
//         console.log("Fair");
//         break;
//     }
//     default: {
//         console.log("Invalid Choice");
//         break;
//     }
// }
// var num = 5;
// var i:number;
// var factorial = 1;
// for(i = num; i>=1; i--){
//     factorial *= i;
// }
// console.log(factorial);
// var j:any;
// var n:any = "a b c"
// for(j in n){
//     console.log(n[j]);
// }
// var num:number = 5;
// var factorial: number = 1;
// while(num >= 1){
//     factorial = factorial * num;
//     num--;
// }
// console.log("The factorial is "+factorial);
// var n:number = 10;
// do{
//     console.log(n);
//     n--;
// }while(n >= 0);
// var i:number = 1;
// while(i<=10){
//     if(i%5 == 0) {
//         console.log("The first multiple of 5  between 1 and 10 is: "+i);
//         break;
//     }
//     i++;
// }
// var num:number = 0;
// var count:number = 0;
// for(num = 0; num <= 20; num++){
//     if(num%2 == 0){
//         continue;
//     }
//     count++;
// }
// console.log("The count of odd values between 0 and 20 is: "+count);
// function displayDetails(id:number, name:string, mail_id?:string){
//     console.log("ID: ", id);
//     console.log("Name: ", name);
//     if(mail_id != undefined) {
//         console.log("Email ID: ", mail_id);
//     }
// }
// displayDetails(123, "Kawsar");
// displayDetails(122, "Hossain", "abc@xyz.com")
// function addNumbers(...nums:number[]) {  
//     var i;   
//     var sum:number = 0; 
//     for(i = 0;i<nums.length;i++) { 
//        sum = sum + nums[i]; 
//     } 
//     console.log("sum of the numbers",sum) 
//  } 
//  addNumbers(1,2,3) 
//  addNumbers(10,10,10,10,10)
// var myFunction = new Function("a", "b", "return a * b"); 
// var x = myFunction(4, 3); 
// console.log(x);
// function factorial(number) {
//     if (number <= 0) {         // termination case
//        return 1; 
//     } else {     
//        return (number * factorial(number - 1));     // function invokes itself
//     } 
//  }; 
//  console.log(factorial(6)); 
//  var foo = (x:number)=> {    
//     x = 10 + x 
//     console.log(x)  
//  } 
//  foo(100)
// function disp(s1:string):void; 
// function disp(n1:number,s1:string):void; 
// function disp(x:any,y?:any):void { 
//    console.log(x); 
//    console.log(y); 
// } 
// disp("abc") 
// disp(1,"xyz");
// console.log("TypeScript Number Properties: "); 
// console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
// console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
// console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
// console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
