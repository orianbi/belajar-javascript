
// const p2 = document.querySelector('.p2');

// function ubahWarnaP2() {

//     p2.style.backgroundColor = 'lightblue';
// }


// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');

// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');

//     liBaru.appendChild(teksLiBaru);

//     ul.appendChild(liBaru);

// });

// perbedan events hendler dan eventslistener


const p2 = document.querySelector('.p2');

// events hendlers
// dia akan menindih events yang pertama (mengabaikan)
p2.onclick = function () {
    p2.style.backgroundColor = 'lightgreen';
}

// p2.onclick = function () {
//     p2.style.color = 'green';
// }

// events Listener
// dia tidak akan menimpa events yang pertama jalan bersamaan
const p3 = document.querySelector('.p3');

p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightyellow';
});
