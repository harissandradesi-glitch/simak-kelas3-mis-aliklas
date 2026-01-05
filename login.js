function login() {
    let role = document.getElementById("role").value;

    if (role === "admin") {
        window.location.href = "admin.html";
    } 
    else if (role === "kepala") {
        window.location.href = "kepala.html";
    } 
    else if (role === "orangtua") {
        window.location.href = "orangtua.html";
    } 
    else if (role === "siswa") {
        window.location.href = "siswa.html";
    } 
    else {
        alert("Silakan pilih peran terlebih dahulu!");
    }
}
