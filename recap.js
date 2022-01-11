// ==========Hello World Program==========
console.log("Hello World");
document.writeln("Hello World");
// ==========Comment==========
/*
- //
*/

//  ========== Tipe Data Number ==========
document.writeln("Bulat " + 100 * 100);
document.writeln("<br>");
document.writeln("Pecahan " + 100.5 * 100);
document.writeln("<br>");
document.writeln("Binary " + 0b110011);

//  ========== Tipe Data Boolean ==========
document.writeln("<br>" + "Boolean : " + true);
document.writeln("<br>" + "Boolean : " + false);

//  ========== Tipe Data String ==========
document.writeln("<br>" + "Fauzan Ahmad");
document.writeln("<br>" + "Programmer Kelaperan" + "<br>");
document.write("<textarea cols='100' rows='10'>");
document.write("Programmer Kelaperan\n");
document.write("\tAda video tiap minggu katanya\n");
document.write("\\Dia juga bakalan\\bikin tutorial design\n");
document.write('"Masak-masak dan seputar tips lainnya"\n');
document.write("</textarea>");

//  ========== Variable ==========
let fullName = "Fauzan Ahmad",
    nickName = "Ujang",
    passion;

for (let i = 1; i <= 5; i++) {
    passion = "Design";
    document.writeln(
        i + ". " + fullName + " " + nickName + " " + passion + "<br>"
    );
}

document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
fullName = "hartono"; // ubah value
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");
document.writeln(fullName + "<br>");

const app = "Belajar yang rajin";
// app = "males mom"; tidak boleh diubah
document.writeln(app + "<br>");

//  ========== Operator Matematika ==========
document.writeln(
    "<p>======================Operator Matematika=====================</p>"
);
let result = 1 + 2;
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result;
result = result - 1;
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result;
result = result * 2;
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult = result;
result = result ** 2;
document.writeln("<p>" + originalResult + " ^ 2 = " + result + "</p>");
originalResult = result;
result = result / 3;
document.writeln("<p>" + originalResult + " / 3 = " + result + "</p>");
originalResult = result;

document.writeln(
    "<p>====================Operator Augmented Assignment=======================</p>"
);

result = 1 + 2;
document.writeln("<p>1 + 2 = " + result + "</p>");
originalResult = result;
result -= 1;
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result;
result *= 2;
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>");
originalResult = result;
result **= 2;
document.writeln("<p>" + originalResult + " ^ 2 = " + result + "</p>");
originalResult = result;
result %= 3;
document.writeln("<p>" + originalResult + " ^ 2 = " + result + "</p>");
originalResult = result;
result /= 3;
document.writeln("<p>" + originalResult + " / 3 = " + result + "</p>");
originalResult = result;
document.writeln("<p>===========================================</p>");

//  ========== Operator Perbandingan ==========
document.writeln("<p> =========== && / Dan ===========</p>");
let result = true && true;
document.writeln("<p> true && true = " + result + "</p>");
result = true && false;
document.writeln("<p> true && false = " + result + "</p>");
result = false && true;
document.writeln("<p> false && true = " + result + "</p>");
result = false && false;
document.writeln("<p> false && false = " + result + "</p>");

document.writeln("<p> =========== || / Atau ===========</p>");
result = true || true;
document.writeln("<p> true || true = " + result + "</p>");
result = true || false;
document.writeln("<p> true || false = " + result + "</p>");
result = false || true;
document.writeln("<p> false || true = " + result + "</p>");
result = false || false;
document.writeln("<p> false || false = " + result + "</p>");

document.writeln(
    "<p> =========== ! (operator unary) / Kebalikan ===========</p>"
);
result = !true;
document.writeln("<p> !true = " + result + "</p>");
result = !false;
document.writeln("<p> !false = " + result + "</p>");

document.writeln("<p> =========== contoh logika ===========</p>");
const nilaiUjian = 76,
    nilaiAbsensi = 76,
    lulusUjian = nilaiUjian > 75,
    lulusAbsensi = nilaiAbsensi > 75;
document.writeln("<p> nilai ujian = " + nilaiUjian + " </p>");
document.writeln("<p> nilai absensi = " + nilaiAbsensi + " </p>");
document.writeln("<p> lulus ujian = " + lulusUjian + " </p>");
document.writeln("<p> lulus absensi = " + lulusAbsensi + " </p>");
const lulus = lulusUjian && lulusAbsensi;
document.writeln(
    "<p> Saya ... (true=lulus, false=tidak lulus) = <strong>" +
    lulus +
    "</strong></p>"
);

