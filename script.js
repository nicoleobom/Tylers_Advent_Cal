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
            id.childNodes[1].childNodes[1].innerHTML = "<i class='fas fa-lock'></i>";
            id.childNodes[1].childNodes[1].style.background = "lightgrey";
            id.childNodes[1].childNodes[1].style.color = "darkgrey"
            id.style.pointerEvents = "none";
        }
    }
}

lockedDate();

function newQuote() {
    var randomNum = Math.floor(Math.random() * 12) + 1;
    var quoteSpot = document.getElementById('quotes');

    fetch('../quotes.json')
        .then(res => res.json())
        .then(data => quoteSpot.innerText = data[randomNum].quote)
}

newQuote();