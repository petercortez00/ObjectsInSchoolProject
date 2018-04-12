var id = 1;
function Student(firstName,lastName,grade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id++;
}

function Teacher(firstName,lastName,subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;


}

function Section(name,size){
    this.name = name;
    this.size = size;
    this.teachers = [];
    this.students = [];
    this.id = id++;
}






































// http://10.137.41.45:3000/teacher
