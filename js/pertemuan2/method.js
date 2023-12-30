
// object literal

const biodata = {
    name: 'risano',
    penjumlahan: function(val1, val2){
        const result = val1 + val2
        console.log(result);
    },
    sayHelo(){
        console.log(`helo ${this.name} apakabar!!`);
    }
}

biodata.penjumlahan(10, 30)

biodata.sayHelo()