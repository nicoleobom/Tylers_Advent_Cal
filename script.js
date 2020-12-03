function lockedDate() {
    var date = new Date();
    var day = date.getDate();
    console.log(day);
    
    var cards = document.querySelectorAll('#all-cards .nums').length;

    console.log(cards);

    for (var i=0; i < 31; i++) {
        var id = document.getElementById(i+1)
        if (id.id <= day) {
            // unlock
        } else {
            id.style.pointerEvents = "none";
        }
    }
}

lockedDate();