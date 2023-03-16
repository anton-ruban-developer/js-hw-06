const countProps = function (obj) {
  const totalAmount = Object.values(obj);
  return totalAmount.length;
};
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
