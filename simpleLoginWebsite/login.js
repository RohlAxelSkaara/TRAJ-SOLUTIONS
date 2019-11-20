var userLoggedIn = [];

//Gets type in info from login page
function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
//Checks login info against saved users
    for (i = 0; i < users.length; i++) {
        if(username == users[i].usrnm && password == users[i].psw) {
            alert("Logged in!");
            userLoggedIn.push({usrnm: username});
            document.location.href = "profilePage.html";

        }
    }
}
//https://www.youtube.com/watch?v=UAu7cMuu0BI&t=9s
