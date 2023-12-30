// object
const name = "budi tanjung"

const biodata = {
    name: 'risano',
    email: "risano@mgail.com",
    age: 17,
    alamat: {
        detail: 'jl. jati bla bal no 12',
        kelurahan : 'jati', 
        kecamatan: 'padang timur',
        kodePos: 202312
    }
}


// const detail = biodata.alamat.detail
// const kodePos = biodata.alamat.kodePos
// const {detail, kodePos} = biodata.alamat

// const {name:namaku, email, age} = biodata
// const name = biodata.name
// const email = biodata.email
// const age = biodata.age

// console.log(namaku);
// console.log(email);
// console.log(age);
// console.log(detail);
// console.log(kodePos);


const rgb = [200, 14, 26]

// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]
const [red, _, blue] = rgb

console.log(blue);