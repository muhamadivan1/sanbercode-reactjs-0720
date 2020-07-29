//Nomor 1
console.log("_____Nomor 1_____")
console.log("===Luas Lingkaran===")
let luasLingkaran = (r) => {
    return 3.14 * r * r
}
console.log(luasLingkaran(5))
console.log("===Keliling Lingkaran===")
const kelilingLingkaran = (r) => {
    return 3.14 * 2 * r
}
console.log(kelilingLingkaran(7))
console.log(" ")

//Nomor 2
console.log("______Nomor 2______")
let kalimat = ""
var gabung = (kata1, kata2, kata3, kata4, kata5) => {
    kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
    return kalimat
}
console.log(gabung('saya', 'adalah', 'seorang', 'frontend', 'developer'))
console.log(" ")

//Nomor 3
console.log("_____Nomor 3______")
class Book {
    constructor(name, totalPage, price) {
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}
class Komik extends Book {
    constructor(name, totalPage, price) {
        super(name)
        this.totalPage = totalPage
        this.price = price
        this.isColorful = true
    }
    show() {
        return "Book: " + this.name + '\n' + "Total Page: " + this.totalPage + "\n" + "Price: " + this.price
    }
}
buku = new Komik("komik", 50, 10000)
console.log(buku.show())