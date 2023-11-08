//Nama : Dea Lisriani Safitri Waruwu
//NIM  : 121140208
//Kelas: RB
document.getElementById("hitungButton").addEventListener("click", function() {
    var inputBilangan = document.getElementById("bilangan").value;
    var jumlahGanjil = 0;
    var jumlahGenap = 0;

    for (var i = 1; i <= inputBilangan; i++) {
        if (i % 2 === 0) {
            jumlahGenap++;
        } else {
            jumlahGanjil++;
        }
    }

    var hasilPerhitungan = "Jumlah bilangan ganjil: " + jumlahGanjil + "<br>" +
                          "Jumlah bilangan genap: " + jumlahGenap;

    document.getElementById("hasil").innerHTML = hasilPerhitungan;
});