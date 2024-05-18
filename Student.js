var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.studentMarks >= 75) {
            return "A";
        }
        else if (this.studentMarks > 50 && this.studentMarks < 75) {
            return "B";
        }
        else {
            return "c";
        }
    };
    return Student;
}());
var s1 = new Student();
s1.studentName = "bharat";
s1.studentMarks = 90;
s1.studentRank = 4;
console.log("Grade of student is " + s1.getStudentGrade());
var s2 = new Student();
s2.studentName = "bharat";
s2.studentMarks = 40;
s2.studentRank = 4;
console.log("Grade of student is " + s2.getStudentGrade());
