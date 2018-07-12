const index = require('./index2.js');

const arr = index.arrArrays;
const avgTot = index.totAvg;
const avgRow = index.rowAvg;
let tot = [];

const removeInd = (arr, arrIndex) => {
    let index = arr.indexOf(arrIndex);
    arr.splice(index, 1);
}
const removeIndex = (arr, arrIndex) => {
    let count = 0;
    tot = [];
    let cc = arr.map(x => {
        let index = x.indexOf(arrIndex[count]);
        x.splice(index, 1);
        count++;
        console.log('>>>', x.length);
        return x;
    })
    return cc;
    console.log('asdfdfsf', cc)
}

const differ = (sumTot, ind = index.rowAvg) => {
    //console.log('ciao', sumTot;
    let ciao = index.rowAvg + (50 - sumTot);
    return ciao;
}

let count = 0;
let mattia = 50;
let yes = 0;
const iterate = (arr, ind = index.rowAvg) => {
    if(mattia > 0) {
    //if(arr[0].length > 0) {
        let newArr = arr.map(x => {
            const left = index.closest(x, ind);
            ind = index.rowAvg - left.left;
            tot.push(x[left.ans]);
            return x;
        })
        console.log('qui', newArr[0].length);
        mattia--;
        const diff = 50 - index.sum(tot);
        let lastArray = index.closest(index.e, diff);
        if(diff === index.e[lastArray.ans]) {
            yes++;
            console.log('YES', tot);
            let matt = removeIndex(arr, tot);
            removeInd([index.e], lastArray.ans)
            iterate(matt, index.rowAvg)
        } else {
            let lastArrNum = index.e[lastArray.ans];
            let tt = ((50 - (index.sum(tot) + lastArrNum)) + index.rowAvg);
            tot = [];
            iterate(arr, tt);
        }
    }
    console.log('YES', yes);
}

iterate(arr);
module.exports = {
    iterate,
    arr,
    index,
}
