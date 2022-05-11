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

// ! Задача

// Место для первой задачи
function calculateVolumeAndArea(num) {
	if (typeof (num) == 'string' || isNaN(num) || num < 0) {
		console.log('При вычислении произошла ошибка');
	} else {
		const S = 6 * (num * num);
		const V = num * num * num;
		console.log('Объем куба: ' + `${V},`, 'площадь всей поверхности:' + `${S}`);
	}
}
calculateVolumeAndArea();

console.log(typeof (3.4));

function getCoupeNumber(vagNum) {

	if (typeof (vagNum) !== 'number' || vagNum < 0 || vagNum) {
		console.log('Ошибка.Проверте правельность в веденного места');
	} else if (vagNum === 0 || vagNum > 36) {
		console.log('Таких мест в вагоне не существует');
	}

	for (let i = 1; i <= vagNum; i++) {
		if (vagNum <= 4) {
			console.log(1);
			break;
		} else if (vagNum > 4 && vagNum <= 8) {
			console.log(2);
			break;
		} else if (vagNum > 8 && vagNum <= 12) {
			console.log(3);
			break;
		} else if (vagNum > 12 && vagNum <= 16) {
			console.log(4);
			break;
		} else if (vagNum > 16 && vagNum <= 20) {
			console.log(5);
			break;
		} else if (vagNum > 20 && vagNum <= 24) {
			console.log(6);
			break;
		} else if (vagNum > 24 && vagNum <= 28) {
			console.log(7);
			break;
		} else if (vagNum > 28 && vagNum <= 32) {
			console.log(8);
			break;
		} else if (vagNum > 32 && vagNum <= 36) {
			console.log(9);
			break;
		}

	}

}
getCoupeNumber();