//  ========== Operator Logika ==========
document.writeln("<p> =========== && / Dan ===========</p>");
let result = true && true;
document.writeln("<p> true && true = " + result + "</p>");
result = true && false;
document.writeln("<p> true && false = " + result + "</p>");
result = false && true;
document.writeln("<p> false && true = " + result + "</p>");
result = false && false;
document.writeln("<p> false && false = " + result + "</p>");

document.writeln("<p> =========== || / Atau ===========</p>");
result = true || true;
document.writeln("<p> true || true = " + result + "</p>");
result = true || false;
document.writeln("<p> true || false = " + result + "</p>");
result = false || true;
document.writeln("<p> false || true = " + result + "</p>");
result = false || false;
document.writeln("<p> false || false = " + result + "</p>");

document.writeln(
    "<p> =========== ! (operator unary) / Kebalikan ===========</p>"
);
result = !true;
document.writeln("<p> !true = " + result + "</p>");
result = !false;
document.writeln("<p> !false = " + result + "</p>");

document.writeln("<p> =========== contoh logika ===========</p>");
const nilaiUjian = 76,
    nilaiAbsensi = 76,
    lulusUjian = nilaiUjian > 75,
    lulusAbsensi = nilaiAbsensi > 75;
document.writeln("<p> nilai ujian = " + nilaiUjian + " </p>");
document.writeln("<p> nilai absensi = " + nilaiAbsensi + " </p>");
document.writeln("<p> lulus ujian = " + lulusUjian + " </p>");
document.writeln("<p> lulus absensi = " + lulusAbsensi + " </p>");
const lulus = lulusUjian && lulusAbsensi;
document.writeln(
    "<p> Saya ... (true=lulus, false=tidak lulus) = <strong>" +
    lulus +
    "</strong></p>"
);

//  ========== Console ==========
document.writeln("<p><strong>Press F12 atau inspect/console</strong></p>");
console.debug("Hello World,Debug");
console.info("Hello World");
console.warn("Hello World, Ini peringatan Loh !");
console.error("Hello World, Ini error loh !");

//  ========== String Template ==========
const name = "Fauzan Ahmad";
const hobby = "makan nasi uduk";
const template = `Name : ${name}, Hobby : ${hobby}`;
document.writeln("<p><strong>Press F12 atau inspect/console</strong></p>");
console.info(template);
// With expression ">"
const nilai = 81;
const templateTwo = `Name : ${name}, Lulus : ${nilai > 80}`;
console.info(templateTwo);

//  ========== Konversi String dan Number ==========
document.writeln("<p><strong>Press F12 or inspect/console</strong></p>");
document.writeln(
    "<p><strong>==============Konversi String dan Number==============</strong></p>"
);
const val1 = parseInt("2");
const val2 = 1;
const sum = val1 + val2;
document.writeln(`<p>${sum}</p>`);
document.writeln(`<p>${parseInt("1.3")}</p>`);
document.writeln(`<p>${parseFloat("1.3")}</p>`);
document.writeln(`<p>${Number("1.3")}</p>`);

let a = 1;
let b = 2;
let total = a.toString() + b;
document.writeln(`total ${total}`);

document.writeln(
    "<p><strong>==============NaN (Not a Number)==============</strong></p>"
);
document.writeln(`<p>${parseInt("salah")}</p>`);
document.writeln(`<p>${parseFloat("1.3Text Loh")}</p>`);
// Number(string) tidak mentolerir kesalahan pada data, berbeda dengan parseInt atau parseFloat yang masih mentolerir kesalahan data
document.writeln(`<p>${Number("1.3Text Loh")}</p>`);

document.writeln(
    "<p><strong>==============Operasi pada NaN (Not a Number)==============</strong></p>"
);
a = Number("salah");
total = a + 2;
document.writeln(
    `<p> total dari Number("salah") + 2 = <strong> ${total}</strong></p>`
);

document.writeln(
    "<p><strong>==============isNaN Function==============</strong></p>"
);
a = Number("salah");
total = a + 2;
document.writeln(
    `<p> isNaN("salah") = <strong> ${isNaN("salah")}</strong></p>`
);
document.writeln(`<p> isNaN(${b}) = <strong> ${isNaN(b)}</strong></p>`);
document.writeln(`<p> isNaN(NaN) = <strong> ${isNaN(NaN)}</strong></p>`);

