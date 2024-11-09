{
  //   Problem-3

  const countWordOccurrences = (sentence: string, word: string): number => {
    const inputSentence = sentence.toLowerCase().split(" ");
    const inputWord = word.toLowerCase();

    return inputSentence.filter((w) => w === inputWord).length;
  };

  const res = countWordOccurrences(
    "I live live live Live Live in Dhaka",
    "Live"
  );
  console.log(res);
  //
}
