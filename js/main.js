var student = {
    "firstName": "Giovanni",
    "lastName": "Porcelli",
    "age": 33
}

for (var key in student) {
    console.log([key]+": "+student[key]);
}