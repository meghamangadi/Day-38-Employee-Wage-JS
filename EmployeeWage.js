console.log("Welcome to the Employee Wage Computation Program");

const IS_PAR_TTIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HRS = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;


function getWorkingHours(empcheck) {
    switch (empcheck) {
        case IS_PAR_TTIME:
            empHrs = PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HRS;
            break;
        default:
            empHrs = 0;

    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    let empcheck = Math.floor(Math.random() * 10) % 3;
    getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
}

let totalEmpWage = totalEmpHrs * WAGE_PER_HRS;
console.log("Total Days : " + totalWorkingDays + " Total Employee Hours : " + totalEmpHrs + " Total Employee Wage : " + totalEmpWage);






