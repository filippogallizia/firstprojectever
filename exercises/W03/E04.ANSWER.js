const caparezza = ['sono', 'fuori', 'dal', 'tunnel,', 'del', 'divertimento,', 'sono', 'fuori', 'dal', 'tunnel,', 'del', 'divertimento,', 'quando', 'esco', 'di', 'casa', 'e', 'mi', 'annoio,', 'sono', 'molto', 'contento,', 'quando', 'esco', 'di', 'casa', 'e', 'mi', 'annoio,', 'sono', 'molto', 'più', 'contento...', 'di', 'te', 'che', 'spendi', 'stipendi,', 'stipato', 'in', 'posti', 'stupendi,', 'Tra', 'culi', 'su', 'cubi,', 'succubi', 'di', 'beat', 'orrendi,', 'succhi', 'brandy', 'e', 'ti', 'stendi,', 'dandy', 'non', 'mi', 'comprendi,', 'senti', 'tu', 'non', 'ti', 'offendi,', 'se', 'ti', 'dico', 'che', 'sei', 'trendy,', 'prendi', 'me', 'per', 'esempio,', 'non', 'mi', 'stempio'];
// 1. turn array of words into sentences (... || ,)
//    - take into account capitalisation (conditional on seeing annoio)
// 2. calculate longest sentence length
// 3. make function to output string of same character (spaces and stars) at arbitrary length
// 4. print maxlength of stars
// 5. print each sentence filled on the right with spaces to have total length = maxlength
// 6. make sure to add a * at the end of each sentence ;)
// 7. print last line same as 4.
// 8. commit result to github
console.clear();
console.log("EXERCISE 04");
// NOTES
// - don't reuse variable names (this is possible but it leads to nasty bugs)
// - don't use reserved keywords (const, let, array, string, number etc etc etc) also nasty bugs
/* HELPERS */
const capitalLetters = (sentence) => sentence.substring(0,1).toUpperCase() + sentence.substring(1);
// 1. array into words of sentences
let primoBucket = [];
let tmpBucket = [];
let weHadAnAnnoio = false;
function virgola(arr){
  for (let i = 0; i < arr.length; i++){
    // PROBLEM 1: we push words into an array, but we capitalise each one...
    tmpBucket.push(arr[i]);
    // are we at the last word of the sentence?
    if (arr[i].indexOf(',') > -1 || arr[i].indexOf('...') > -1 ) {
      if(!weHadAnAnnoio) {
        primoBucket.push(capitalLetters(tmpBucket.join(" ")));
      } else {
        primoBucket.push(tmpBucket.join(" "));
        weHadAnAnnoio = false;
      }
      if(tmpBucket.join(" ").indexOf("annoio") > -1) {
        weHadAnAnnoio = true;
      }
      tmpBucket = [];
    }
  }
  return primoBucket;
}
const sentences = virgola(caparezza);
// 2. longest length
function maxLength (arr) {
  let maxSentenceLength = 0;
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i].length > maxSentenceLength) {
      maxSentenceLength = arr[i].length;
    }
  }
  return maxSentenceLength;
}
// 3. max length of stars
function generateChars (char, numero){
  let returnString = '';
  for (n = 0; n < numero; n++) {
    returnString += char
  }
  return returnString;
}
// 4 print max length of stars
const maxSentenceLength = maxLength(sentences)
console.log(generateChars("*", maxLength(sentences)+5));
// 5. print each sentence filled on the right with spaces to have total length = maxlength
// 6. make sure to add a * at the end of each sentence ;)
sentences.forEach((sentence) => console.log(('* ' + sentence + generateChars(' ',(maxSentenceLength - sentence.length + 2)) + '*')));
// 7. print last line same as 4.
console.log(generateChars("*", maxLength(sentences)+5));


// done !