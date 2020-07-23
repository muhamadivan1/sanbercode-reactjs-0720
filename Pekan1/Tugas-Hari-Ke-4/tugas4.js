//Nomor 1
console.log("Nomor 1")
console.log("LOOPING PERTAMA")
var coding = 2;
while (coding < 22) {
    console.log(coding + ' - I Love Coding');
    coding += 2;
}

console.log("LOOPING KEDUA")
var coding = 20;
while (coding > 0) {
    console.log(coding + ' - I will become a front end developer');
    coding -= 2;
}

//Nomor 2
console.log("Nomor 2")
var n = 20;
var x;
for (x = 1; x <= n; x++) {
    if (x % 3 === 0 && x % 2 === 1) {
        console.log(x + " - I Love Coding");
    } else if (x % 2 === 0) {
        console.log(x + " - Berkualitas");
    } else if (x % 2 === 1) {
        console.log(x + " - Santai");
    }
}

//Nomor 3
console.log("Nomor 3")
var s = "";
for (var i = 0; i < 7; i++) {
    for (var j = 0; j <= i; j++) {
        s += "#";
    }
    s += "\n";
}
console.log(s);

//Nomor 4
console.log("Nomor 4")
var kalimat = "saya sangat senang belajar javascript"
var kalimatBaru = kalimat.split(" ")
console.log(kalimatBaru)

//Nomor 5
console.log("Nomor 5")
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuahBaru = daftarBuah.sort()
for (var i = 0; i < 5; i++) {
    console.log(daftarBuahBaru[i])
}