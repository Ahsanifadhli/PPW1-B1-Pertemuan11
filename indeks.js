function hitung(operasi) {
    // Input User
    const bilangan1 = parseFloat(prompt("Masukkan bilangan pertama:"));
    const bilangan2 = parseFloat(prompt("Masukkan bilangan kedua:"));
    
    // Validasi input
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }
    
    let hasil;
    let operator;
    let namaOperasi;
    
    // Pilihan Operasi Aritmatika
    switch(operasi) {
        case 'tambah':
            hasil = bilangan1 + bilangan2;
            operator = "";
            namaOperasi = "Penjumlahan";
            break;
        case 'kurang':
            hasil = bilangan1 - bilangan2;
            operator = "";
            namaOperasi = "Pengurangan";
            break;
        case 'kali':
            hasil = bilangan1 * bilangan2;
            operator = "";
            namaOperasi = "Perkalian";
            break;
        case 'bagi':
            if (bilangan2 === 0) {
                alert("Tidak bisa dibagi dengan 0!");
                return;
            }
            hasil = bilangan1 / bilangan2;
            operator = "";
            namaOperasi = "Pembagian";
            break;
        default:
            return;
    }
    
    // Update info box
    document.getElementById("infoOperasi").textContent = `Hasil Operasi ${namaOperasi}`;
    
    // Hasil di tabel
    document.getElementById("bil1").textContent = bilangan1 + " " + operator;
    document.getElementById("bil2").textContent = bilangan2;
    document.getElementById("hasil").textContent = hasil;
}
