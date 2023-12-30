const nilai = [2,4,3,6,8,7,12]

const nilaiSort = nilai.sort((a, b)=>b - a)

// console.log(nilaiSort);

// const hobies = ['ngoding', 'joging', 'gaming', 'swimming', 'writing']

// for(let i = 0; i < hobies.length ; i++ ){
//     console.log(`${i}. ${hobies[i]}`);
// }
// hobies.map((item, index)=>{
//     console.log(`${index}. ${item}`);
// })

// hobies.forEach((item, index)=>{
//     console.log(`${index}. ${item}`);
// })

// const result = hobies.map((item)=>{
//     return `${item}.`
// })
// console.log(result);

const teks = "saya ingin menjadi programmer"

const resultSplit = teks.split(' ')
console.log(resultSplit);

const resultJoin = resultSplit.join('---')
console.log(resultJoin);