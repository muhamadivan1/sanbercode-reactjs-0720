//Nomor 1
console.log("Nomor 1")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objekpeserta = {
    Nama: "Asep",
    Jenis_Kelamin: "laki-laki",
    hobi: "baca buku",
    tahun_lahir: 1992
}
console.log(objekpeserta)


//Nomor 2
console.log("Nomor 2")
var buah = [{ nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: "9000" },
    { nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: "8000" },
    { nama: "semangka", warna: "hijau & merah", ada_bijinya: "ada", harga: "10000" },
    { nama: "pisang", warna: "kuning", ada_bijinya: "tidak", harga: "5000" }
]

var arrayBuahFilter = buah.filter(function(item) {
    return item.warna == "merah";
})

console.debug(arrayBuahFilter)


//Nomor 3
console.log("Nomor 3")

var dataFilm = []

function isiFilm(TambahData) {
    dataFilm.push(TambahData);
}

var TambahData = {
    Nama: "The Boss Baby",
    Durasi: "1 jam 37 menit",
    Genre: "komedi",
    Tahun: 2017
}

console.log(isiFilm(TambahData))
console.log(dataFilm)


//Nomor 4
console.log("Nomor 4")
    //Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//Release 1
// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
    }
    yell() {
        return "Auooo"
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return "hop hop"
    }
}


var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell()) // "Auooo"

var kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump()) // "hop hop"


//Nomor 5
console.log("Nomor 5")
class Clock {
    constructor({ template }) {

        var timer

        function render() {
            var date = new Date()

            var hours = date.getHours()
            if (hours < 10)
                hours = '0' + hours

            var mins = date.getMinutes()
            if (mins < 10)
                mins = '0' + mins

            var secs = date.getSeconds()
            if (secs < 10)
                secs = '0' + secs

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs)

            console.log(output)
        }

        this.stop = function() {
            clearInterval(timer)
        }

        this.start = function() {
            render()
            timer = setInterval(render, 1000)
        }

    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();