function listObjects(){
    var people = document.getElementById("list").value;
    var html = "<table border = '2'> ";
    if(people == 0 ) {
        for (var i = 0; i < allStudents.length; i++) {
            html += "<tr>";
            html += "<td>" + allStudents[i].firstName + "</td>";
            html += "<td>" + allStudents[i].lastName + "</td>";
            html += "<td>" + allStudents[i].grade + "</td>";
            html += "</tr>";
            // html += "</table>";
            document.getElementById("output").innerHTML = html;
        }
        } else if(people == 1){
            for (var i = 0; i < allTeachers.length; i++) {
                html += "<tr>";
                html += "<td>" + allTeachers[i].firstName + "</td>";
                html += "<td>" + allTeachers[i].lastName + "</td>";
                html += "<td>" + allTeachers[i].subject + "</td>";
                html += "</tr>";
                // html += "</table>";
                document.getElementById("outputTeacher").innerHTML = html;
            }
            }else if(people == 2) {
                    for (var i = 0; i < allSections.length; i++) {
                        html += "<tr>";
                        html += "<td>" + allSections[i].name + "</td>";
                        html += "<td>" + allSections[i].size + "</td>";
                        html += "</tr>";
                        // html += "</table>";
                        document.getElementById("outputSection").innerHTML = html;

                    }
                    }else {
                    if(people == null){
                        document.getElementById("output").innerHTML = "none";
                    }
                    }

    html += "</table>";
    // document.getElementById("output").innerHTML = html;
}

function addStudent(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var grade = document.getElementById("grade").value;
    allStudents.push(new Student(firstName,lastName,grade));
    console.log(new Student(firstName,lastName,grade));
    document.getElementById("studentSection").innerHTML = "Student Added";
    clearBoxes();
}


function addTeacher(teacher){
    var firstName = document.getElementById("TeacherF").value;
    var lastName = document.getElementById("TeacherL").value;
    var subject = document.getElementById("subject").value;
    allTeachers.push(new Teacher(firstName,lastName,subject));
    console.log(new Teacher(firstName,lastName,subject));
    document.getElementById("teacherSection").innerHTML = "Teacher Added";
    clearBoxes();


}

function addSection(){
    var section = document.getElementById("section").value;
    var size = document.getElementById("sectionSize").value;
    allSections.push(new Section(section, size));
    console.log(new Section(section, size));
    document.getElementById("sectionAdded").innerHTML = "Section Added";
    clearBoxes();
}

function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
}
function selectListStudents(){
    var html = "";
    for(var i = 0; i < allStudents.length; i++){
        html += "<option value = '" + allStudents[i].id + " '> " + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    document.getElementById("students").innerHTML = html;
}

function selectListTeachers(){
    var html = "";
    for(var i = 0; i < allTeachers.length; i++){
        html += "<option value = '" + allTeachers[i].id + " '> " + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>";
    }
    document.getElementById("teachers").innerHTML = html;
}

function selectListSection(){
    var html = "";
    for(var i = 0; i < allSections.length; i++){
        html += "<option value = '" + allSections[i].id + "'>" + allSections[i].name  + "</option>";
    }
    document.getElementById("sectionName").innerHTML = html;
    document.getElementById("sectionName2").innerHTML = html;
    document.getElementById("sectionName3").innerHTML = html;


}

function studentById(studentId){
    for(var i = 0; i<allStudents.length;i++ ){
        if(allStudents[i].id == studentId){
            return allStudents[i];
        }
    }
}

function teacherById(teacherId){
    for(var i = 0; i<allTeachers.length;i++ ){
        if(allTeachers[i].id == teacherId){
            return allTeachers[i];
        }
    }
}

function sectionById(SectionId){
    for(var i = 0; i < allSections.length; i++){
        if( allSections[i].id == SectionId){
            return allSections[i];
            console.log(allSections[i])
        }
    }
}

//studentId,SectionId
function addStudentToSection(){
    var student = studentById(document.getElementById("students").value);
    var section = sectionById(document.getElementById("sectionName").value);
    section.students.push(student);
    console.log(this.students);
    document.getElementById("studentsInSection").innerHTML = "You have added student to section."

}

function addTeacherToSection(){
    var teacher  = teacherById(document.getElementById("teachers").value);
    var section = sectionById(document.getElementById("sectionName2").value);
    section.teachers.push(teacher);
    document.getElementById("teachersInSection").innerHTML = "You have added teacher to section."


}

function showStudentsInSection() {
    var sectionId = document.getElementById("sectionName3").value;
    var section = sectionById(sectionId);
    for(var i = 0; i < section.students.length;i++){
        document.getElementById("showPeople").innerHTML += "Students" +'<p>' + section.students[i].firstName
        + " " + section.students[i].lastName + " " + section.students[i].grade + '</p>'
    }
}

function showTeachersInSection() {
    var sectionId = document.getElementById("sectionName3").value;
    var section = sectionById(sectionId);
    for(var i = 0; i < section.teachers.length;i++){
        document.getElementById("showPeople").innerHTML +=  '<p>' + section.teachers[i].firstName
            + " " + section.teachers[i].lastName + " " + section.teachers[i].subject + '</p>'
    }
}

// function searchStudents(studentId){
//     var student = studentById(document.getElementById("students").value);
//     var sectionId = document.getElementById("sectionName3").value;
//     var section = sectionById(sectionId);

//     if(studentId == student) {
//         return  document.getElementById("showStudents").innerHTML += '<p>' + section.students[i].firstName
//             + " " + section.students[i].lastName + " " + section.students[i].grade + '</p>'
//
//     }
//
// }
