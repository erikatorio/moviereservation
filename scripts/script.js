const movies = [
    {
        id: 1,
        title: 'Captain Marvel',
        show_time: '8:00 PM',
        synopsis: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls',
        poster: '.\\assets\\poster-one.jpg',
        cinema: 'Cinema 1',
        date: 'September 4, 2019',
    },
    {
        id: 2,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        cinema: 'Cinema 2',
        date: 'September 4, 2019'
    },
    {
        id: 3,
        title: 'Harry Potter',
        show_time: '8:00 PM',
        synopsis: 'The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match.',
        poster: '.\\assets\\poster-three.jpg',
        cinema: 'Cinema 3',
        date: 'September 4, 2019'
    },
    {
        id: 4,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 4',
        date: 'September 4, 2019'
    },
    {
        id: 5,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 1',
        date: 'September 5, 2019'
    },
    {
        id: 6,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 2',
        date: 'September 5, 2019'
    },
    {
        id: 7,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 3',
        date: 'September 5, 2019'
    },
    {
        id: 8,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        cinema: 'Cinema 4',
        date: 'September 5, 2019'
    },
    {
        id: 9,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 1',
        date: 'September 6, 2019'
    },
    {
        id: 10,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 2',
        date: 'September 6, 2019'
    },
    {
        id: 11,
        title: 'Captain Marvel',
        show_time: '8:00 PM',
        synopsis: 'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls',
        poster: '.\\assets\\poster-one.jpg',
        cinema: 'Cinema 3',
        date: 'September 6, 2019'
    },
    {
        id: 12,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        cinema: 'Cinema 4',
        date: 'September 6, 2019'
    },
    {
        id: 13,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 1',
        date: 'September 9, 2019'
    },
    {
        id: 14,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        cinema: 'Cinema 2',
        date: 'September 9, 2019'
    },
    {
        id: 15,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 3',
        date: 'September 9, 2019'
    },
    {
        id: 16,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 4',
        date: 'September 9, 2019'
    },
    {
        id: 17,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 1',
        date: 'September 10, 2019'
    },
    {
        id: 18,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 2',
        date: 'September 10, 2019'
    },
    {
        id: 19,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 3',
        date: 'September 10, 2019'
    },
    {
        id: 20,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 4',
        date: 'September 10, 2019'
    },
    {
        id: 21,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 1',
        date: 'September 11, 2019'
    },
    {
        id: 22,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 2',
        date: 'September 11, 2019'
    },
    {
        id: 23,
        title: 'Joker',
        show_time: '8:00 PM',
        synopsis: 'Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker.',
        poster: '.\\assets\\poster-eight.jpg',
        cinema: 'Cinema 3',
        date: 'September 11, 2019'
    },
    {
        id: 24,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Defeated by members of the Losers\' Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 4',
        date: 'September 11, 2019'
    },
    {
        id: 25,
        title: 'Joker',
        show_time: '8:00 PM',
        synopsis: 'Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker.',
        poster: '.\\assets\\poster-eight.jpg',
        cinema: 'Cinema 1',
        date: 'September 14, 2019'
    },
    {
        id: 26,
        title: 'Joker',
        show_time: '8:00 PM',
        synopsis: 'Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker.',
        poster: '.\\assets\\poster-eight.jpg',
        cinema: 'Cinema 2',
        date: 'September 14, 2019'
    },
    {
        id: 27,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 3',
        date: 'September 14, 2019'
    },
    {
        id: 28,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 4',
        date: 'September 14, 2019'
    },
    {
        id: 29,
        title: 'Spiderman: Far From Home',
        show_time: '8:00 PM',
        synopsis: '',
        poster: '.\\assets\\poster-nine.jpg',
        cinema: 'Cinema 1',
        date: 'September 18, 2019'
    },
    {
        id: 30,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 2',
        date: 'September 18, 2019'
    },
    {
        id: 31,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 3',
        date: 'September 18, 2019'
    },
    {
        id: 32,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 4',
        date: 'September 18, 2019'
    },
    {
        id: 33,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 1',
        date: 'September 22, 2019'
    },
    {
        id: 34,
        title: 'Zombieland: Double Tap',
        show_time: '8:00 PM',
        synopsis: 'Zombie slayers Tallahassee, Columbus, Wichita and Little Rock square off against the newly evolved undead.',
        poster: '.\\assets\\poster-ten.jpg',
        cinema: 'Cinema 2',
        date: 'September 22, 2019'
    },
    {
        id: 35,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 3',
        date: 'September 22, 2019'
    },
    {
        id: 36,
        title: 'Avengers: Endgame',
        show_time: '8:00 PM',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
        poster: '.\\assets\\poster-seven.jpg',
        cinema: 'Cinema 4',
        date: 'September 22, 2019'
    },
    {
        id: 37,
        title: 'Aladdin',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-six.jpg',
        cinema: 'Cinema 1',
        date: 'September 24, 2019'
    },
    {
        id: 38,
        title: 'IT: Chapter 2',
        show_time: '8:00 PM',
        synopsis: 'Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine\'s kingdom. ',
        poster: '.\\assets\\poster-five.jpg',
        cinema: 'Cinema 2',
        date: 'September 24, 2019'
    },
    {
        id: 39,
        title: 'Wonder Woman',
        show_time: '8:00 PM',
        synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
        poster: '.\\assets\\poster-four.jpg',
        cinema: 'Cinema 3',
        date: 'September 24, 2019'
    },
    {
        id: 40,
        title: 'Star Wars',
        show_time: '8:00 PM',
        synopsis: 'The surviving Resistance faces the First Order once more as Rey Finn and Poe Dameron\'s journey continues. With the power and knowledge of generations behind them, the final battle commences.',
        poster: '.\\assets\\poster-two.jpg',
        cinema: 'Cinema 4',
        date: 'September 24, 2019'
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
                    <a href="movie.html" class="btn btn-sm" id="button-text">Reserve Tickets</a>
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
        now_showing = [];
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

