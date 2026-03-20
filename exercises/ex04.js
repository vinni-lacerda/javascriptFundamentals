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
