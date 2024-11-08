{
  // Problem-1

  const sumArray = (num: number[]) => {
    return num.reduce((acc, currNumber) => acc + currNumber, 0);
  };

  const res = sumArray([3, 3, 4, 5, 3]);
  console.log(res);
  //
}
