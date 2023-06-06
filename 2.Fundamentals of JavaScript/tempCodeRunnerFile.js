const detailsAbhishek = {
  firstName: "Abhishek",
  lastName: "Kumar",
  birthYear: 1994,
  profession: "Software Developer",
  friends: ["Abhay", "Anupam", "Saurabh"],
  hasDrivingLicense: true,
  calculateAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

console.log(detailsAbhishek.calculateAge(detailsAbhishek.birthYear));
console.log(detailsAbhishek['calculateAge'](detailsAbhishek.birthYear));