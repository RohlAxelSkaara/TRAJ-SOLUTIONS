var submit = document.getElementById('submit');
var signup = document.getElementById('signup');
var existingUser = JSON.parse(localStorage.getItem('user'));
var currentLogIn = [];

submit.onclick = function() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    for (let i = 0; i < existingUser.length; i++) {
        if (usernameInput === existingUser[i].userName && passwordInput === existingUser[i].passWord) {
        currentLogIn.push({userName: usernameInput});
        document.location.href = "index.html";
        var IDString = JSON.stringify(currentLogIn);
        localStorage.setItem('currentuser', IDString);
        alert("!");
        return true;
        }
    }
}

// Ændring så vi kan push stoffer

/*document.getElementById('username').addEventListener("keyup", function (event) {
    if (event.keyCode == 13)
        submit.click();
});

document.getElementById('password').addEventListener("keyup", function (event) {
    if (event.keyCode == 13)
        submit.click();
});
*/

