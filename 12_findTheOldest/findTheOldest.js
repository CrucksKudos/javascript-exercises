const getAge = (person) => {
    return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
};

const findTheOldest = function (people) {
    return people.sort((a, b) => getAge(b) - getAge(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
