function lockedDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;

    console.log(month);

    var text = document.getElementsByClassName('txt');

    for (var i=0; i < 31; i++) {
        var id = document.getElementById(i+1)
        if (id.id <= day) {
            id.text = id.id
        } else {
            
            id.style.pointerEvents = "none";
        }
    }
}

lockedDate();

function newQuote() {
    
}