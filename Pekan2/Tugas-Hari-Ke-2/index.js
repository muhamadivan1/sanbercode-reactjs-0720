// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(sisawaktu) {
    if (sisawaktu !== 0) {
        readBooks(sisawaktu, books[1], function(sisawaktu) {
            if (sisawaktu !== 0) {
                readBooks(sisawaktu, books[2], function(sisawaktu) {
                    if (sisawaktu !== 0) {
                        readBooks(sisawaktu, books[3], function(sisawaktu) {

                        })
                    }
                })
            }
        })
    }
})