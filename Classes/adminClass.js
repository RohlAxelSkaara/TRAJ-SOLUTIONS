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
<<<<<<< HEAD:adminClass.js
    //Funtion that is called in index.html that replaces a paragraf with text and information from the object adminAnders.
=======
    //Funtion that is called in simpleLogin.html that replaces a paragraf with text and information from the object adminAnders.
>>>>>>> 57052fa3171324c0058b23840014c2bb62f3c9f6:Classes/adminClass.js
    presentAdminName() {
        return "This admin is named " + adminAnders.userName;
    }

}

//Object of class admin
adminAnders = new admin("Anders Christmann", "123", "Anders is one of the founders of TRAJ solutions",
    9/10/2019, true, 321);

//lav en array