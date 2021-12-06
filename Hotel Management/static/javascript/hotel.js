function openTab(tabName) {
    var content;

    content = document.getElementsByClassName("content-container");

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block"
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
    console.log(roomFilters);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/viewRooms/showFilteredRooms", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
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

function addBooking() {

    var bookGuest = document.getElementById("book-guest-id").value;
    var bookRoom = document.getElementById("book-room-number").value;
    var bookDate = document.getElementById("book-date").value;
    var bookDays = document.getElementById("book-days").value;

    var bookingInfo = { bookGuest, bookRoom, bookDate, bookDays };
    console.log(bookingInfo);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/viewRooms/addBooking", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(bookingInfo));
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

function createCateringBill() {

    var billId = document.getElementById("catering-bill-id").value;
    var guestNumber = document.getElementById("catering-guest-number").value;
    var foodName = document.getElementById("catering-food").value;
    var foodPrice = document.getElementById("catering-price").value;

    var createBill = { billId, guestNumber, foodName, foodPrice };

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/viewCatering/createBill", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(createBill));

    xhttp.onload = function () {
        let bill = {};
        bill = this.responseText;
        let billParsed = JSON.parse(bill);


        let t = '<tbody>'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Bill Id' + '</td>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Food Name' + '</td>';
        t += '<th>' + 'Price' + '</td>';
        t += '</tr>';
        for (i in billParsed) {
            t += '<tr>';
            for (j in billParsed[i]) {
                t += '<td>' + billParsed[i][j] + '</td>';
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

function addGuest() {
    var staffName = document.getElementById("name-search").value;
    var staffJob = document.getElementById("filter-staff-job").value;

    var guest = { gNum, gName, gPhone, gEmail, gCount };
    console.log(staffFilters);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/viewGuests/addGuest", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(guest));

    xhttp.onload = function () {

    };
}

function showAllStaff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewStaff/showAllStaff", true);
    xhttp.send();

    xhttp.onload = function () {
        let staff = {};
        staff = this.responseText;
        let staffParsed = JSON.parse(staff);


        let t = '<tbody class="table">'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Staff ID' + '</td>';
        t += '<th>' + 'Staff Name' + '</td>';
        t += '<th>' + 'Staff Job Title' + '</td>';
        t += '</tr>';
        for (i in staffParsed) {
            t += '<tr>';
            for (j in staffParsed[i]) {
                t += '<td>' + staffParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('staff-table').innerHTML = t;

    };
}

function showStaffFeedback() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewStaff/showStaffFeedback", true);
    xhttp.send();

    xhttp.onload = function () {
        let staff = {};
        staff = this.responseText;
        let staffParsed = JSON.parse(staff);


        let t = '<tbody class="table">'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Guest Number' + '</td>';
        t += '<th>' + 'Staff Id' + '</td>';
        t += '<th>' + 'Rating' + '</td>';
        t += '<th>' + 'Guest Comment' + '</td>';
        t += '</tr>';
        for (i in staffParsed) {
            t += '<tr>';
            for (j in staffParsed[i]) {
                t += '<td>' + staffParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('staff-table').innerHTML = t;

    };
}

function submitStaffFilters() {
    var staffName = document.getElementById("name-search").value;
    var staffJob = document.getElementById("filter-staff-job").value;

    var staffFilters = { staffName, staffJob };
    console.log(staffFilters);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/viewRooms/showFilteredStaff", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(staffFilters));

    xhttp.onload = function () {
        let staff = {};
        staff = this.responseText;
        let staffParsed = JSON.parse(staff);


        let t = '<tbody class="table">'
        t += '<table class="table table-bordered table-striped">'
        t += '<tr>';
        t += '<th>' + 'Staff ID' + '</td>';
        t += '<th>' + 'Staff Name' + '</td>';
        t += '<th>' + 'Staff Job Title' + '</td>';
        t += '</tr>';
        for (i in staffParsed) {
            t += '<tr>';
            for (j in staffParsed[i]) {
                t += '<td>' + staffParsed[i][j] + '</td>';
            }
            t += '</tr>';
        }

        t += '</table>'
        t += '</tbody>';
        document.getElementById('staff-table').innerHTML = t;

    };

}

function showCateringStats() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/viewCatering/showStats", true);
    xhttp.send();

    xhttp.onload = function () {
        let staff = {};
        staff = this.responseText;
        let staffParsed = JSON.parse(staff);

        console.log(staffParsed);

    };
}