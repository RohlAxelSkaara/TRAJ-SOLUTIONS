//Name and password from register form
var username = document.getElementById('username');
var password = document.getElementById('password');

function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert("Your account has been registered!");
}

function check() {
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    var loginUsername = document.getElementById('loginname');
    var loginPassword = document.getElementById('loginpassword')

    if(loginUsername.value.toLowerCase() == storedUsername.toLowerCase() && loginPassword.value == storedPassword) {
        alert('Log-in successful!');
    }else {
        alert('Entered information is incorrect');
    }

}