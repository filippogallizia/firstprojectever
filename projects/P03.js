/////////////////
// EXERCISE 07 //
/////////////////

// concepts:
//  - WIP
// task:
//  - WIP
// hint:
//  - WIP

// dependencies
let fs = require('fs')
  , path = require('path');

// flattens array of k/v pair objects into a single object
const flattenObjArr = (objArr) => objArr.reduce((t, v) => {
  t[Object.entries(v)[0][0].split('_price')[0]] = Object.entries(v)[0][1];
  return t;
}, {});

// async promise chain to read all file contents
async function getCryptoData (files) {
  files = files.filter((file) => file.indexOf('.DS_Store') < 0);
  const loadFilePromiseChain = files.map((file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err) return reject(err);
        let cryptoPair = {};
        cryptoPair[path.basename(file).split('.')[0]] = data.toString();
        resolve(cryptoPair);
      });
    });
  })
  return flattenObjArr(await Promise.all(loadFilePromiseChain));
}

(async () => {

  // establish data directory location (assuming you are running node from W03 folder)
  const relativeDataDir = path.resolve(__dirname, 'E07_DATA/UNPACKED/');
  
  // read directory contents
  const contents = fs.readdirSync(relativeDataDir);

  // get all data in array of k/v pairs
  const cryptoData = await getCryptoData(contents.map((f) => path.resolve(relativeDataDir, f)));

  // display names of cryptos and size of data set
  Object.keys(cryptoData).forEach((crypto) => console.log(`${crypto.toUpperCase()}:  ${cryptoData[crypto].length}`));

})();


// desired output:
/*
WIP
*/


