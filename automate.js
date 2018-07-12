const index = require('./index2.js');

const arr = index.arrArrays;
const avgTot = index.totAvg;
const avgRow = index.rowAvg;

const iterate = arr => {
    if(arr[0].length > 0) {
        let tot = [];
        let newArr = arr.map(x => {
            const left = index.closest(x, index.rowAvg);
            tot.push(x[left.ans]);
            x.splice(left.ans, 1);
            //console.log('>>>', x);
            return x;
        })
        const diff = 50 - index.sum(tot);
        let lastArray = index.closest(index.e, diff);
        console.log('>>', lastArray);
        if(lastArray.left === 0) {
            console.log('>>>>', arr);
            index.e.splice(lastArray.ans, 1);
        }
        //console.log('sdf', diff);
        //const last = index.closest(index.x, diff);
        iterate(newArr);
    }
}

module.exports = {
    iterate,
    arr,
    index,
}
