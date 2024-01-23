// let const var
console.log('hello world');
var a=1;
console.log(a);
let b=2;
console.log(b);
let userName="Radhaakant Panda";
let age=21;
let isGood=true;
console.log(`Name is ${userName} and age is ${age}` )
// number boolean string

// if else
if(isGood){
    console.log(`Hello ${userName}, it's awesome to hear that at the age of ${age} you are good`);
}
else{
    console.log(`Hello ${userName}, it's awesome to hear that at the age of ${age} you are not good`);
}

// loops
let k=0;
let sum=0;
for(k=0;k<=100;k++){
    sum=sum+k;
    console.log(sum);
}
// arrays and objects
let personArray=['raj','mohan','rohan','balkrishna'];
let ages=[89,45,15,26]
for(let k=0;k<personArray.length;k++){
    if(ages[k]%2==0){
        console.log(personArray[k])

    }
}
// wap to print all even numbers in an array
let numberArray=[25,36,78,96,45,75,15,25];
for(let  k=0;k<numberArray.length;k++){
    if(numberArray[k]%2==0){
       // console.log(numberArray[k]);
    }
}

// function helps in making reusable code
function sumnum(c,d){
    return c+d;
}
console.log(sumnum(20,65));
// callbacks--> passing functions inside funtion
function calculateSum(a,b,nextFunc){
    let newSum=a+b;
    nextFunc(newSum);
}
function yoursum(newSum){
    console.log(`Your sum is ${newSum}`);
}
function yougotasum(newSum){
    console.log(`sum is ${newSum}`);
}
calculateSum(26,96,yougotasum);
calculateSum(26,96,yoursum);

