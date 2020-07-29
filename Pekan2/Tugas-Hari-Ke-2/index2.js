var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise
function readBooks() {
    readBooksPromise(10000, books[0]).then(function(sisawaktu) {
            console.log(sisawaktu)
            if (sisawaktu > 0) {
                readBooksPromise(10000, books[1]).then(function(sisawaktu) {
                    console.log(sisawaktu)
                    if (sisawaktu > 0) {
                        readBooksPromise(10000, books[2]).then(function(sisawaktu) {

                        })
                    }
                })
            }
        })
        .catch(function(sisawaktu) {
            console.log(sisawaktu)
        })
}
readBooks();