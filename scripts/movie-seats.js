//Seats Active
var total_price = 0;
var total_seats = 0;
var seats = [];

$(document).on('click', '.single-seat', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        seats.push($(this).text().trim());
        total_price += 200;
        total_seats++;
    } else {
        seats.splice(seats.indexOf($(this).text().trim()), 1);
        total_price -= 200;
        total_seats--;
    }

    $(".ticket_total").html(total_seats);
    $(".ticket_price").html("PHP " + total_price + ".00");
});

var reservations = [];
var temp = [];
var local = [];
var index = null;

$(document).on('click', '#reserve-button-two', function () {
    var thisUUID = uuidv4();
    //code for storing reservation in current reservation
    if(localStorage.getItem('reservations') === null) {
        localStorage.setItem('reservations', JSON.stringify(reservations));
    } 

    reservations = JSON.parse(localStorage.getItem('reservations'));
    var transaction = {
        title: selected_movie,
        cinema: selected_cinema,
        date: selected_date,
        time: '8:00 PM',
        seats: $(".ticket_total").text(),
        uuid: thisUUID
    }
    reservations.push(transaction);
    localStorage.removeItem('reservations')
    localStorage.setItem('reservations', JSON.stringify(reservations));

    //code for seats
    if (localStorage.getItem('reserved-seats') === null) {
        localStorage.setItem('reserved-seats', JSON.stringify(local));
    }
    local = JSON.parse(localStorage.getItem('reserved-seats'));
    selected_movie = localStorage.getItem('selected-movie');
    selected_cinema = localStorage.getItem('selected-cinema');
    selected_date = localStorage.getItem('selected-date');
    
    $(".single-seat").each(function () {
        if ($(this).hasClass('active')) {
            var duplicate = temp.indexOf($(this).text().trim());
            if(duplicate !== -1) {
                temp.splice(duplicate, 0);
            } else {
                temp.push($(this).text().trim());
            }
        }
    });

    for (ctr in local) {
        if (local[ctr]['title'] === selected_movie &&
            local[ctr]['cinema'] === selected_cinema &&
            local[ctr]['date'] === selected_date) {
            index = ctr;
            
            for (i in local[index]['seat']) {
                var duplicateTwo = temp.indexOf(local[index]['seat'][i]);
                if(duplicateTwo !== -1) {
                    temp.splice(duplicateTwo, 1);
                }
            }
        }
    }

    var items = {
        title: selected_movie,
        cinema: selected_cinema,
        date: selected_date,
        seat: temp,
        uuid: thisUUID
    }

    if (index === null) {
        local.push(items);
    } else {
        local.push(items);
        // local[index]['seat'] = temp;
    }
    localStorage.removeItem('reserved-seats')
    localStorage.setItem('reserved-seats', JSON.stringify(local));
    document.location.reload();
});

//generate uuid function
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

//populate reservation table
function reservationTable(stored_reservations, index) {
    return `
        <tr>
            <th scope="row">${index}</th>
            <td>${stored_reservations.title}</td>
            <td>${stored_reservations.cinema}</td>
            <td>${stored_reservations.date} ${stored_reservations.time}</td>
            <td>${stored_reservations.seats}</td>
            <td><button type="button" class="btn btn-sm" id="cancel-reservation" value=${index}>Cancel</button></td>
        </tr>
    `
}

var transactions = JSON.parse(localStorage.getItem('reservations'));
var stored_reservations = [];
function populateReservation() {
    for (var key in transactions) {
        if(transactions.hasOwnProperty(key)) {
            stored_reservations[key] = transactions[key];
        }
    }
    document.getElementById('reservation-body').innerHTML = `
        ${stored_reservations.map(reservationTable).join('')}
    `
}

populateReservation();

var seating_arrangement = JSON.parse(localStorage.getItem('reserved-seats'));
//cancel reservation
$(document).on('click', '#cancel-reservation', function() {
    var indexToBeDeleted = $(this).prop("value");
    for (var key in seating_arrangement) {
        if(seating_arrangement.hasOwnProperty(key)) {
            if(transactions[indexToBeDeleted].uuid === seating_arrangement[key].uuid) {
                var seatToBeDeleted = key;
                seating_arrangement.splice(seatToBeDeleted, 1);
                localStorage.removeItem('reserved-seats');
                localStorage.setItem('reserved-seats', JSON.stringify(seating_arrangement));
            }
        }
    }
    transactions.splice(indexToBeDeleted, 1);
    localStorage.removeItem('reservations')
    localStorage.setItem('reservations', JSON.stringify(transactions));
    document.location.reload();
});

$('#seats-button').click(function () {
    $('#seats').html(`
    <div class="container seats">
    <div class="row screen">
        <div class="col d-flex justify-content-center screen-col rounded">
            Screen
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            A8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            B8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            C8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            D8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            E8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            F8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            G8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            H8
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I1
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I2
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I3
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I4
        </div>
        <div class="col d-flex justify-content-center rounded-circle dummy-seat"></div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I5
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I6
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I7
        </div>
        <div class="col d-flex justify-content-center rounded-circle single-seat">
            I8
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col legends">
            <div class="ro">
                <div class="col legend-title">
                    Legend
                </div>
            </div>
            <div class="row">
                <div class="col-3 rounded-circle legends-seat-available"></div>
                <div class="col-3 d-flex justify-content-center legends-seat-text">=</div>
                <div class="col d-flex justify-content-center legends-seat-text">Available</div>
            </div>
            <div class="row">
                <div class="col-3 rounded-circle legends-seat-taken"></div>
                <div class="col-3 d-flex justify-content-center legends-seat-text">=</div>
                <div class="col d-flex justify-content-center legends-seat-text">Not Available</div>
            </div>
        </div>
        <div class="col summary">
            <div class="row">
                <div class="col summary-title">
                    Reservation Summary
                </div>
            </div>
            <div class="row summary-total">
                <div class="col-9">
                    Total Number of Seats for Reservation: 
                </div>
                <div class="col-3 ticket_total">
                    0
                </div>
            </div>
            <div class="row summary-total">
                <div class="col-8">
                    Price: 
                </div>
                <div class="col-4 ticket_price">
                    PHP 0.00
                </div>
            </div>
            <div class="row d-flex">
                <a href="./movie.html#reservation-table" class="col-5 btn btn-sm btn-dark reserve-button" id="reserve-button-two">
                    Reserve Tickets
                </a>
            </div>
        </div>
    </div>
</div>`);
    var active_seats = JSON.parse(localStorage.getItem('reserved-seats'));
    var index = null;
    var show_active_seats = [];

    for (ctr in active_seats) {
        if (active_seats[ctr]['title'] === selected_movie &&
            active_seats[ctr]['cinema'] === selected_cinema &&
            active_seats[ctr]['date'] === selected_date) {
            index = ctr;

            for(j in active_seats[index]['seat']) {
                show_active_seats.push(active_seats[index]['seat'][j]);
            }
        }
    }

    // var temp = active_seats[index]['seat']
    $(".single-seat").each(function () {
        for (ctr in show_active_seats) {
            if (show_active_seats[ctr] === $(this).text().trim()) {
                $(this).css("pointer-events", "none");
                $(this).toggleClass('active');
            }
        }
    });
});