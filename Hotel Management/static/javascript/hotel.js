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