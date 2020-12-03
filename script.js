function lockedDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;

    console.log(month);

    var text = document.getElementsByClassName('txt');

    for (var i=0; i < 31; i++) {
        var id = document.getElementById(i+1)
        if (id.id <= day) {
            id.childNodes[1].childNodes[1].innerText = id.id
        } else {
            id.childNodes[1].childNodes[1].innerHTML = "<i class='fas fa-lock'></i>"
            id.style.pointerEvents = "none";
        }
    }
}

lockedDate();

function newQuote() {
    var myQuotes = JSON.parse(quote)
    var randomNum = Math.floor(Math.random() * 12) + 1;

}