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
//  ========== String Template ========== 
//  ========== Konversi String dan Number ========== 
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