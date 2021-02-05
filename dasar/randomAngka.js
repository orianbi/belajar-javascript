var p = '';
var kesempatan = 3;
var comp = Math.floor(Math.random() * 10);

for (var angka = 1; angka <= kesempatan; angka++) {
    p = prompt('pilih angka 1 - 10 \n kesempatan anda 3 x');
    if (p < comp) {
        alert('tebakan anda terlalu rendah!');

    } else if (p > comp) {
        alert('tebakan anda terlalu tinggi!');
    } else {
        alert('tebakan anda benar' + " " + p);
        break;
    }


}

if (kesempatan == 3) {
    alert('kesempatan ada sudah habis!')
}

alert('terimakasih...')