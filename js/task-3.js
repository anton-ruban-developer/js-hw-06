const findBestEmployee = function (employees) {
  let maxNumberOfTasks = 0;
  let bestEmployee;
  const allEmployees = Object.keys(employees);
  for (const employee of allEmployees) {
    const tasks = employees[employee];
    if (tasks > maxNumberOfTasks) {
      maxNumberOfTasks = tasks;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
