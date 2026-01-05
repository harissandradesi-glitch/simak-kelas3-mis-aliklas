function tambahData() {
    let nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Nama siswa harus diisi!");
    } else {
        document.getElementById("hasil").innerHTML =
            "✅ Data siswa <b>" + nama + "</b> berhasil ditambahkan (contoh).";
        document.getElementById("nama").value = "";
    }
}
