var bookingList = [];

function createBooking() {
    var userName = document.getElementById("clientName").value;
    var userEmail = document.getElementById("clientEmail").value;

    window.localStorage.setItem("clientName", userName);
    window.localStorage.setItem("clientEmail", userEmail);

    //document.getElementById("insert").innerHTML = localStorage.getItem("clientName");


    bookingList.push(userName);
    bookingList.push(userEmail);
    //bookingList.push({clientName: userName});
    //bookingList.push({clientEmail: userEmail});


    //var booking1 = new Booking(userName, userEmail);


    //var newBooking = "Name: " + userName + "and Email: " + userEmail;

}

function showBookingDetails() {
    if (Array.isArray(bookingList) && bookingList.length) {
        var arrayName = bookingList[0];
        var arrayEmail = bookingList[1];
        //var bookingListString = bookingList.toString();
        alert("Client name: " + arrayName + " and Client E-mail: " + arrayEmail);
    } else {
        alert("Please create a booking first!")
    }
}