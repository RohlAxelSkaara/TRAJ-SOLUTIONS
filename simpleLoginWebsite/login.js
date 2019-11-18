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
<<<<<<< HEAD:simpleLoginWebsite/login.js
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

=======
]
//Gets type in info from login page
function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
//Checks login info against saved users
>>>>>>> 7c1b91a502ca634277fd131efc2e73ec62028c64:simpleLoginWebsite/loginJonas.js
    for (i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            console.log(username + " is now logged in! :D")
        } else {
            console.log("IM TIRED OF THESE MOTHERFUCKING FAKES ON MY MOTHERFUCKING WEBSITE")
        }
    }
}
<<<<<<< HEAD:simpleLoginWebsite/login.js
=======
//https://www.youtube.com/watch?v=UAu7cMuu0BI&t=9s
>>>>>>> 7c1b91a502ca634277fd131efc2e73ec62028c64:simpleLoginWebsite/loginJonas.js
