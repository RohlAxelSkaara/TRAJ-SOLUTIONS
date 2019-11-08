//Creating an array outside the function so that both functions will have access to it. Before I tried creating it inside one of the functions
//but was running into issues because of scope.
var bookingList = [];
var bookingDateList = [];

//createBooking() function that is run when the button called "book" is clicked.
function createBooking() {
    //Taking the user input from the two inputs in the form and storing them in two different variables.
    //Using the .value so we get the value of the input and not the input elements them selves.
    var userName = document.getElementById("clientName").value;
    var userEmail = document.getElementById("clientEmail").value;

    //Pushing both these variables into the bookingList array.
    bookingList.push(userName);
    bookingList.push(userEmail);

    var bookingDate = new Date();
    var dd = String(bookingDate.getDate()).padStart(2, '0');
    var mm = String(bookingDate.getMonth() + 1).padStart(2, '0');
    var yyyy = bookingDate.getFullYear();

    bookingDate = dd + '/' + mm + '/' + yyyy;

    bookingDateList.push(bookingDate);

    //window.localStorage.setItem("clientName", userName);
    //window.localStorage.setItem("clientEmail", userEmail);
    //document.getElementById("insert").innerHTML = localStorage.getItem("clientName");
    //bookingList.push({clientName: userName});
    //bookingList.push({clientEmail: userEmail});
    //var booking1 = new Booking(userName, userEmail);
    //var newBooking = "Name: " + userName + "and Email: " + userEmail;
}

//Function that is run when the user clicks the "Show my booking" button.
function showBookingDetails() {
    //If statement that checks if the Array exists and if it is empty. We do this because we dont want to try to display the
    //data of the array if there is nothing in it. Then we would like to display an error message telling the user to create
    //a booking before checking the details.
    if (Array.isArray(bookingList) && bookingList.length) {
        //Creating two new variable that contains the first and second element of the array seperately.
        var arrayName = bookingList[0];
        var arrayEmail = bookingList[1];
        var arrayDate = bookingDateList[0];
        //var bookingListString = bookingList.toString();
        document.getElementById("bookingDetailsP").innerHTML = "Name: " + arrayName + " E-mail: " + arrayEmail + " Booking Time: " + arrayDate + ".";
        //alert("Client name: " + arrayName + " and Client E-mail: " + arrayEmail);
    } else {
        document.getElementById("pleaseCreateBookingP").innerHTML = "Please create a booking first!"
    }
}