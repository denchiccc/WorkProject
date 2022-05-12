/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания




/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false,

}; */
// ! 1 способ цикла
/* for (let i = 1; i < 3; i++) {

	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = prompt('На сколько оцените его?', '');

	if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('All ok');
	} else {
		console.log('error');
		i--;
	}
} */
// ! 2 способ цикла
/* let x = 0;
while (x < 2) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = prompt('На сколько оцените его?', '');
	if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
		x++;
		personalMovieDB.movies[a] = b;
		console.log('All ok');

	} else {
		console.log('error');

	}

} */
// ! 3 способ цикла
/* let x = 0;
do {

	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = prompt('На сколько оцените его?', '');
	if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
		x++;
		personalMovieDB.movies[a] = b;
		console.log('All ok');

	} else {
		console.log('error');
	}
}
while (x < 2);

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
	alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
	alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
	alert("Вы киноман");
} else {
	console.log("Произошла ошибка");
	alert("Произошла ошибка");
}

console.log(personalMovieDB); */

// ! Переделываем приложение при помщщи функции

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false,

};

function remeberMyFilm() {
	for (let i = 1; i < 3; i++) {

		const a = prompt('Один из последних просмотренных фильмов?', '').trim( /* этот метод(str.trim()) удоляет пробельные символы в конце и начеле строки */ );
		const b = prompt('На сколько оцените его?', '');

		if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('All ok');
		} else {
			console.log('error');
			i--;
		}
	}

}
remeberMyFilm();

function enterPersonalMovi() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
		alert("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
		alert("Вы киноман");
	} else {
		console.log("Произошла ошибка");
		alert("Произошла ошибка");
	}
}
enterPersonalMovi();

function writeYourGenres() {

	for (let i = 1; i <= 3; i++) {
		const a = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = a;

	}

}
writeYourGenres();

// ! 1 способ создание функции showMyDv 
/* function showMyDv() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}
showMyDv(); */

// ! 2 способ создания функции showMyDv 
function showMyDB(hidden /* - шаблон поведения(патерн) */ ) {
	if (!hidden /*  - означает база даннных не скрыта */ ) {
		console.log(personalMovieDB);

	}
}
showMyDB(personalMovieDB.privat);


// console.log(personalMovieDB);