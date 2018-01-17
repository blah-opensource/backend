'use strict';

module.exports = function(Student) {
    console.log("Student: create ", Student.create)
    var origLogin = Student.login
    Student.login = function(credentials, include, fn) {
        origLogin = origLogin.bind(this);
        if(credentials.usn) {
            // set usn as username field
            credentials.username = credentials.usn;
            
            origLogin(credentials, include, fn)
        }
    }
};
