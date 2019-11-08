if(localStorage.getItem('user') == null)
{
    var userList = [];
        userList.push(new user("anders", "123"));
        userList.push(new user("thomas", "123"));
        userList.push(new user("axel", "123"));
        userList.push(new user("jonas", "123"));

        var userListString = JSON.stringify(userList);
        localStorage.setItem('user', userListString);
        console.log("!");
}
else
{
    userList = JSON.parse(localStorage.getItem('user'));
    console.log("?");
}



/*var username = document.getElementById('username');
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

} */