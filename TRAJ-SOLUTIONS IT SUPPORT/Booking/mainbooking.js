
/* FURTHER IMPROVMENTS
1.Make the firstname, lastname.... variables a global scope.
2.Make them into one array
3.Save the information input from the user to localstorage for later usage
4. combine the loginsystem with the bookingssytem for faster booking for users
5.Generate random number for email confirmation
6.Put together all variable to one bookingConfirmation = true -->
get
 */



//This function will be the end product, it will gather all information given by the user to create an alert containing the booking information.
const booking = () => {
    // variables for contact information which extracts the value input into the HTML booking form and feeds it to the variables.
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let postNumber = document.getElementById("post_number").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    //collects all time and date information into one variable
    let bookingTime = document.getElementById("contact_day").value +"."+
        document.getElementById("contact_month").value +"."+
        document.getElementById("contact_year").value + " at "+
        document.getElementById("contact_time").value;
    let fullName = firstName + " " + lastName;


    // Collective validation of date, if one or more inputs are not selected bookingTime will = "", and in turn execute its alert.
    if(document.getElementById("contact_day").value == ""  ||
        document.getElementById("contact_month").value == "" ||
        document.getElementById("contact_year").value == "" ||
        document.getElementById("contact_time").value == ""){
        bookingTime = "";
    }

    // validEmail and emailIsValid will check if the value given to email contains the right structure and symbols
    // XXX@XXX.XXX; else let email will be given the value of false and trigger its alert
    //source for the RegEx code: https://www.w3resource.com/javascript/form/email-validation.php
     let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailIsValid = validEmail.test(email);{
        if (emailIsValid == false){
            email = false;
        }
    };


    // let validPhone and let phoneIsValid test a RegEx for danish numbers, if the number is != danish, let phone will execute its alert
    // source for danish phone number RegEx https://www.etl-tools.com/regular-expressions/is-danish-phone-number.html
    let validPhone = /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    let phoneIsValid = validPhone.test(phone);{
        if (phoneIsValid == false){
            phone = false;
        }
    };


    //https://rgxdb.com/r/335G4K1S
    let validPostalCode = /^(?:[1-24-9]\d{3}|3[0-8]\d{2})$/;
    let postalCodeIsValid = validPostalCode.test(postNumber);{
        if (postalCodeIsValid == false){
            postNumber = false;
        }
    };





    if (firstName == false) {
        document.getElementById("first_name").placeholder = "Please enter your first name";
        document.getElementById("first_name").value = "";
        document.getElementById("first_name").style.borderColor = "#e8491d";
    };
    if(lastName == false) {
        document.getElementById("last_name").placeholder = "Please enter your last name";
        document.getElementById("last_name").value = "";
        document.getElementById("last_name").style.borderColor = "#e8491d";
    };
    if(address == false) {
        document.getElementById("address").placeholder = "Please enter your address";
        document.getElementById("address").value = "";
        document.getElementById("address").style.borderColor = "#e8491d";
    };
    if(postNumber == false) {
        document.getElementById("post_number").placeholder = "Zip";
        document.getElementById("post_number").value = "";
        document.getElementById("post_number").style.borderColor = "#e8491d";
    };
    if(city == false) {

        document.getElementById("city").placeholder = "Please enter your city";
        document.getElementById("city").value = "";
        document.getElementById("city").style.borderColor = "#e8491d";


    };
    if(phone == false) {
        document.getElementById("phone").placeholder = "Please enter a valid  phone number";
        document.getElementById("phone").value = "";
        document.getElementById("phone").style.borderColor = "#e8491d";
    };
    if(email == false) {
        document.getElementById("email").placeholder = "Please enter a valid email";
        document.getElementById("email").value = "";
        document.getElementById("email").style.borderColor = "#e8491d";

        /*let change = document.getElementById("email").placeholder;
        change.style.color = 'blue';*/
    };
    /*if(bookingTime == false) {
        document.getElementById("first_name").placeholder = "Please enter your a date and time";*/


//since the value of the variables cannot be true if they have a value, but can be false when they dont have a value, i have used != as a check.
    if (firstName != false && lastName != false && address != false && postNumber != false
        && city != false && phone != false &&  email != false && bookingTime != false ) {

       document.getElementById("bookingConfirm").style.display = "block";
       document.getElementById("button").innerText = "Send a new code";
       document.getElementById("disabled").disabled = true;


        emailCode = Math.floor( 1000 + Math.random() * 9000);

        localStorage.setItem("code", emailCode);

        let storedCode = localStorage.getItem("code");

        console.log(storedCode);



        alert("Email alert to " + email + "\n"
            + "Hi " + fullName + "\n"
            + "Your confirmation code is: " + storedCode);




    }

};







 const confirmBooking = () => {

     // variables for contact information which extracts the value input into the HTML booking form and feeds it to the variables.
     let firstName = document.getElementById("first_name").value;
     let lastName = document.getElementById("last_name").value;
     let address = document.getElementById("address").value;
     let postNumber = document.getElementById("post_number").value;
     let city = document.getElementById("city").value;
     let phone = document.getElementById("phone").value;
     let email = document.getElementById("email").value;
     //collects all time and date information into one variable
     let bookingTime = document.getElementById("contact_day").value +"."+
         document.getElementById("contact_month").value +"."+
         document.getElementById("contact_year").value + " at "+
         document.getElementById("contact_time").value;
     let fullName = firstName + " " + lastName;

let inputCode = document.getElementById("email_code").value;

if(localStorage.getItem("code") === inputCode){
    alert("Hi " + fullName + "!" + "\n"
        + "\n"
        + "You have booked a @HOME service appointment at " + "\n" + bookingTime
        + "\n"+ "\n"
        + "Please validate your contact information:" + "\n"
        + "Address: " + address + ", " + postNumber + ", " + city + "\n"
        + "Phone: " + phone + "\n"
        + "Email: " + email + "\n"
        + "\n"
        + "Thank you for using TRAJ IT-SUPPORT!");
}else{
    document.getElementById("email_code").placeholder = "Please enter a valid code";
    document.getElementById("email_code").value = "";
}

};




