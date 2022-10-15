const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmScore = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmScore2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[lastFilm] = lastFilmScore;
personalMovieDB.movies[lastFilm2] = lastFilmScore2;
console.log(personalMovieDB);