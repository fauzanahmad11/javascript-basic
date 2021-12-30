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
document.write("\"Masak-masak dan seputar tips lainnya\"\n");
document.write("</textarea>");

//  ========== Variable ========== 
let fullName = "Fauzan Ahmad",
    nickName = "Ujang",
    passion;

for (let i = 1; i <= 5; i++) {
    passion = "Design";
    document.writeln(i + ". " + fullName + " " + nickName + " " + passion + "<br>");
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

document.writeln("<p> =========== ! (operator unary) / Kebalikan ===========</p>");
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
document.writeln("<p> Saya ... (true=lulus, false=tidak lulus) = <strong>" + lulus + "</strong></p>");

//  ========== Operator Logika ========== 

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
document.writeln("<p><strong>==============Konversi String dan Number==============</strong></p>");
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

document.writeln("<p><strong>==============NaN (Not a Number)==============</strong></p>");
document.writeln(`<p>${parseInt("salah")}</p>`);
document.writeln(`<p>${parseFloat("1.3Text Loh")}</p>`);
// Number(string) tidak mentolerir kesalahan pada data, berbeda dengan parseInt atau parseFloat yang masih mentolerir kesalahan data
document.writeln(`<p>${Number("1.3Text Loh")}</p>`);

document.writeln("<p><strong>==============Operasi pada NaN (Not a Number)==============</strong></p>");
a = Number("salah");
total = a + 2;
document.writeln(`<p> total dari Number("salah") + 2 = <strong> ${total}</strong></p>`);

document.writeln("<p><strong>==============isNaN Function==============</strong></p>");
a = Number("salah");
total = a + 2;
document.writeln(`<p> isNaN("salah") = <strong> ${isNaN("salah")}</strong></p>`);
document.writeln(`<p> isNaN(${b}) = <strong> ${isNaN(b)}</strong></p>`);
document.writeln(`<p> isNaN(NaN) = <strong> ${isNaN(NaN)}</strong></p>`);

//  ========== Tipe Data Array ========== 
//  ========== Tipe Data Object ========== 
//  ========== If Expression ========== 
//  ========== Popup ========== 
//  ========== Undefined ========== 
//  ========== Null ========== 
//  ========== Switch Expression ========== 
//  ========== Operator typeof ========== 
//  ========== Operator in ========== 
//  ========== Ternary Operator ========== 
//  ========== Nullish Coalescing Operator ========== 
//  ========== Optional Chaining ========== 
//  ========== Falsy dan Truthy ========== 
//  ========== Operator Logika di Non Boolean ========== 
//  ========== For Loop ========== 
//  ========== While Loop ========== 
//  ==========  Do While Loop ========== 
//  ========== Break dan Continue ========== 
//  ========== Label ========== 
//  ========== For In ========== 
//  ========== For Of ========== 
//  ========== With Statement ========== 
//  ========== Function ========== 
//  ========== Function Parameter ========== 
//  ========== Function Return Value ========== 
//  ========== Optional Parameter ========== 
//  ========== Default Parameter ========== 
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