function getUserInput() {
    var x = document.getElementById("form1");
    var y = String(x);

    console.log(y);

    if (y == adminAnders.userName)
    {
        alert(adminAnders.userName);
        //document.getElementById("result") = adminAnders.userName;
    }
    else
    {
        alert("The searched username does not match any users in the database");
        //document.getElementById("result") = "The searched username does not match any users";
    }

    return;

}