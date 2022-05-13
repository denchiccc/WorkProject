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
		console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);
	}
}
calculateVolumeAndArea(5);

console.log(typeof (3.4));

function getCoupeNumber(vagNum) {

	if (typeof (vagNum) !== 'number' || vagNum < 0 || !Number.isInteger(vagNum) /* проверяет является ли переменная целым числом */ ) {
		return ('Ошибка.Проверте правельность в веденного места');

	} else if (vagNum === 0 || vagNum > 36) {
		return ('Таких мест в вагоне не существует');
	}

	for (let i = 1; i <= vagNum; i++) {
		if (vagNum <= 4) {
			return (1);

		} else if (vagNum > 4 && vagNum <= 8) {
			return (2);

		} else if (vagNum > 8 && vagNum <= 12) {
			return (3);

		} else if (vagNum > 12 && vagNum <= 16) {
			return (4);

		} else if (vagNum > 16 && vagNum <= 20) {
			return (5);

		} else if (vagNum > 20 && vagNum <= 24) {
			return (6);

		} else if (vagNum > 24 && vagNum <= 28) {
			return (7);

		} else if (vagNum > 28 && vagNum <= 32) {
			return (8);

		} else if (vagNum > 32 && vagNum <= 36) {
			return (9);

		}

	}

}
getCoupeNumber(7.8);

// ! Пример CallBack функции
function doSport(sit, CallBack) {
	console.log(`Я присел: ${sit} раз`);
	CallBack();
}

function doResult() {
	console.log('Я выполнил упражнение!');

}
doSport(20, doResult);

// ! Объекты деструкторизация объетов

const options = {
	name: 'test',
	widht: 1050,
	heidht: 1050,
	colors: {
		border: 'black',
		bg: 'red',
	}

};

/* console.log(options.name);
delete(options.name);
console.log(options); */
// ! Способ перебора свойства объекта с помощью цикла
/* for (let key in options) {
	console.log(`Свойство объекта: ${key} значение объекта: ${options[key]}`); */
// }
// ! Способ достучатся до обьекта colors создаем цикл в нутри цикла

for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство объекта: ${i} значение объекта: ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство объекта: ${key} значение объекта: ${options[key]}`);
	}


}

// ! Методы объекта :
// ! 1 метотод Object.keys находит ключи нашего объекта

const personHuman = {
	name: 'Denis',
	old: 25,
	mal: 'man',
	hobby: {
		socet: 'Monday',
		hochey: 'Wednesday'
	}
};
console.log(Object.keys(personHuman).length);

// ! Можно создавать методы в ручную 
const personHman = {
	name: 'Denis',
	old: 25,
	mal: 'man',
	hobby: {
		socet: 'Monday',
		hochey: 'Wednesday'
	},
	makeTest: function () {
		console.log('Test');
	}
};
personHman.makeTest()

// ! Повторение методов объекта

const woman = {
	firstname: 'Anna',
	yourname: 'Yrchenko',
	old: 35,
	hobby: {
		drink: '3 litr',
		eat: 'bread'
	}

};
console.log(Object.keys(woman));
console.log(Object.keys(woman).length);


let counter = 0;

for (let key in woman) {
	if (typeof (woman[key]) === 'object') {
		for (let i in woman[key]) {
			console.log(`Свойство объекта: ${i} значение объекта: ${woman[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Свойство объекта: ${key} значение объекта: ${woman[key]}`);
		counter++;
	}
}
console.log(counter);

// ! Деструкторизация обьекта пример:

const womуn = {
	firstname: 'Anna',
	yourname: 'Yrchenko',
	old: 35,
	hobby: {
		drink: '3 litr',
		eat: 'bread'
	}

};
let {
	drink,
	eat
} = womуn.hobby;
console.log(eat);
// ! 33 урок Массивы и подмасивы



// ! 1 способ перебора масива
const arr = [2, 4, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

// ! 2 способ перебора масива
const aRR = [2, 5, 6, 8, 9, 3];
for (let i of aRR) {
	console.log(i);
}
// ! Метод перебора масива forEach(function){} пример
const arrTest = [3, 4, 6, 8, 1];
arrTest.forEach(function (item, i, arrTest) {

	console.log(`${i} : ${item} находится в масиве ${arrTest}`);

});

// ! метод преобразование перемнной строчной в массив

const str = prompt("", "");
const produts = str.split('', '');
console.log(produts);

// ! Сортировка элементов массива метод sort() можно применять с функцией так и без

const arrTest2 = [4, 2, 9, 5, 1, 7];
arrTest2.sort();
console.log(arrTest2);


function convert(a, b) {
	return a - b;

}