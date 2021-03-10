var student = {
    "firstName": "Giovanni",
    "lastName": "Porcelli",
    "age": 33
}

/* for (var key in student) {
    console.log([key]+": "+student[key]);
} */

var studentList = [
    {
        "firstName": "Valentino",
        "lastName": "Rossi",
        "age": 42
    },
    {
        "firstName": "Michael Jeffrey",
        "lastName": "Jordan",
        "age": 58
    },
    {
        "firstName": "Daniel William",
        "lastName": "Carter",
        "age": 39
    },
    {
        "firstName": "Roger",
        "lastName": "Federer",
        "age": 39
    },
    {
        "firstName": "Gilberto",
        "lastName": "Godoy Filho",
        "age": 45
    },
    {
        "firstName": "Ronaldo Luis",
        "lastName": "Nazario de Lima",
        "age": 45
    },
];

for (var i = 0; i < studentList.length; i++) {
    for (var key in studentList[i]) {
        console.log(studentList[i].firstName, studentList[i].lastName);
    }
}

var firstName = prompt("Inserisci il nome dello studente");
var lastName = prompt("Inserisci il cognome dello studente");
var age = parseInt(prompt("Inserisci l'età dello studente"));
studentList.push({"firstName":firstName, "lastName":lastName, "age":age});
console.log(studentList[studentList.length-1]);

for (var i = 0; i < studentList.length; i++) {
    for (var key in studentList[i]) {
        console.log(studentList[i].firstName, studentList[i].lastName);
    }
}