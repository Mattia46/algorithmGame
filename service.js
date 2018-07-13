const main = require('./index2.js');
const index = require('./index2.js');

let tot = [];
let test = 10;


const  mapping = (arr, ind) => {
    let tot = []
    let sum = 0;
    let array = arr.map((x, index) => {
        index++;
        let closestValue = main.closest(x, ind);
        sum = sum + x[closestValue.ans];
        tot.push(x[closestValue.ans]);
        let first = 50 - sum;
        let second = index === 5 ? 1 : arr.length - index;
        ind =  Math.floor(first / second);
        //console.log('tot', tot);
        return x;
    })
    return {
        tot,
        array,
    }
}

const findArrClosest = (arr, countIndex) =>{
    let ind = arr[0][countIndex];
    const mattia = mapping(arr, ind);
    return mattia;
}

const removeIndex = (arr, arrIndex) => {
    let count = 0;
    tot = [];
    return arr.map(x => {
        let index = x.indexOf(arrIndex[count]);
        x.splice(index, 1);
        count++;
        return x;
    })
}

const numToSearch = num => {
    return main.rowAvg - (num - main.rowAvg);
}

const removeInd = (arr, arrIndex) => {
    let index = arr.indexOf(arrIndex);
    arr.splice(index, 1);
}

module.exports = {
    findArrClosest,
    removeIndex,
    numToSearch,
    removeInd,
}
