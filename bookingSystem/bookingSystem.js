var userName = document.getElementById("clientName").value;
var userEmail = document.getElementById("clientEmail").value;

var newBooking = "Name: " + userName + "and Email: " + userEmail;

function createBooking() {
    alert(newBooking);


}

function showBookingDetails() {
    if (bookingList != null) {
        var para = document.createElement("p");
        var node = document.createTextNode("Name: " + bookingList + " and E-mail: " + bookingList);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
    } else {
        alert("Something went wrong! ERROR: 404")
    }
}