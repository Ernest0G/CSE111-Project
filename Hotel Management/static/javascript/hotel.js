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

        let t = '<tbody>'
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