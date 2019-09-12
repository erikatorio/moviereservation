var selected_cinema = localStorage.getItem("selected-cinema");
var selected_movie = localStorage.getItem("selected-movie");
var selected_date = localStorage.getItem("selected-date");
var movies = JSON.parse(localStorage.getItem('movies'));
var item_index = 0;

for (data in movies) {
    if (movies[data]['title'] === selected_movie && movies[data]['cinema'] === selected_cinema && movies[data]['date'] === selected_date) {
        item_index = data;
    }
}

var movie_header = null;
switch (movies[item_index]['title']) {
    case 'Captain Marvel':
        movie_header = 'movie1-header';
        break;
    case 'Star Wars':
        movie_header = 'movie2-header';
        break;
    case 'Harry Potter':
        movie_header = 'movie3-header';
        break;
    case 'Wonder Woman':
        movie_header = 'movie4-header';
        break;
    case 'IT: Chapter 2':
        movie_header = 'movie5-header';
        break;
    case 'Aladdin':
        movie_header = 'movie6-header';
        break;
    case 'Avengers: Endgame':
        movie_header = 'movie7-header';
        break;
    case 'Joker':
        movie_header = 'movie8-header';
        break;
    case 'Spiderman: Far From Home':
        movie_header = 'movie9-header';
        break;
    case 'Zombieland: Double Tap':
        movie_header = 'movie10-header';
        break;
}

$('#default-header').attr('id', movie_header);
$('#header-title').html(movies[item_index]['title']);
$('#starting').html(movies[item_index]['synopsis']);

$('#cinema-number').html(movies[item_index]['cinema'].replace('Cinema ', ''));
$('#showing-date').html(movies[item_index]['date']);
$('#showing-time').html(movies[item_index]['show_time']);
$('#tab-title').html(movies[item_index]['title']);