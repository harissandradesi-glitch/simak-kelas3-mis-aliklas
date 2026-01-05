const url = "https://script.google.com/macros/s/AKfycbyZpjoQUS7E4MU8c2kiyuTtUZphop2rjL2VdlZh7i7vP3f-e-jv-F-QHGviS2myPIndeg/exec";

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

