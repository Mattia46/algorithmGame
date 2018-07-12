const index = require('./index2.js');

const arr = index.arrArrays;
const avgTot = index.totAvg;
const avgRow = index.rowAvg;

const removeIndex = (arr, arrIndex) => {
    let count = 0;
    arr.map(x => {
        let index = x.indexOf(arrIndex[count]);
        x.splice(index, 1);
        count++;
    })
}

const iterate = (arr, ind = index.rowAvg) => {
    if(arr[0].length > 0) {
        let tot = [];
        let newArr = arr.map(x => {
            const left = index.closest(x, ind);
            ind = index.rowAvg - left.left;
            tot.push(x[left.ans]);
            //x.splice(left.ans, 1);
            return x;
        })
        const diff = 50 - index.sum(tot);
        let lastArray = index.closest(index.e, diff);
        tot.push(index.e[lastArray.ans])
        let summaTot = index.sum(tot);
        if(summaTot === 50) {
            console.log('Yes', tot);
            removeIndex(arr, tot);
            //console.log('>>>>', arr);
            //index.e.splice(lastArray.ans, 1);
        } else {
            iterate(arr, index.rowAvg - (50 - summaTot))
        }
        //console.log('sdf', diff);
        //const last = index.closest(index.x, diff);
        //iterate(newArr);
    }
}

module.exports = {
    iterate,
    arr,
    index,
}
