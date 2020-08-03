///////////////////
// EXERCISE EL01 //
///////////////////

// concepts:
//  - regex, Object.keys, Array.indexOf, for loop
// task:
//  - The task is to count the cleaned words (alphanumeric only) unordered and output an object with words and their respective counts
// hint:
//  - The hints are in the concepts to be covered.

console.clear();
console.log(__filename.split('/').slice(-1)[0])

const caparezza = ['sono', 'fuori', 'dal', 'tunnel,', 'del', 'divertimento,', 'sono', 'fuori', 'dal', 'tunnel,', 'del', 'divertimento,', 'quando', 'esco', 'di', 'casa', 'e', 'mi', 'annoio,', 'sono', 'molto', 'contento,', 'quando', 'esco', 'di', 'casa', 'e', 'mi', 'annoio,', 'sono', 'molto', 'più', 'contento...', 'di', 'te', 'che', 'spendi', 'stipendi,', 'stipato', 'in', 'posti', 'stupendi,', 'Tra', 'culi', 'su', 'cubi,', 'succubi', 'di', 'beat', 'orrendi,', 'succhi', 'brandy', 'e', 'ti', 'stendi,', 'dandy', 'non', 'mi', 'comprendi,', 'senti', 'tu', 'non', 'ti', 'offendi,', 'se', 'ti', 'dico', 'che', 'sei', 'trendy,', 'prendi', 'me', 'per', 'esempio,', 'non', 'mi', 'stempio'];

const cleanWord = (word) => word.replace(/[^a-z0-9]/gi, '');

function countWords(arr) {
  /* IMPLEMENT */
}

console.log(countWords(caparezza));

// desired output:
/*
{
  sono: 4,
  fuori: 2,
  dal: 2,
  tunnel: 2,
  del: 2,
  divertimento: 2,
  quando: 2,
  esco: 2,
  di: 4,
  casa: 2,
  e: 3,
  mi: 4,
  annoio: 2,
  molto: 2,
  contento: 2,
  pi: 1,
  te: 1,
  che: 2,
  spendi: 1,
  stipendi: 1,
  stipato: 1,
  in: 1,
  posti: 1,
  stupendi: 1,
  Tra: 1,
  culi: 1,
  su: 1,
  cubi: 1,
  succubi: 1,
  beat: 1,
  orrendi: 1,
  succhi: 1,
  brandy: 1,
  ti: 3,
  stendi: 1,
  dandy: 1,
  non: 3,
  comprendi: 1,
  senti: 1,
  tu: 1,
  offendi: 1,
  se: 1,
  dico: 1,
  sei: 1,
  trendy: 1,
  prendi: 1,
  me: 1,
  per: 1,
  esempio: 1,
  stempio: 1
}
*/
