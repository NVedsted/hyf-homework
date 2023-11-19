function getStudentManager() {
    const class07Students = [];

    function addStudentToClass(studentName) {
        if (!studentName) {
            throw new Error("no empty name");
        }

        if (class07Students.length >= 6 && studentName !== "Queen") {
            console.log("Cannot add more students to class 07");
            throw new Error("no more room");
        }

        for (let enrolledStudentName of class07Students) {
            if (enrolledStudentName === studentName) {
                console.log(`Student ${studentName} is already in the class`);
                throw new Error("already enrolled");
            }
        }

        class07Students.push(studentName);
    }

    function getNumberOfStudents() {
        return class07Students.length;
    }

    return {
        addStudentToClass,
        getNumberOfStudents,
    };
}

module.exports = getStudentManager;