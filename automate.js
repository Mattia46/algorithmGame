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
let countdown = 10;

const getRandomIndex = (arr, count) => {
    let newCount = Math.floor(Math.random() * arr.length);
    if (newCount === count) {
        getRandomIndex(arr, count);
    }
    return newCount;
}

const iterate = (array = arr) => {
    if(countdown > 0) {
        let arrayFound = findArrClosest(array, count);

        console.log('>>>>>>>>.', arrayFound);
        if (index.sum(arrayFound.tot) === 50) {
            console.log('here');
            arrayFound = removeIndex(arrayFound.array, arrayFound.tot);
        }
        let newCount = getRandomIndex(arrayFound.array);
        if (newCount === count) {

        }
        if (newCou)
            if(count === 5) {
                console.log('count', count)
            }

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

