var users = [
    {
        username: "Jonas",
        password: "jonas123"
    },
    {
        username: "Anders",
        password: "anders123"
    },
    {
        username: "Thomas",
        password: "thomas123"
    },
    {
        username: "Axel",
        password: "axel123"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            console.log(username + " is now logged in! :D")
        }
    }
}