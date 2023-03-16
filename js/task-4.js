const countTotalSalary = function (employees) {
  let totalSalary = 0;
  const salary = Object.keys(employees);
  for (const value of salary) {
    totalSalary += employees[value];
  }
  return totalSalary;
};

console.log(countTotalSalary({}));
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