//  ========== Tipe Data Array ==========
//  ========== Tipe Data Object ==========
//  ========== If Expression ==========
const examValue = 60;
if (examValue > 80) {
    document.writeln(`<p>Good Job</p>`);
} else if (examValue > 60) {
    document.writeln(`<p>Not Bad</p>`);
} else {
    document.writeln(`<p>Try Again Mas !</p>`);
    alert(
        `Bener2 deh anda ${prompt("Belajar lagi besok, masukan NIM mu mas !!!")}`
    );
}
//  ========== Popup ==========
alert("Halo dunia !!");

const nama = prompt("Whats your name sir ?");
alert(`My name is ${nama}`);

const masuk = confirm("Anda yakin masuk ? Didalam gelap loh!!");
if (masuk) {
    const nama = prompt("Siapa lagi namamu ?");
    alert(`Namas saya ${nama}`);
} else {
    alert("Bye bye !");
}

//  ========== Undefined ==========
document.writeln("<p><strong>Press F12 to open the console</strong></p>");
let name;
if (name === undefined) {
    console.info(`name undefined`);
} else {
    console.info(`name defined is ${name}`);
}

console.info("======Array Undefined Down Bellow======");
const nameArray = ["Fauzan", "Ahmad", "Gokil"];
if (nameArray[2] === undefined) {
    console.info(`name undefined`);
} else {
    console.info(`name defined is ${nameArray[2]}`);
}

console.info("======Object Undefined Down Bellow======");
let nameObject = {
    name: "fauzan ahmad",
};
if (nameObject.name === undefined) {
    console.info(`name undefined`);
} else {
    console.info(`name defined is ${nameObject.name}`);
}
//  ========== Null ==========
let name = null;
if (name === undefined) {
    alert("Hello Undefined");
} else if (name === null) {
    alert("Hello Null");
} else {
    alert(`Hello ${name}`);
}
//  ========== Switch Expression ==========
let nilai = prompt(`Selamat Kamu Telah Ujian. Masukan Nilai :`);
// alert(nilai);
switch (nilai) {
    case "A":
        alert("Wow anda lulus dengan baik !");
        break;
    case "B":
    case "C":
        alert("Anda lulus tuh");
        break;
    case "D":
        alert("Anda tidak lulus, silahkan ikut semester pendek, hahaha");
        break;
    default:
        alert("Mungkin anda salah jurusan !");
}

//  ========== Operator typeof ==========
let data = null;
switch (typeof data) {
    case "number":
        document.write(`Tipe data yang kamu uji adalah number = ${typeof data}`);
        break;
    case "string":
        document.write(`Tipe data yang kamu uji adalah string = ${typeof data}`);
        break;
    case "boolean":
        document.write(`Tipe data yang kamu uji adalah boolean = ${typeof data}`);
        break;
    case "null":
        document.write(`Tipe data yang kamu uji adalah null = ${typeof data}`);
        break;
    case "undefined":
        document.write(`Tipe data yang kamu uji adalah undefined = ${typeof data}`);
        break;
    case "symbol":
        document.write(`Tipe data yang kamu uji adalah symbol = ${typeof data}`);
        break;
    case "function":
        document.write(`Tipe data yang kamu uji adalah function = ${typeof data}`);
        break;
    case "bigint":
        document.write(`Tipe data yang kamu uji adalah bigint = ${typeof data}`);
        break;
    default:
        document.write(`Tipe data yang kamu uji adalah object = ${typeof data}`);
}

//  ========== Operator in ==========
let person = {
    firstName: "Fauzan",
    lastName: "Ahmad",
};

if ("firstName" in person) {
    alert(`Hello ${person.firstName}`);
} else {
    alert(`Hello `);
}

let result = "firstName" in person;
document.writeln(`<p>${result}</p>`);
document.writeln(`<p>===========================</p>`);

person = {
    lastName: undefined,
};
result = "lastName" in person;
document.writeln(`<p>${result}</p>`);
document.writeln(`<p>===========================</p>`);

person = [null, "Fauzan", null];
result = 0 in person;
document.writeln(`<p>${result}</p>`);

//  ========== Ternary Operator ==========
const nilai = 75;
let ucapan;

