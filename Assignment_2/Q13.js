//13. Write a JavaScript program to delete the rollno property from
//the following object. Also print the object before or after deleting
//the property.
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


console.log("Before deleting 'rollno':", student);

delete student.rollno;


console.log("After deleting 'rollno':", student);
