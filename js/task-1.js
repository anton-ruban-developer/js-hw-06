const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
function addMood(newMood) {
  user.mood = newMood;
}
function changeHobby(newHobby) {
  user.hobby = newHobby;
}
function changePremium(value) {
  user.premium = value;
}
function newArr(value) {
  const userArr = Object.keys(user);
  for (value of userArr) {
    console.log(`${value}: ${user[value]}`);
  }
}

addMood("happy");
changeHobby("skydiving");
changePremium("false");
console.table(user);
newArr("user");
