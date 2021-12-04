function openTab(tabName) {
    var content;

    content = document.getElementsByClassName("content-container");

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block"
}

function closeView(tabeName) {

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
        console.log(rooms);
        let roomsParsed = JSON.parse(rooms);

        console.log(roomsParsed);

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

function showBookedRooms() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showBookedRooms", true);
    xhttp.send();

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

function showBooking() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewRooms/showBooking", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        console.log(rooms);
        let roomsParsed = JSON.parse(rooms);

        console.log(roomsParsed);

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

function showCateringMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewCatering/showCateringMenu", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        console.log(rooms);
        let roomsParsed = JSON.parse(rooms);

        console.log(roomsParsed);

        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Catering Name' + '</td>';
        t += '<th>' + 'Price' + '</td>';
        t += '<th>' + 'Type' + '</td>';
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
        document.getElementById('catering-table').innerHTML = t;

    };
}

function showCateringBill() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewCatering/showCateringBill", true);
    xhttp.send();

    xhttp.onload = function () {
        let rooms = {};
        rooms = this.responseText;
        console.log(rooms);
        let roomsParsed = JSON.parse(rooms);

        console.log(roomsParsed);

        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Bill Id' + '</td>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Food Name' + '</td>';
        t += '<th>' + 'Price' + '</td>';
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
        document.getElementById('catering-table').innerHTML = t;

    };
}