{
  //Problem-2

  const removeDuplicates = (num: number[]) => {
    return num.filter((item, index) => num.indexOf(item) === index);
  };

  const res = removeDuplicates([4, 44, 4, 3, 3, 5, 5, 6, 6, 6]);
  console.log(res);
  //
}
