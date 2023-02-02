"use strict";
const sortarr = (...arr) => {
    let temp = [];
    arr.forEach(element => {
        temp.push(...element);

    });
    temp.sort((a, b) => b - a)
    console.log(temp.join(','));

};
sortarr([1], [23, 5, 6], [7, 5, 8, 9, 6, 3, 2])