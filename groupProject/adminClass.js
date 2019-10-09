class admin {
    constructor(name, password, about, creationDate, activity, adminCode) {
        this.userName = name;
        this.userPassword = password;
        this.userAbout = about;
        this.userCreationDate = creationDate;
        this.userActivity = activity;
        this.adminCode = adminCode;
    }

}

adminAnders = new admin("AndersChristmann", "123", "Anders is one of the founders of TRAJ solutions",
    9/10/2019, true, 321);