document.writeln(`<p>=====Tanpa Menggunakan Ternary Operator=====</p>`);
if (nilai >= 75) {
    ucapan = "Selamat Anda Lulus";
} else {
    ucapan = "Silahkan coba lagi tahun depan di Next Master Chef !";
}

document.writeln(`<p>${ucapan}</p>`);

document.writeln(`<p>=====Dengan Menggunakan Ternary Operator=====</p>`);
ucapan =
    nilai >= 75 ?
    "Selamat Anda Lulus" :
    "Silahkan coba lagi tahun depan di Next Master Chef !";

document.writeln(`<p>${ucapan}</p>`);

//  ========== Nullish Coalescing Operator ==========
let parameter;
let data = parameter;

document.writeln(`<p>=====Tanpa Nullish Coalescing Operator=====</p>`);
if (data === undefined || data === null) {
    data = "nilai default";
}
document.writeln(`<p>${data}</p>`);

document.writeln(`<p>=====Dengan Nullish Coalescing Operator=====</p>`);
// data = parameter ? ? "Nilai Default";
document.writeln(`<p>${data}</p>`);

//  ========== Optional Chaining ==========
document.writeln(`<p>=====Tanpa Oprional Chaining=====</p>`);
const person = {
    address: {
        country: "Indonesia",
    },
};
// let country = person ? .address ? .country;
// document.writeln(`<p>${country}</p>`);

//  ========== Falsy dan Truthy ==========
document.writeln(`<p>=====Tanpa Oprional Chaining=====</p>`);
let data = undefined;
if (data) {
    document.writeln("TRUE");
} else {
    document.writeln("FALSE");
}

//  ========== Operator Logika di Non Boolean ==========
console.info("hello" || ""); // hello
console.info("" || []); // []
console.info("0" || "NOL"); // "0"
console.info(0 || "NOL"); // "NOL"
console.info(null || "NULL"); // "NULL"
console.info(undefined || "UNDEFINED"); // UNDEFINED

const person = {
    firstName: "Fauzan",
    lastName: "Ahmad",
};

const name = person.firstName || person.lastName;
console.info(name);

console.info("================AND===============");
console.info("hello" && ""); // ""
console.info("" && []); // ""
console.info("0" && "NOL"); // NOL
console.info(0 && "NOL"); // 0
console.info(null && "NULL"); // null
console.info(undefined && "UNDEFINED"); // undefined
console.info("undefined" && "null"); // "null"

//  ========== For Loop ==========
// kode perulangan dengan kondisi
let counter = 1;
for (; counter <= 10;) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++;
}
document.writeln(`<p>=======================</p>`);
// kode perulangan dengan init statement
for (let counter = 1; counter <= 10;) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++;
}
document.writeln(`<p>=======================</p>`);
// kode perulangan dengan post statement
for (let counter = 1; counter <= 10; counter++) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
}
//  ========== While Loop ==========
let counter = 10;
while (counter >= 1) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter--;
}
//  ==========  Do While Loop ==========
//  ========== Break dan Continue ==========
// BREAK
let counter = 1;
while (true) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
    counter++;

    if (counter > 5) {
        break;
    }
}

document.writeln(`<p>Bilangan Ganjil Dengan Continue i % 2 === 0</p>`);
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    document.writeln(`<p>Perulangan Ganjil ke ${i}</p>`);
}

//  ========== Label ==========
// kode : label
loopi:
    for (let i = 0; i < 100; i++) {
        loopj: for (let j = 0; j < 10; j++) {
            console.log(`${i}-${j}`);
        }
    }

// kode : Continue atau break di Label 
loopa:
    for (let a = 0; a < 10; a++) {
        loopb: for (let b = 0; b < 100; b++) {
            if (b > 10) {
                continue loopa;
            }
            document.writeln(`<p>${a}-${b}</p>`)
        }
    }

//  ========== For In ==========
// Kode: For In di Object
const person = {
    firstName: "Fauzan",
    middleName: "Ahmad",
    lastName: "M",
};

