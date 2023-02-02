"use strict";

let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,

}

const topSalary = (obj) => {
    const temp = Object.entries(obj);
    temp.sort((a, b) => b[1] - a[1]);
    const [[highetsName, highestValue]] = temp
    let result = `${highetsName}: ${highestValue}`;
    return result
};
console.log(topSalary(salaries));








// function topSalary(obj) {
//     let maxSalary = 0;
//     let maxName = [];
//     for (let [name, salary] of Object.entries(obj)) {
//         if (salary > maxSalary) {
//             maxSalary = salary;
//             maxName = [name];
//         } else if (salary === maxSalary) {
//             maxName.push(name);
//         }
//     }
//     return maxName
// }
// console.log(topSalary(salaries));