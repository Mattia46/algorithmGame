const index = require('./index2.js');
const {
    findArrClosest,
    removeIndex,
    numToSearch,
    removeInd,
} = require('./service.js');

const arr = index.arrArrays;
const avgTot = index.totAvg;
const avgRow = index.rowAvg;
let count = 0;

const iterate = (array = arr) => {
    if(array[0].length > 0) {
        let arrayFound = findArrClosest(array, count);
        if (index.sum(arrayFound.tot) === 50) {
            console.log('here');
            arrayFound = removeIndex(arrayFound.array, arrayFound.tot);
        }
        count = arrayFound.array[Math.floor(Math.random() * arrayFound.array.length)];
        console.log('count', count)

        if (count < 10) {
            iterate(arrayFound.array, count);
        }
    }
}

iterate(arr);
module.exports = {
    iterate,
    index,
}