document.writeln(`<p>=====For In di Object=====</p>`);
for (const property in person) {
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`);
}

// Kode : For In di Array
document.writeln(`<p>=====For In di Array=====</p>`);
const names = ["Fauzan", "Tato", "Yono"];
for (const index in names) {
    document.writeln(`<p>Index ${index} : ${names[index]}</p>`);
}

//  ========== For Of ==========
document.writeln(`<p>==========Array Dengan For Of==========</p>`);
// Kode : For Of di Array
const names = ["Fauzan Ahmad", "Yono Kurniawan", "Wahyu Inna"];
for (const name of names) {
    document.writeln(`<p>${name}</p>`);
}

document.writeln(`<p>==========String Dengan For Of==========</p>`);
// Kode : For Of di String
const name = "Fauzan Ahmad";
for (const char of name) {
    document.writeln(`<p>${char}</p>`);
}

//  ========== With Statement ==========
// Kode : Tanpa With Statement
document.writeln(`<div>Press F12 or klik inspect and console</div>`);
const person = {
    firstName: "Fauzan",
    lastName: "Ahmad",
};

console.log(`Tanpa With Statement`);
console.log(person.firstName);
console.log(person.lastName);

// Kode : Dengan With Statement
const human = {
    firstName: "Fauzan",
    lastName: "Ahmad",
};

console.log(`Dengan With Statement`);
with(human) {
    console.log(firstName);
    console.log(lastName);
}

// Kode : Ambigu di With Statement
console.log(`Ambigu di With Statement`);
const humanis = {
    firstName: "Fatimah",
    lastName: "Ahmad",
};

const firstName = "Bundo";
const lastName = "Nando";

with(humanis) {
    console.log(firstName); // Niatnya ingin Bundo
    console.log(lastName); // Niatnya ingin Nando
}

//  ========== Function ==========
function sayHelloWorld() {
    document.writeln(`<p>Hello World</p>`);
}

sayHelloWorld();
sayHelloWorld();

//  ========== Function Parameter ==========
// Kode : Tanpa With Statement
document.writeln(`<div>Press F12 or klik inspect and console <br> to see the result</div>`);

function sayHello(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

sayHello("Fauzan", "Racing");

//  ========== Function Return Value ==========
// Kode : Function Return Value
document.writeln(`<div>Press F12 or klik inspect and console <br> to see the result</div>`);

function sayHello(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`;
}

console.log("====Return Value Satu====");
console.log(sayHello("Fauzan", "Racing"));

// Kode : Function Return Value Lebih Dari Satu 
function getFinalScoreValue(value) {
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}
console.log("====Return Value Lebih Dari Satu====");
let inputNilai = 81;
let output = getFinalScoreValue(inputNilai);
console.log(output);


// Kode : Menghentikan Eksekusi dengan Return
function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}
console.log(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//  ========== Optional Parameter ==========
// Kode : Kode optional parameter
document.writeln(`<div>Press F12 or klik inspect and console <br> to see the result</div>`);

function sayHello(firstName, middleName, lastName) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

sayHello("Fauzan");

//  ========== Default Parameter ==========
// Kode : Default Parameter
document.writeln(`<div>Press F12 or klik inspect and console <br> to see the result</div>`);

function register(name, gender = "UNKNOWN") {
    console.log(nama);
    console.log(gender);
}

register("Fauzan", "LAKIK");
register("Budi");
register("Joko", undefined);

//  ========== Rest Parameter ==========
// Kode : Rest Parameter
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    document.writeln(`<p>Total ${name} is ${total}</p>`);
}


sum("Mango", 50, 40, 3);
sum("Coconut", 50, 40, 3);
sum("Papaya", 50, 40, 3);

// Kode : Spread Syntax
const values = [10, 25, 34, 21, 22];
sum("Test", ...values);

//  Kode : Arguments Object
document.writeln(`<p>=====Arguments Object (Old Sum)=====</p>`);

function oldSum() {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    document.writeln(`<p>Total is ${total}</p>`);
}

oldSum(1, 3, 2, 5, 2, 3);

//  ========== Function Sebagai Value ==========
// Kode : Function di Variable
function sayHello(name) {
    document.writeln(`<p>Hello ${name}</p>`);
}

document.writeln(`<p>=====Function di Variable=====</p>`);
let say = sayHello;
sayHello("Fauzan");
say("Tato");

// Kode : Function di Parameter
document.writeln(`<p>=====Function di Parameter=====</p>`);

function giveMeName(callback) {
    callback("Fauzan Ahmad"); // sayHello("Fauzan Ahmad");
}
giveMeName(sayHello);
giveMeName(say); // giveMeName(sayHello)

//  ========== Anonymous Function ==========
// Kode : Anonymous Function di Variable
let say = function (name) {
    console.log(`Hello ${name}`);
    document.writeln(`<p>Hello ${name}</p>`);
}

