const detailsAbhishek = {
  firstName: "Abhishek",
  lastName: "Kumar",
  age: 28,
  profession: "Software Developer",
  friends: ["Abhay", "Anupam", "Saurabh"],
};

console.log(detailsAbhishek);

console.log(detailsAbhishek.firstName);
console.log(detailsAbhishek.friends);

const nameKey = "Name";
console.log(detailsAbhishek["first" + nameKey]);
console.log(detailsAbhishek["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Abhishek Kumar? Please choose between age, profession, and friends.");
// console.log(detailsAbhishek[interestedIn]);


detailsAbhishek.location = "Ghaziabad"
detailsAbhishek.twitter = "@abhishek9223"

console.log(detailsAbhishek)

console.log(`${detailsAbhishek.firstName} has ${detailsAbhishek.friends.length} friends and his best friend is ${detailsAbhishek.friends[0]}`);