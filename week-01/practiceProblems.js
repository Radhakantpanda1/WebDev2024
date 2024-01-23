//Q1) Write the program to greet a person given their first and last name.
function solutionOfProblem_01(){
    let userName='Radhakant Panda';
    let greeting="good morning";
    console.log(`hello ${userName}, wishing you a very ${greeting}.`)
}
//Q2. Write a program that greets a person based on their gender. (If else)
function solutionOfProblem_02(gender){
    let userName='Radhakant Panda';
    
    let greeting="good morning";
    if(gender=='male'){
        console.log(`hello sir ${userName}, wishing you a very ${greeting}.`)
    }
    if(gender=='female'){
        console.log(`hello mam ${userName}, wishing you a very ${greeting}.`)
    }
}
//Q3. Write a program that counts from 0 - 1000 and prints (for loop)
function solutionOfProblem_03(from,to){
    for(let k=from;k<to;k++){
        console.log(k);
    }
}
let gender='male';
solutionOfProblem_01();
solutionOfProblem_02(gender);
solutionOfProblem_03(0,100)