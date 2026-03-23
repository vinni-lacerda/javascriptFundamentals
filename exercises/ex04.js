const getVowelCount = (sentence) => {
    const vowels = "aeiou";
    let count = 0;

     for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
let vowelCount = getVowelCount("Hello, World!");
console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = (sentence) => {
  let vowel = "aeiou";
  let count = 0;
  let cleanSentence = sentence.trim().toLowerCase().replace(/[,.!]/g, "")
  
  for(let char of cleanSentence){
    if(!vowel.includes(char) && char != " "){
      count++;
    }
  }
  return count;
};

const consonantCounter = getConsonantCount("Hello, World!");
console.log(`Consonant Count: ${consonantCounter}`);

const getPunctuationCount = (sentence) => {
  const cleanSentence = sentence.replace(/[^.,!?']/g, "");
  let count = 0;
  for(let char of cleanSentence){
    count++;
  };
  return count;
};
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const getWordCount = (sentence) => {
  let cleanSentence = sentence.trim();
  return cleanSentence === "" ? 0 : cleanSentence.split(/\s+/).length;
};
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Words Count: ${wordCount}`);
