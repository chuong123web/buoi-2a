// ================= Bài 1 =================
let studentName = "Nguyen Van A";
let birthYear = 2000;
let gender = "Nam";
const CURRENT_YEAR = 2025;

let age = CURRENT_YEAR - birthYear;
console.log("Tên: " + studentName + ", Năm sinh: " + birthYear + ", Giới tính: " + gender + ", Tuổi: " + age);


// ================= Bài 2 =================

console.log("Test var trước khi khai báo:", hoistingTestVar);
var hoistingTestVar = 10;
console.log("Test var sau khi khai báo:", hoistingTestVar);


let hoistingTestLet = 20;
console.log("Test let:", hoistingTestLet);


const hoistingTestConst = 30;
console.log("Test const:", hoistingTestConst);


// ================= Bài 3 =================
let firstName = "Hoa";
let age2 = 22;
let isMarried = false;
console.log("Tên: " + firstName + ", Tuổi: " + age2 + ", Đã kết hôn: " + isMarried);


// ================= Bài 4 =================
let strNumber = "42";
console.log("Kiểu trước:", typeof strNumber);
let num = Number(strNumber);
let result = num + 8;
console.log("Kết quả:", result);
console.log("Kiểu sau:", typeof num);


// ================= Bài 5 =================
let a = 15, b = 4;
console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);
console.log("Dư:", a % b);
console.log("Lũy thừa:", a ** b);


// ================= Bài 6 =================
let productName = "Laptop", price = 1000, quantity = 2;
const DISCOUNT_RATE = 0.1;
let totalPrice = price * quantity * (1 - DISCOUNT_RATE);
console.log("Sản phẩm: " + productName + ", Số lượng: " + quantity + ", Tổng giá: " + totalPrice);
