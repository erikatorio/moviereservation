const movies = [
    {
        id: 1,
        title: 'Captain Marvel',
        show_time: '8:00 PM',
        synopsis: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls',
        poster: '.\\assets\\poster-one.jpg',
        link: ".\\movie-one.html",
        cinema: 'Cinema 1',
        date: 'September 4, 2019'
    },
    {
        id: 2,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        link: '.\\movie-two.html',
        cinema: 'Cinema 2',
        date: 'September 4, 2019'
    },
    {
        id: 3,
        title: 'Harry Potter',
        show_time: '8:00 PM',
        synopsis: 'The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match.',
        poster: '.\\assets\\poster-three.jpg',
        link: '.\\movie-three.html',
        cinema: 'Cinema 3',
        date: 'September 4, 2019'
    },
    {
        id: 4,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        link: '.\\movie-four.html',
        cinema: 'Cinema 4',
        date: 'September 4, 2019'
    },
    {
        id: 5,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        link: '.\\movie-six.html',
        cinema: 'Cinema 1',
        date: 'September 5, 2019'
    },
    {
        id: 6,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-five.jpg',
        link: '.\\movie-five.html',
        cinema: 'Cinema 2',
        date: 'September 5, 2019'
    },
    {
        id: 7,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        link: '.\\movie-four.html',
        cinema: 'Cinema 3',
        date: 'September 5, 2019'
    },
    {
        id: 8,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        link: '.\\movie-two.html',
        cinema: 'Cinema 4',
        date: 'September 5, 2019'
    },
    {
        id: 9,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        link: '.\\movie-six.html',
        cinema: 'Cinema 1',
        date: 'September 6, 2019'
    },
    {
        id: 10,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-five.jpg',
        link: '.\\movie-five.html',
        cinema: 'Cinema 2',
        date: 'September 6, 2019'
    },
    {
        id: 11,
        title: 'Captain Marvel',
        show_time: '8:00 PM',
        synopsis: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls',
        poster: '.\\assets\\poster-one.jpg',
        link: ".\\movie-one.html",
        cinema: 'Cinema 3',
        date: 'September 6, 2019'
    },
    {
        id: 12,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        link: '.\\movie-two.html',
        cinema: 'Cinema 4',
        date: 'September 6, 2019'
    },

]

// store movies in local storage
localStorage.setItem('movies', JSON.stringify(movies));
var date = "";

function movieTemplate(now_showing) {
    return `
    <div class="col-md cinema-card">
        <div class="d-flex justify-content-center">
            <h3 id="title-label">${now_showing.cinema}</h3>
        </div>
        <div class="card card" id="movie-card">
            <img class="card-img-top" src="${now_showing.poster}" alt="" id="movie-poster">
            <div class="card-body">
                <h5 class="card-title" id="movie-title">${now_showing.title}</h5>
                <p class="time">
                    ${now_showing.show_time}
                </p>
                <div class="d-flex justify-content-center">
                    <a href="${now_showing.link}" class="btn btn-sm" id="button-text">Reserve Tickets</a>
                </div>
            </div>
        </div>
    </div>
    `
}

//object for storing current showing objects
var now_showing = [];

//append movies in cinema selection page
function populate() {
    console.log(date);
    if(date !== "") {
        now_showing = [];
        for (var key in movies) {
            if (movies.hasOwnProperty(key)) {
                if(movies[key].date === date) {
                    now_showing[key] = movies[key];
                }
            }
        }
        document.getElementById('now-showing-container').innerHTML = `
            ${
                now_showing.map(movieTemplate).join('')
            }
        `
    } else {
        for (var key in movies) {
            if (movies.hasOwnProperty(key)) {
                if(movies[key].date === 'September 4, 2019') {
                    now_showing[key] = movies[key];
                }
            }
        }

        document.getElementById('now-showing-container').innerHTML = `
            ${
                now_showing.map(movieTemplate).join('')
            }
        `
    }
}

//set date
function setDate(dateChange) {
    date = dateChange;
    populate();
}

populate();

