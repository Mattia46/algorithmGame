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

const iterate = (array = arr) => {
    if(array[0].length > 0) {
        let arrayFound = findArrClosest(array);
        console.log('array Found', arrayFound);
        let newArray = removeIndex(arrayFound.array, arrayFound.tot);
        console.log('NEw arrayu', newArray);
        iterate(newArray);
    }
}

iterate(arr);
module.exports = {
    iterate,
    index,
}

