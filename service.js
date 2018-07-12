const main = require('./index2.js');
const index = require('./index2.js');

let tot = [];
let test = 10;

const findArrClosest = (arr, countIndex = 0) =>{
    let tot = [];
    let ind = arr[0][countIndex];
    let sum = 0;
    let array = arr.map((x, index) => {
        index++;
        let closestValue = main.closest(x, ind);
        sum = sum + x[closestValue.ans];
        tot.push(x[closestValue.ans]);
        let first = 50 - sum;
        let second = index === 5 ? 1 : arr.length - index;
        ind =  Math.floor(first / second);
        return x;
    })
    if (main.sum(tot) === 50) {
        console.log('here >>>>>>>>>>>>>>>>>>>>>>>');
        return {
            array,
            tot
        };
    } else {
        countIndex++;
        if (test > 0) {
            test--;
            findArrClosest(arr, countIndex);
        }
    }
    return {
        array,
        tot,
    };
}

const removeIndex = (arr, arrIndex) => {
    let count = 0;
    tot = [];
    cc = arr.map(x => {
        let index = x.indexOf(arrIndex[count]);
        //console.log('index', index, arrIndex[count]);
        //console.log('>>>>>>>>>.', x);
        x.splice(index, 1);
        count++;
        //console.log('>>>', x.length);
        return x;
    })
    return cc;
    console.log('asdfdfsf', cc)
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
