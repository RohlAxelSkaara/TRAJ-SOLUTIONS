//This function will gather all information given by the user, check if the user given inputs are true or false, then alert an email code
const booking = () => {

    // variables for contact information which extracts the value input into the HTML booking form and feeds it to the variables.
    let firstName   = document.getElementById("input0").value;
    let lastName    = document.getElementById("input1").value;
    let address     = document.getElementById("input2").value;
    let postNumber  = document.getElementById("input3").value;
    let city        = document.getElementById("input4").value;
    let phone       = document.getElementById("input5").value;
    let email       = document.getElementById("input6").value;
    let fullName    = firstName + " " + lastName;
    //collects all time and date information into one variable
    let bookingTime = document.getElementById("input7").value +"."+
                      document.getElementById("input8").value +"."+
                      document.getElementById("input9").value + " at "+
                      document.getElementById("input10").value;

    // Collective validation of date, if one or more inputs are not selected bookingTime will = "", and in turn execute its alert.
    if( document.getElementById("input7").value  == "" ||
        document.getElementById("input8").value  == "" ||
        document.getElementById("input9").value  == "" ||
        document.getElementById("input10").value == ""){
        bookingTime = "";
    };

    // validEmail and emailIsValid will check if the value given to email contains the right structure and symbols
    // XXX@XXX.XXX; else let email will be given the value of false and trigger its alert
    //source for the RegEx code: https://www.w3resource.com/javascript/form/email-validation.php
    let validEmail   = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailIsValid = validEmail.test(email);{
        if (emailIsValid == false){
            email = false;
        }
    };


    // let validPhone and let phoneIsValid test a RegEx for danish numbers, if the number is != danish, let phone will execute its alert
    // source for danish phone number RegEx https://www.etl-tools.com/regular-expressions/is-danish-phone-number.html
    let validPhone   = /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    let phoneIsValid = validPhone.test(phone);{
        if (phoneIsValid == false){
            phone = false;
        }
    };

    //RegEx for danish zip number
    //https://rgxdb.com/r/335G4K1S
    let validPostalCode   = /^(?:[1-24-9]\d{3}|3[0-8]\d{2})$/;
    let postalCodeIsValid = validPostalCode.test(postNumber);{
        if (postalCodeIsValid == false){
            postNumber = false;
        }
    };

    /*Since the value of the input variables will not return true if they have a value,
    but can will return false when they dont have a value, i have used != as to check the variables boolean value.*/
    let inputTest = [firstName, lastName, address, postNumber, city, phone, email, bookingTime];

    //Test if every user input variable is equal to not false
    let inputResult = inputTest.every(function (input) {
        return input != false;
    });

    //If every user input comes out as not false
    let arrayLength = inputTest.length;

    if (inputResult == true) {
        for (let i = 0; i <= arrayLength; i++){
            document.getElementById("input" + i).disabled = true;

        };

        document.getElementById("bookingConfirm").style.display = "block";
        document.getElementById("button").innerText = "Send a new code";


        let emailCode = Math.floor(1000 + Math.random() * 9000);

        sessionStorage.setItem("code", emailCode);

        console.log(emailCode);


        alert("Email alert to " + email + "\n"
            + "Hi " + fullName + "\n"
            + "Your confirmation code is: " + sessionStorage.getItem("code"));

        // sessionStorage.setItem("user", inputTest);

        sessionStorage.setItem("firstname", firstName);
        sessionStorage.setItem("lastname", lastName);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("postnumber", postNumber);
        sessionStorage.setItem("city", city);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("bookingtime", bookingTime);
        sessionStorage.setItem("fullname", fullName);

    }

    //The input error for when one or more input returns false.

    for (let i = 0; i <= arrayLength -2; i++) {
        if (inputTest[i] == false) {
            document.getElementById("input" + i).placeholder = "Please enter a valid " +
                document.getElementById("input" + i).className;
            document.getElementById("input" + i).value = "";
            document.getElementById("input" + i).style.borderColor = "#e8491d";
            document.getElementById("button").innerText = "Please enter all the fields";

        };
        //Since the zip input field is to small to have it´s own error text, the placeholder remains the same.
        if (i == 3){
            document.getElementById("input" + i).placeholder = document.getElementById("input" + i).className;

        };


    };

};

//After the email code is given, a new area will show, were the user must input the same code ti get the booking validation.
const bookingConfirm = () =>{

    let inputCode = document.getElementById("email_code").value;

    if (sessionStorage.getItem("code") === inputCode) {

        alert("Hi " + sessionStorage.getItem("fullname") + "!" + "\n"
            + "\n"
            + "You have booked a @HOME service appointment at " + "\n" + sessionStorage.getItem("bookingtime")
            +"\n" + "\n"
            + "Please validate your contact information:" + "\n"
            + "Address: " +  sessionStorage.getItem("address") + ", " +  sessionStorage.getItem("postnumber") +
            ", " +  sessionStorage.getItem("city") + "\n"
            + "Phone: " +  sessionStorage.getItem("phone") + "\n"
            + "Email: " +  sessionStorage.getItem("email") + "\n"
            + "\n"
            + "Thank you for using TRAJ IT-SUPPORT!");

    } else {

        document.getElementById("email_code").placeholder = "Please enter a valid code";
        document.getElementById("email_code").value = "";

    };

};
