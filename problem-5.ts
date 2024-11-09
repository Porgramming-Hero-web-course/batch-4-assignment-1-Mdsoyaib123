{
  // Problem-5
  const getProperty = <T, P extends keyof T>(obj: T, propertyName: P): T[P] => {
    return obj[propertyName];
  };

  const res = getProperty({ name: "sourav", age: 44, roll: 5555 }, "name");
  console.log(res);
}
