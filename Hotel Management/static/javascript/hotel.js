function openTab(tabName) {
    var content;

    content = document.getElementsByClassName("content-container");

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block"
}


function roomOptions(optionChosen) {
    if (optionChosen == "openRooms") {

    }
}

function showAllRooms() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showAllRooms", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        let roomsParsed = JSON.parse(rooms);


        let t = '<tbody class="table">'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Room Number' + '</td>';
        t += '<th>' + 'Bed Count' + '</td>';
        t += '<th>' + 'Room Capacity' + '</td>';
        t += '<th>' + 'Room Type' + '</td>';
        t += '<th>' + 'Room Price (per night)' + '</td>';
        t += '</tr>';
        for (i in roomsParsed) {
            t += '<tr>';
            for (j in roomsParsed[i]) {
                t += '<td>' + roomsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('room-table').innerHTML = t;

    };
}

function showOpenRooms() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showOpenRooms", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        let roomsParsed = JSON.parse(rooms);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Room Number' + '</td>';
        t += '<th>' + 'Bed Count' + '</td>';
        t += '<th>' + 'Room Capacity' + '</td>';
        t += '<th>' + 'Room Type' + '</td>';
        t += '<th>' + 'Room Price (per night)' + '</td>';
        t += '</tr>';
        for (i in roomsParsed) {
            t += '<tr>';
            for (j in roomsParsed[i]) {
                t += '<td>' + roomsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('room-table').innerHTML = t;

    };
}

function showBookedRooms() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showBookedRooms", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        let roomsParsed = JSON.parse(rooms);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Room Number' + '</td>';
        t += '<th>' + 'Bed Count' + '</td>';
        t += '<th>' + 'Room Capacity' + '</td>';
        t += '<th>' + 'Room Type' + '</td>';
        t += '<th>' + 'Room Price (per night)' + '</td>';
        t += '</tr>';
        for (i in roomsParsed) {
            t += '<tr>';
            for (j in roomsParsed[i]) {
                t += '<td>' + roomsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('room-table').innerHTML = t;

    };
}

function showBooking() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showBooking", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        let roomsParsed = JSON.parse(rooms);

        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Room Number' + '</td>';
        t += '<th>' + 'Date Booked' + '</td>';
        t += '<th>' + 'Days Booked' + '</td>';
        t += '</tr>';
        for (i in roomsParsed) {
            t += '<tr>';
            for (j in roomsParsed[i]) {
                t += '<td>' + roomsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('room-table').innerHTML = t;

    };
}

