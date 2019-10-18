//Class called admin with 6 constructors
class admin {
    constructor(name, password, about, creationDate, activity, adminCode) {
        this.userName = name;
        this.userPassword = password;
        this.userAbout = about;
        this.userCreationDate = creationDate;
        this.userActivity = activity;
        this.adminCode = adminCode;
    }
    //Funtion that is called in index.html that replaces a paragraf with text and information from the object adminAnders.
    presentAdminName() {
        return "This admin is named " + adminAnders.userName;
    }

}

//Object of class admin
adminAnders = new admin("Anders Christmann", "123", "Anders is one of the founders of TRAJ solutions",
    9/10/2019, true, 321);