//if statements to validate contact information ending with }else{alert();}
//maybe make a loop to check through if/else to check i more than one if statement executes to add them together
/*if (firstName == false) {
    alert("Please enter your first name");
}else if(lastName == false)  {
        alert("Please enter your last name");
}else if(address == false)  {
          alert("Please enter your address");
}else if(phone == false)  {
          alert("Please enter your phone number");
}else if(email == false) {
    alert("Please enter a valid email");
}else if(bookingTime == false) {
   alert("Please enter a valid date and time");
}else{

    alert("Hi " + firstName + " " + lastName + "!" + "\n"
        + "\n"
        + "You have booked a @HOME service appointment at " + "\n" + bookingTime
        + "\n"+ "\n"
        + "Please validate your contact information:" + "\n"
        + "Address: " + address + "\n"
        + "Phone: " + phone + "\n"
        + "Email: " + email + "\n"
        + "\n"
        + "Thank you for using TRAJ IT-SUPPORT!");
}
};*/




/*alert("Hi " + firstName + " " + lastName + "!" + "\n"
            + "\n"
            + "You have booked a @HOME service appointment at " + "\n" + bookingTime
            + "\n"+ "\n"
            + "Please validate your contact information:" + "\n"
            + "Address: " + address + "\n"
            + "Phone: " + phone + "\n"
            + "Email: " + email + "\n"
            + "\n"
            + "Thank you for using TRAJ IT-SUPPORT!");*/





    /*let emailCode = Math.floor(1000 + Math.random()*9000);

    let validCode =  document.getElementById("email_Code").value;

    const emailValidation  = code => {
        if (emailCode === validCode){
            return true
        }
            };*/