say("Fauzan");

// Kode : Anonymous Function di Parameter
function giveMeName(callback, age) {
    callback("Fauzan", age);
}

giveMeName(function (name, age) {
    document.writeln(`<p>Hello ${name} I'm ${age} years old</p>`);
}, 20);

//  ========== Function dalam Function ==========
// Kode : Function dalam Function
function outer() {
    function inner() {
        document.writeln(`<p>Inner<p>`);
    }

    inner();
    inner();
}
outer();
inner(); // ERROR can not access inner function (inner is not defined)

//  ========== Scope ==========
// =====Kode : Global Scope=====
document.writeln(`<p>=====Global Scope=====</p>`);

// Variable counter berada di Global Scope
let counter = 0;

// Function hitMe berada di Global Scope
function hitMe() {
    // blok functionnya berada di local scope function hitMe
    counter++; // We can access
}
hitMe();
hitMe();

document.writeln(`<p>${counter}</p>`);

// =====Kode : Local Scope=====
document.writeln(`<p>=====Local Scope=====</p>`);

function first() {
    let firstVariable = "First";
}

function secound() {
    let secoundVariable = "Secound";
}

first();
secound();

//console.log(firstVariable); // ERROR can not access local scope
//console.log(secoundVariable); // ERROR can not access local scope

// =====Kode : Nested Function Scope=====
document.writeln(`<p>=====Nested Function Scope=====</p>`);

function firstNested() {
    let firstVariable = "First";

    function secoundNested() {
        document.writeln(`<p>${firstVariable}</p>`);
    }
    secoundNested();
}
firstNested();

//  ========== Recursive Function ==========
// =====Kode : Factorial Loop=====
document.writeln(`<p>=====Factorial dengan Loop=====</p>`);

function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

let factorialValue = factorial(2);
document.writeln(`<p>${factorialValue}</p>`);

// =====Kode : Factorial Recursive=====
document.writeln(`<p>=====Factorial dengan Function Recursive=====</p>`);

function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
factorialValue = factorialRecursive(20);
/*
    Cara kerja Function Recursive
    5 * factorialRecursive(5 - 1)
    5 * 4 * factorialRecursive(4 - 1)
    5 * 4 * 3 * factorialRecursive(3 - 1)
    5 * 4 * 3 * 2 * factorialRecursive(2 - 1)
    5 * 4 * 3 * 2 * 1
*/
document.writeln(`<p>${factorialValue}</p>`);

//  ========== Function GEnerator ==========
// =====Kode : Function Generator Sederhana=====
document.writeln(`<p>=====Function Generator Sederhana=====</p>`);

function* createNames() {
    yield "Fauzan";
    yield "dopping";
    yield "Tato";
}

for (const name of createNames()) {
    document.writeln(`<p>${name}</p>`);
}

// =====Kode : Function Generator Mulai Tidak Sederhana (Lazy Load)=====
document.writeln(`<p>=====Function Generator Mulai Tidak Sederhana (Lazy Load)=====</p>`);

function* createOddNumbers(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            document.writeln(`<p>${`Yield ${i}`}</p>`);
            yield i;
        }
    }
}
const numbers = createOddNumbers(20);
// for (const number of numbers) {
//     document.writeln(`<p>${number}</p>`);
// }
// Iterasi Dengan Next().value; bawaan function Generator
document.writeln(`<p>${numbers.next().value}</p>`);
document.writeln(`<p>${numbers.next().value}</p>`);

document.writeln(`<p>=====Function Generator Mulai Tidak Sederhana (Eager Load)=====</p>`);

function createOddNumbersArray(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            document.writeln(`<p>${`Yield ${i}`}</p>`);
            result.push(i);
        }
    }
    return result;
}
const numbersArray = createOddNumbersArray(20);
console.log(numbersArray)
for (const number of numbersArray) {
    document.writeln(`<p>${number}</p>`);
}

//  ========== Arrow Function ==========
// =====Kode : Membuat Arrow Function=====
document.writeln(`<p>=====Membuat Arrow Function=====</p>`);
const sayHello = (name) => {
    document.writeln(`<p>Hello ${name}</p>`);
    let i = 1;
    while (true) {
        document.writeln(`<p>Hello ${name}</p>`);
        i++;
        if (i > 10) {
            break;
        }
    }
}
sayHello("Fauzan");

