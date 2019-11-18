class user {
    constructor(userName, userPassword, userAbout, userCreationDate, userActivity, isAdmin) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userAbout = userAbout;
        this.userCreationDate = userCreationDate;
        this.userActivity = userActivity;
        this.isAdmin = isAdmin;
    }

}

var jonas = new user ("Jonas", 123, "Member of TRAJ SOLUTIONS", new Date(), true, true);