// Membuat object
// 1. Object Literal

// var mhs1 = {
//     nama: 'isa asrori',
//     nim: '1510531983',
//     email: 'isa@gmail.com'
// }

// 2. Function Declaration

// function buatObjectMahasiswa(nama, nim, email) {

//     var mhs = {}

//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;

//     return mhs;
// }

// var mhs1 = buatObjectMahasiswa('isa asrori', '1947293847234', ' isa@gmail.com');
// var mhs2 = buatObjectMahasiswa('ori', '1947293834', ' ori@gmail.com');

// 3. Constructor Huruf awal disarankan huru besar dalam membuat function

function Mahasiswa(nama, nim, email) {

    this.nama = nama;
    this.nim = nim;
    this.email = email;
}

var mhs1 = new Mahasiswa('isa asrori', '1947293847234', ' isa@gmail.com');