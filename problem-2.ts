{
  //Problem-2

  const removeDuplicates = (num: number[]): number[] => {
    const currentArr = num ;
    const newArr = currentArr.filter((item, index) => num.indexOf(item) === index);
    return newArr;
  };

  const res = removeDuplicates([4,4,1, 44, 4, 3, 3, 5, 5, 6, 6, 6]);
  console.log(res);
  //
}
