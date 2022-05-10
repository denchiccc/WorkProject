'use strict';
let num = 20;

function showFirstMessag(text) {
	console.log(text);
	num = 10;
}
showFirstMessag('Hello World');
console.log(num);

function culc(a, b) {
	return (a + b);

}

console.log(culc(4, 7));
console.log(culc(43, 7));
console.log(culc(45, 7));
console.log(culc(4, 78));
console.log(culc(44, 7));
// !бывают три вида функций  function declaration; function expresstion; стрелочные функции.
// 1 вид функции
function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);
// 2 вид функции
const loger = function () {
	console.log('hello world');
};
loger();
//  3 вид функции
const calc = (a, b) => a + b;

// ! конветация валюты

function convert(amunt) {
	console.log(28 * amunt);
}
convert(45); //- подстовляем любое число и происходит конвертация
// ! конвертация валюты с разными типами валют
let curUs = 28;
let curEu = 32;

function convert(amunt, cur) {
	console.log(cur * amunt);
}
convert(24, curEu);
// ! функция конвертация валют + функция скидки. 
const curRub = 27;
const discont = 0.9;

function convert(amuont, curr) {
	console.log(curr * amuont);
	return curr * amuont;
}

function promotion(result) {
	console.log(result * discont);
}
const res = convert(300, curRub);
promotion(res);
// ! использование return без значения в функции
function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return
	}
}
test();
// !  Задачи 1
function sayHello(name) {
	console.log('Привет,' + name);
	return ('Привет,' + name);
}
sayHello('Денис');

// ! Задача 2

function returnNeighboringNumbers(num) {
	let arr = [];

	for (let i = 0; i < 3; i++) {
		arr[i] = ++num - 2;
	}
	console.log(arr);
	return (arr);
}
returnNeighboringNumbers(5);

// ! Задача 3

/* function getMathResult(num, times) {
	if (typeof (times) !== 'number' || times <= 0) {
		return num;
	}

	let str = '';

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}
	console.log(str);
	return str;
}
getMathResult(10, 5); */

function getMathResult(num, times) {
	if (typeof (times) !== 'number' || times <= 0) {
		console.log(num);
		return num;
	}

	let str = '';
	for (let i = 1; i <= times; i++) {
		if (times === i) {
			str += `${num*i}`;
		} else {
			str += `${num*i}---`;
		}


	}
	console.log(str);
	return str;
}
getMathResult(5, 3);

const ask = 'how are You';

console.log(ask.length); // ! свойство определяет сколько символов в строке
console.log(ask.toUpperCase()); // ! метод переводит все буквы в верхний регистр
console.log(ask.toLowerCase()); // ! метод переводит все буквы в нижний регистр
console.log(ask.indexOf('o'));

const lonn = 'what is your name';

console.log(lonn.slice(8, 13));