/*
In this lab, you will build a function that returns the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab. 
*/

const findLongestWordLength = (str) => {
  let cleanSentence = str.split(" ")
  let largestName = cleanSentence[0]; 
  console.log(largestName);
  
  for(let stc = 0; stc<cleanSentence.length; stc++){
    // console.log(cleanSentence[stc].length);
    if(cleanSentence[stc].length > largestName.length){
        largestName = cleanSentence[stc];
    }
  };
  return largestName;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
