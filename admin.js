const url = https://script.google.com/macros/s/AKfycbxOKvSA3vTsZA_JkY5OkEcLYCxWK-z5hLcmojo2sfht5OAV5DcJO4_EvfYQs3c9YDWbSg/exec;

function tambahData() {
    let nama = document.getElementById("nama").value;

    if (nama === "") {
        alert("Nama siswa wajib diisi!");
        return;
    }

    let data = {
        nama: nama,
        kelas: "3",
        keterangan: "Aktif"
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert("✅ Data berhasil disimpan ke Google Sheets");
        document.getElementById("nama").value = "";
    })
    .catch(error => {
        alert("❌ Gagal menyimpan data");
        console.error(error);
    });
}


