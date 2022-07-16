const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },


    rememberMyFilm: function () {
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
    },


    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы класический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    // toggaleVisibleMyDB: function (hidden) {
    //     if (!hidden /* тоже самое что и hidden == false */ ) {
    //         personalMovieDB.privat = false;
    //     } else {
    //         personalMovieDB.privat = true;
    //     }
    // },
    showDB: function (hidden) {
        if (!hidden /* тоже самое что и hidden == false */ ) {
            console.log(personalMovieDB);
        } else {
            console.log('Доступ закрыт');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр с номером ${i}`, '');
            /* это тоже что и :
            const ganre = prompt(`Ваш любимый жанр с номером ${i}`, '');
            personalMovieDB.genres[i - 1] = ganre; */
        }
    },

};

personalMovieDB.start();
personalMovieDB.rememberMyFilm();
personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggaleVisibleMyDB();
personalMovieDB.showDB();
personalMovieDB.writeYourGenres();