function submitRoomFilters() {
    var bedCount = document.getElementById("filter-bed-count").value;
    var roomCap = document.getElementById("filter-room-cap").value;
    var roomType = document.getElementById("filter-room-type").value;

    var roomFilters = { bedCount, roomCap, roomType };
    var xhttp = new XMLHttpRequest();
    url = "http://localhost:5000/viewRooms/showFilteredRooms/" + roomFilters;
    xhttp.open("GET", url, true);
    xhttp.send(JSON.stringify(roomFilters));

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        console.log(rooms);
        let roomsParsed = JSON.parse(rooms);
        console.log(roomsParsed);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Room Number' + '</td>';
        t += '<th>' + 'Bed Count' + '</td>';
        t += '<th>' + 'Room Capacity' + '</td>';
        t += '<th>' + 'Room Type' + '</td>';
        t += '<th>' + 'Room Price (per night)' + '</td>';
        t += '</tr>';
        for (i in roomsParsed) {
            t += '<tr>';
            for (j in roomsParsed[i]) {
                t += '<td>' + roomsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('room-table').innerHTML = t;

    };

}

function showCateringMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewCatering/showCateringMenu", true);
    xhttp.send();

    xhttp.onload = function () {
        let catering = {};
        catering = this.responseText;
        let cateringParsed = JSON.parse(catering);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Catering Name' + '</td>';
        t += '<th>' + 'Price' + '</td>';
        t += '<th>' + 'Type' + '</td>';
        t += '</tr>';
        for (i in cateringParsed) {
            t += '<tr>';
            for (j in cateringParsed[i]) {
                t += '<td>' + cateringParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('catering-table').innerHTML = t;

    };
}
function submitCateringFilters() {
    var foodType = document.getElementById("filter-food-type").value;
    var foodPrice = document.getElementById("filter-food-price").value;
    var mealType = document.getElementById("filter-meal-type").value;

    var cateringFilters = { foodType, foodPrice, mealType };
    var xhttp = new XMLHttpRequest();
    url = "http://localhost:5000/viewCatering/showFilteredCatering/" + cateringFilters;
    xhttp.open("GET", url, true);
    xhttp.send(JSON.stringify(cateringFilters));

    xhttp.onload = function () {
        let catering = {};
        catering = this.responseText;
        console.log(catering);
        let cateringParsed = JSON.parse(catering);
        console.log(cateringParsed);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Food Type' + '</td>';
        t += '<th>' + 'Food Price' + '</td>';
        t += '<th>' + 'Meal Type' + '</td>';
        t += '</tr>';
        for (i in cateringParsed) {
            t += '<tr>';
            for (j in cateringParsed[i]) {
                t += '<td>' + cateringParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('catering-table').innerHTML = t;

    };

}

function showCateringBill() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewCatering/showCateringBill", true);
    xhttp.send();

    xhttp.onload = function () {
        let catering = {};
        catering = this.responseText;
        let cateringParsed = JSON.parse(catering);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Bill Id' + '</td>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Food Name' + '</td>';
        t += '<th>' + 'Price' + '</td>';
        t += '</tr>';
        for (i in cateringParsed) {
            t += '<tr>';
            for (j in cateringParsed[i]) {
                t += '<td>' + cateringParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('catering-table').innerHTML = t;

    };
}

function showGuests() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewGuests/showGuests", true);
    xhttp.send();

    xhttp.onload = function () {
        let guests = {};
        guests = this.responseText;
        let guestsParsed = JSON.parse(guests);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Name' + '</td>';
        t += '<th>' + 'Phone Number' + '</td>';
        t += '<th>' + 'Email' + '</td>';
        t += '<th>' + 'Guest Count' + '</td>';
        t += '</tr>';
        for (i in guestsParsed) {
            t += '<tr>';
            for (j in guestsParsed[i]) {
                t += '<td>' + guestsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('guests-table').innerHTML = t;

    };
}
function submitGuestFilters() {
    var guestNumber = document.getElementById("filter-guest-number").value;
    var guestName = document.getElementById("filter-guest-name").value;
    var guestCount = document.getElementById("filter-guest-count").value;

    var guestsFilters = { guestNumber, guestName,guestCount };
    var xhttp = new XMLHttpRequest();
    url = "http://localhost:5000/viewGuests/showFilteredGuests/" + guestsFilters;
    xhttp.open("GET", url, true);
    xhttp.send(JSON.stringify(guestsFilters));

    xhttp.onload = function () {
        let guests = {};
        guests = this.responseText;
        console.log(guests);
        let guestsParsed = JSON.parse(guests);
        console.log(guestsParsed);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Guest ID' + '</td>';
        t += '<th>' + 'Guest Name' + '</td>';
        t += '<th>' + 'Guest Count' + '</td>';
        t += '</tr>';
        for (i in guestsParsed) {
            t += '<tr>';
            for (j in guestsParsed[i]) {
                t += '<td>' + guestsParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('guests-table').innerHTML = t;

    };

}
function addGuest(guestName) {
    var xhttp = new XMLHttpRequest();
    url = "http://localhost:5000/viewGuests/showGuests" + "/" + guestName
    xhttp.open("POST", url, true);
    xhttp.send();

    xhttp.onload = function () {

    };
}