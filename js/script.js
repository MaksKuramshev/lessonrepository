'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(typeof(numberOfFilms));

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('один из последних фильмов?',''),
    b = prompt('на сколько оцениваете его?',''),
    c = prompt('один из последних фильмов?',''),
    d = prompt('на сколько оцениваете его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);