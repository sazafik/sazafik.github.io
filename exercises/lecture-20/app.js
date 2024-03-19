const fruits = 'apple banana cantaloupe blueberries grapefruit';

const fruitsArray = fruits.split(' ');
console.log(fruitsArray);

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}


const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

let i = 0;
do {
    console.log(fruits[i]);
    i++;
} while (i < fruits.length);


const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (const fruit of fruits) {
    console.log(fruit);
}

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}


const names = ['Batman'];
names.push('Joker');
console.log(names); // ['Batman', 'Joker']


const names = ['Batman'];
names.unshift('Joker');
console.log(names); // ['Joker', 'Batman']


let names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names); // ['Catwoman', 'Batman', 'Joker', 'Bane']

let names = ['Batman', 'Joker', 'Bane'];
names = ['Catwoman'].concat(names);
console.log(names); // ['Catwoman', 'Batman', 'Joker', 'Bane']


let names = ['Batman', 'Joker', 'Bane'];
names.splice(1, 0, 'Catwoman');
console.log(names); // ['Batman', 'Catwoman', 'Joker', 'Bane']

const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexesToRemove = [1, 2]; // індекси 'Catwoman' і 'Joker'

// Видаляємо елементи за вказаними індексами
indexesToRemove.sort((a, b) => b - a); // Сортуємо індекси в порядку спадання, щоб не порушити індексацію масиву під час видалення
indexesToRemove.forEach(index => names.splice(index, 1));

console.log(names); // ['Batman', 'Bane']


const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

// Знаходимо індекси 'Catwoman' і 'Joker'
const catwomanIndex = names.indexOf('Catwoman');
const jokerIndex = names.indexOf('Joker');

// Замінюємо їх на 'Alfred'
if (catwomanIndex !== -1) {
    names[catwomanIndex] = 'Alfred';
}
if (jokerIndex !== -1) {
    names[jokerIndex] = 'Alfred';
}

console.log(names); // ['Batman', 'Alfred', 'Alfred', 'Bane']


const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

if (!names.includes('Alfred')) {
    names.push('Alfred');
}

console.log(names); // ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred']


const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const index = names.indexOf('Alfred');
if (index !== -1) {
    names.splice(index, 1);
}

console.log(names); // ['Batman', 'Catwoman', 'Joker', 'Bane']




























