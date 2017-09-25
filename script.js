// Lecture: Objects and methods

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2017 - yearOfBirth;
    }
};

console.log(john.calculateAge(1990));