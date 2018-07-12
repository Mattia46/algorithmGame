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

const differ = (sumTot, ind = index.rowAvg) => {
    //console.log('ciao', sumTot;
    let ciao = index.rowAvg + (50 - sumTot);
    return ciao;
}

let count = 0;
let mattia = 200;

const iterate = (array = arr) => {
    if(mattia > 0) {
    //if(array[0].length > 0) {
        let arrayFound = findArrClosest(array);
        mattia--;
        let newArray = removeIndex(arrayFound.array, arrayFound.tot);
        iterate(newArray);

        //const diff = 50 - index.sum(arrayFound.tot);
        //lastArrayValue = index.closest(index.e, diff);
        //console.log('here');

        //if(lastArrayValue.left === 0) {
            //let newArray = removeIndex(arrayFound.array, arrayFound.tot);
            //console.log('YES', mattia);
            //iterate(newArray)
        //} else {
            //console.log('here');
            ////iterate(arrayFound.array);
        //}
    }
}

iterate(arr);
module.exports = {
    iterate,
    index,
}
