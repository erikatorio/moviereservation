var id = 0;
var reservations = [];

$(document).on('click', '#button-text', function() {
    if(localStorage.getItem('reservations') === null) {
        localStorage.setItem('reservations', JSON.stringify(reservations));
        console.log('set');
    } 
    reservations = JSON.parse(localStorage.getItem('reservations'));
    console.log(reservations);
    var items = 
        {
            title: $('#choose-movie').val(),
            cinema: $('#choose-cinema').val(),
            date: $('#datepicker').val(),
            time: '8:00 PM',
            seats: $(".ticket_total").text()
        }
        reservations.push(items);
        localStorage.removeItem('reservations')
        localStorage.setItem('reservations', JSON.stringify(reservations))
});

function reservationTable(stored_reservations) {
    return `
        <tr>
            <th scope="row">${stored_reservations.key}</th>
            <td>${stored_reservations.title}</td>
            <td>${stored_reservations.cinema}</td>
            <td>${stored_reservations.date} ${stored_reservations.time}</td>
            <td>${stored_reservations.seats}</td>
            <td><button type="button" class="btn btn-sm" id="button-text" value="21945">Cancel</button></td>
        </tr>
    `
}

var transactions = JSON.parse(localStorage.getItem('reservations'));
console.log(transactions);
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