const a = [16, 19, 8, 17, 6, 6, 8, 8];
const b = [8, 12, 11, 3, 8, 10, 14, 11];
const c = [0, 11, 8, 8, 8, 10, 11, 10];
const d = [8, 10, 9, 8, 8, 9, 6, 10];
const e = [3, 15, 16, 4, 7, 0, 16, 8, 4, 15, 7, 10, 1, 10, 4, 5];

const sum = arr => arr.reduce((prev, curr) => prev + curr);
const avg = arr => sum(arr) / arr.length;

const aSum = sum(a);
const bSum = sum(b);
const cSum = sum(c);
const dSum = sum(d);

const arrArrays = [a, b, c, d];

const arrArraysSum = arrArrays.map(x => sum(x));

const totAvg = sum(arrArraysSum) / 8;
const rowAvg = totAvg / 4;

const leftOver = (avg, closest) => avg - closest;

const closest = (array,num) => {
    var i=0;
    var minDiff=1000;
    var ans;
    for(i in array){
         var m=Math.abs(num-array[i]);
         if(m<minDiff){
                minDiff=m;
                ans=parseInt(i);
            }
      }
    let left = leftOver(num, array[ans]);
    return {
        left,
        ans,
    };
}

module.exports = {
    a,
    b,
    c,
    d,
    e,
    sum,
    avg,
    leftOver,
    closest,
    totAvg,
    rowAvg,
    arrArrays,
    leftOver,
}
