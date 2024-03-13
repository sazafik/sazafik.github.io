let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
console.log(str1.length === str2.length); // Виведе true

let string5 = 'Hello World';
let firstChar = string5.charAt(0);
console.log(firstChar); // Виведе 'H'

let str3 = "Hello Javascript";
let symbolJ = str3.charAt(6);
console.log(symbolJ); // Виведе 'J'

let lastChar1 = str3[str3.length - 1];
console.log(lastChar1); // Виведе 't'
let lastChar2 = str3.slice(-1);
console.log(lastChar2); // Виведе 't'


function lastChar1(str) {
    return str[str.length - 1];
}

let str10 = "Hello";
console.log(lastChar1(str)); // Виведе 'o'


function lastChar2(str) {
    return str.charAt(str.length - 1);
}

let str11 = "Hello";
console.log(lastChar2(str)); // Виведе 'o'

function lastChar3(str) {
    return str.slice(-1);
}

let str12 = "Hello";
console.log(lastChar3(str)); // Виведе 'o'


let a = 'When candles are out,';
let b = 'all cats are grey.';

let concatenatedString = a.concat(' ', b);
console.log(concatenatedString); // Виведе 'When candles are out, all cats are grey.'

let fact = "Fifteen is the same as ";
let f = 5;
let g = 10;

fact = fact + (f + g); // Додаємо значення f та g до рядка fact

console.log(fact); // Виведе 'Fifteen is the same as 15'

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "Hello, " + fullName + "!";
}

let firstName = "Tom";
let lastName = "Cat";
console.log(getFullName(firstName, lastName)); // Виведе 'Tom Cat'
console.log(greeting(firstName, lastName)); // Виведе 'Hello, Tom Cat!'

function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "<div><h1>Hello, " + fullName + "!</h1></div>";
}

document.body.innerHTML = greetingHTML;


let string1 = "  The name of our game  ";
let phoneNumber = '\t  555-123\n ';

// Видалення зайвих пробілів з початку і кінця рядка
let trimmedString1 = string1.trim();
console.log(trimmedString1); // Виведе "The name of our game"

// Видалення зайвих пробілів з початку і кінця рядка
let trimmedPhoneNumber = phoneNumber.trim();
console.log(trimmedPhoneNumber); // Виведе "555-123"

// Для видалення зайвих пробілів, крім пробілів в середині рядка
// можна використати метод replace() разом із регулярним виразом
let stringWithSpaces = "  The name of our game  ";
let cleanedString = stringWithSpaces.replace(/^\s+|\s+$/g, '');
console.log(cleanedString); // Виведе "The name of our game"

// Для видалення зайвих пробілів та символів нового рядка
// можна також використати метод replace() разом із регулярним виразом
let cleanedPhoneNumber = phoneNumber.replace(/^\s+|\s+$/g, '');
console.log(cleanedPhoneNumber); // Виведе "555-123"


let sentence = 'Always look on the bright side of life';

// Перевірка, чи містить рядок значення 'look up'
if (sentence.includes('look up')) {
    console.log("Рядок містить 'look up'");
} else {
    console.log("Рядок не містить 'look up'");
}

// Перевірка, чи містить рядок значення 'look on'
if (sentence.includes('look on')) {
    console.log("Рядок містить 'look on'");
} else {
    console.log("Рядок не містить 'look on'");
}

// Перевірка, чи містить рядок значення 'look on' починаючи з 8-ї позиції
if (sentence.includes('look on', 8)) {
    console.log("Рядок містить 'look on' починаючи з 8-ї позиції");
} else {
    console.log("Рядок не містить 'look on' починаючи з 8-ї позиції");
}




let sentence = 'Always look on the bright side of life';

// Знайти індекс символу 'l'
let index1 = sentence.indexOf('l');
console.log("Індекс символу 'l':", index1); // Виведе індекс 1

// Знайти індекс символу 'l', починаючи з 3-ї позиції
let index2 = sentence.indexOf('l', 3);
console.log("Індекс символу 'l' з 3-ї позиції:", index2); // Виведе індекс 9

// Знайти індекс символу 'L'
let index3 = sentence.indexOf('L');
console.log("Індекс символу 'L':", index3); // Виведе -1, оскільки символ 'L' в рядку відсутній


let subString1 = sentence.substring(6);
console.log(subString1); // Виведе 'look on the bright side of life'

let subString2 = sentence.substring(0, 6);
console.log(subString2); // Виведе 'Always'

let subString3 = sentence.slice(6, 10);
console.log(subString3); // Виведе 'look'

//15 /^[a-z0-9_-]{8,16}$/i

//16 /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/

function truncateText(text) {
    if (text.length > 50) {
        return text.substring(0, 50) + '...';
    } else {
        return text;
    }
}


let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateText(sentence)); // Виведе перші 50 символів тексту


function truncateText(text) {
    if (text.length > 50) {
        return text.substr(0, 50) + '...';
    } else {
        return text;
    }
}


let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateText(sentence)); // Виведе перші 50 символів тексту






































