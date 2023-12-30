const nilaiIPA = 80
const nilaiIPS = 70

// nilai IPA saya adalah 80
// nilai IPS saya adalah 70
// jumlahnya adalah 150

// const teks = "nilai IPA saya adalah "+ nilaiIPA + '\n' + "nilai IPS saya adalah "+nilaiIPS+ '\n'+ "jumlahnya adalah "+ (nilaiIPA + nilaiIPS)
// console.log(teks);
const teks = `nilai IPA saya adalah ${nilaiIPA}
nilai IPS saya adlah ${nilaiIPS}
jumlahnya adalah ${nilaiIPA + nilaiIPS}`
console.log(teks);