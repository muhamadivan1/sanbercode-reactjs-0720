// Nomor 1
// gabungkan variabel-variabel tersebut agar menghasilkan output saya Senang belajar JAVASCRIPT
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript";
console.log(kataPertama + kataKedua + kataKetiga + kataKeempat.toUpperCase())



// Nomor 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
// ubah lah variabel ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output
var jumlah = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(jumlah);



// Nomor 3
// selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);



// Nomor 4
var nilai = 75;
// pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi
// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E
if (nilai >= 80) {
    console.log("indeks = A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("indeks = B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("indeks = C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("indeks = D")
} else {
    console.log("indeks = E")
}



// Nomor 5
var tanggal = 15;
var bulan = 8;
var tahun = 2000;
// ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)
switch (bulan) {
    case 1:
        {
            console.log(tanggal + " Januari " + tahun)
            break;
        }
    case 2:
        {
            console.log(tanggal + " Februari " + tahun)
            break;
        }
    case 3:
        {
            console.log(tanggal + " Maret " + tahun)
            break;
        }
    case 4:
        {
            console.log(tanggal + " April " + tahun)
            break;
        }
    case 5:
        {
            console.log(tanggal + " Mei " + tahun)
            break;
        }
    case 6:
        {
            console.log(tanggal + " Juni " + tahun)
            break;
        }
    case 7:
        {
            console.log(tanggal + " Juli " + tahun)
            break;
        }
    case 8:
        {
            console.log(tanggal + " Agustus " + tahun)
            break;
        }
    case 9:
        {
            console.log(tanggal + " September " + tahun)
            break;
        }
    case 10:
        {
            console.log(tanggal + " Oktober " + tahun)
            break;
        }
    case 11:
        {
            console.log(tanggal + " November " + tahun)
            break;
        }
    case 12:
        {
            console.log(tanggal + " Desember " + tahun)
            break;
        }
}