// =====Kode : Arrow Function Tanpa Block=====
document.writeln(`<p>=====Arrow Function Tanpa Block=====</p>`);
const sayHelloWB = (name) => document.writeln(`<p>Hello ${name}</p>`);
sayHelloWB("Fauzan Juga")

// =====Kode : Arrow Function Return Value=====
document.writeln(`<p>=====Arrow Function Return Value=====</p>`);
const sum = (a, b) => a + b;
document.writeln(`<p>${sum(50, 1)}</p>`)

// =====Kode : Arrow Function Tanpa Kurung Parameter=====
document.writeln(`<p>=====Arrow Function Tanpa Kurung Parameter=====</p>`);
const sayStory = text => document.writeln(`<p>Lo keren bisa sampai sini bung ${text}</p>`);
sayStory("Fauzan");

// =====Kode : Arrow Function Sebagai Parameter=====
document.writeln(`<p>=====Arrow Function Sebagai Parameter=====</p>`);

function giveMeName(callbacks) {
    callbacks("Fauzan Ahmad");
}
giveMeName((name) => document.writeln(`<p>Hello ${name}</p>`));

//  ========== Closure ==========
// =====Kode : Membuat Arrow Function=====
document.writeln(`<p>=====Membuat Arrow Function=====</p>`);
const createAdder = (value) => {
    const owner = "Fauzan";
    const add = (param) => {
        document.writeln(`<p>${owner}${param}</p>`);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);
/*
    ketika membuat ini const addTwo = createAdder(2);
    maka sebenarnya yang terjadi, kita seolah-olah membuat 
    function addTwo(param) {
        document.writeln(`<p>fauzan</p>`);
        return 2 + param
    }
*/
document.writeln(`<p>${addTwo(10)}</p>`);
document.writeln(`<p>${addTwo(20)}</p>`);

//  ========== Object Method ==========
// =====Kode : Membuat Object dengan Method=====
document.writeln(`<p>=====Membuat Object dengan Method=====</p>`);
const person = {
    name: "Fauzan",
    sayHello: function (name) {
        document.writeln(`<p>Hellow ${name} ! Whatsapp !!</p>`);
    }
}
person.sayHello("Fauzan Ahmad");
console.table(person);

// =====Kode : Menambah Method ke Object=====
document.writeln(`<p>=====Menambah Method ke Object=====</p>`);
const personTwo = {
    name: "Fauzan"
}
personTwo.sayHelloToPerson = function (name) {
    document.writeln(`<p>Hellow ${name} ! Whatsapp !!</p>`);
}
personTwo.sayHelloToPerson("Fauzan Ahmad");

//  ========== Kata Kunci this ==========
// =====Kode : this di Global Scope=====
document.writeln(`<p>=====this di Global Scope=====</p>`);
console.log(this);

// =====Kode : this di Function=====
document.writeln(`<p>=====this di Function=====</p>`);

function testThis() {
    console.log(this);
}
testThis();

// =====Kode : this di Object Method=====
document.writeln(`<p>=====this di Object Method=====</p>`);
const person = {
    name: "Fauzan",
    sayHello: function (name) {
        // this = person
        console.info(`Hi ${name}, my name is ${this.name}`);
    }
}
person.sayHello("Langleuy");

//  ========== Arrow Function di object ==========
// =====Kode : Arrow Function di Object Method=====
document.writeln(`<p>=====Arrow Function di Object Method=====</p>`);
const person = {
    name: "Fauzan",
    sayHello: (name) => {
        console.info(`Hello ${name}`);
    }
};
person.sayHello("Budi");

// =====Kode : this di Arrow Function Object=====
document.writeln(`<p>=====this di Arrow Function Object=====</p>`);
const personTwo = {
    name: "Fauzan",
    sayHelloTwo: (name) => {
        console.info(this);
        console.info(`Hello ${name}, My name is ${this.name}`);
    }
};
personTwo.sayHelloTwo("Budi");

// =====Kode : this di Arrow Function Object=====
document.writeln(`<p>=====this di Arrow Function Object=====</p>`);
const personThree = {
    name: "Fauzan",
    sayHelloTwo: (name) => {
        console.info(this);
        console.info(`Hello ${name}, My name is ${this.name}`);
    }
};
personThree.sayHelloTwo("Budi");

//  ========== Getter dan Setter ==========
//  ========== Masalah Variable var ==========
// ========== Destructuring ==========
// ========== Strict Mode ==========
// ========== Debugger ==========