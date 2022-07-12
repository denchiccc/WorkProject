'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних просмотренных фильмов', '').trim(),
            b = prompt('На сколько вы его оцените', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
}
rememberMyFilm();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();



function showDB(hidden) {
    if (!hidden /* тоже самое что и hidden == false */ ) {
        console.log(personalMovieDB);
    } else {
        console.log('Доступ закрыт');
    }
}
showDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр с номером ${i}`, '');
        /* это тоже что и :
        const ganre = prompt(`Ваш любимый жанр с номером ${i}`, '');
        personalMovieDB.genres[i - 1] = ganre; */
    }
}
writeYourGenres();

// console.log(personalMovieDB);