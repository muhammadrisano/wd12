// declaration

// function namaFunction(){}

function sayHelo(nama){
    const teks = `helo ${nama}, apa kabar!`
    console.log(teks);
}

// sayHelo("risano")
// sayHelo("budi")


// expresion

// const penjumlahan = function(val1, val2){
//     // const nama = "risano"
//     const result = val1 + val2
//     // console.log('helo world');
   
//     return result
// }
// penjumlahan()
// const hasilPenjumlahan = result
// const hasil = penjumlahan(20, 40)

// if(hasil> 75){
//     console.log(`selamat anda lulus dengan nilai ${hasil}`);
// }else{
//     console.log('maaf belum belum lulus');
// }

// arrow function

const perkalian = (val1, val2)=> val1 * val2

const hasilPerkalian = perkalian(5, 4)
console.log(hasilPerkalian);