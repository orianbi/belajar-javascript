// Method pada array

// 2. menampilkan array menggunakan length
// var arr = ['isa', 'asrori', 'ori', 'tika', 'ririn'];
// for (var i = 1; i < arr.length; i++) {
//     console.log('Mahasiswa ke- ' + i + ' : ' + arr[i])
// }
// 3. join
// var arr = ['isa', 'asrori', 'ori', 'tika', 'ririn'];
// console.log(arr.join())
// console.log(arr.join(' - '))
// 4. splice
// cara penggunaan
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,.....)
// cth

// var arr = ['isa', 'asrori', 'ori'];
// arr.splice(1, 0, 'Firman', 'Fitri');
// console.log(arr.join(' - '));


// 5. slice
// cara penggunana
// slice(awal,akhir)
// var arr = ['isa', 'asrori', 'ori', 'tika', 'ririn'];

// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(' - '));

// 6. forEach 
// kekurangan tidak bisa mengembalikan nilai array
// var angka = [1, 2, 5, 3, 6, 7, 9, 34];
// var nama = ['isa', 'asrori', 'ori'];
// nama.forEach(function (e, i) {

//     console.log('Mahsisiwa ke-' + i + ' adalah ' + e);


// })
// 7. map
// bisa mengembalikan nilai array
// var nama = ['isa', 'asrori', 'ori'];
// var angka = [1, 2, 5, 3, 6, 7, 9, 34];
// var angka1 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka1.join(' - '))
// 8. sort
// nilai tidak urut akan mengurutkan berdasarkan awal angka
// var angka = [1, 2, 5, 3, 6, 7, 9, 34];
// angka.sort();
// console.log(angka.join(' - '));

var angka = [1, 2, 5, 3, 6, 7, 9, 34];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - '));