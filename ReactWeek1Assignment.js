class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }

}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        let verify = this.students.filter(function(student){
            if(student.email === studentToRegister.email){
                return true; //move student into a new array
            } else {
                return false; // did not find the student... continue
            }
        });
        if(verify.length){
            console.log("student already registered")
        } else {
            this.students.push(this.students);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`)
        }
        return this.students;
    }
}