{
  // Problem-1

  const sumArray = (num: number[]):number => {
    return num.reduce((acc, currNumber) => acc + currNumber, 0);
  };

  const res = sumArray([3, 5, 4, 5, 3]);
  console.log(res);
  //
}
