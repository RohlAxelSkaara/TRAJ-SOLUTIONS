function createBooking() {
    var userName = document.getElementById("clientName").value;
    var userEmail = document.getElementById("clientEmail").value;
    var bookingSuccess = 1;

    if (bookingSuccess != null) {
        var para = document.createElement("p");
        var node = document.createTextNode("Name: " + userName + " and E-mail: " + userEmail);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
    } else {
        alert("Something went wrong! ERROR: 404")
    }





}