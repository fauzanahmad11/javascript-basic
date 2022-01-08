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
//  ========== Function Sebagai Value ==========
//  ========== Anonymous Function ==========
//  ========== Function dalam Function ==========
//  ========== Scope ==========
//  ========== Recursive Function ==========
//  ========== Function GEnerator ==========
//  ========== Recursive Function ==========
//  ========== Function GEnerator ==========
//  ========== Arrow Function ==========
//  ========== Closure ==========
//  ========== Object Method ==========
//  ========== Kata Kunci this ==========
//  ========== Arrow Function di object ==========
//  ========== Getter dan Setter ==========
//  ========== Masalah Variable var ==========
// ========== Destructuring ==========
// ========== Strict Mode ==========
// ========== Debugger ==========