class User {
    constructor(usrnm, psw) {
        this.usrnm = usrnm;
        this.psw = psw;
    }
}

var users = [];
users.push(new User("Anders", "123"));
users.push(new User("Jonas","123"));