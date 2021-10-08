console.log("Welcome to the Employee Wage Computation Program");

const IS_PAR_TTIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HRS= 20;

let empHrs=0;

let empcheck = Math.floor(Math.random()*10)%3;

switch(empcheck){
case IS_PAR_TTIME:
    empHrs= PART_TIME_HRS;
    break;
case IS_FULL_TIME:
    empHrs= FULL_TIME_HRS;
    break;
default :
    empHrs=0;
    
}
let empWage = empHrs * WAGE_PER_HRS ;
console.log("Daily Employee Wage :"+ empWage);






