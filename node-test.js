var URLNormalizer = require('./url-normalizer.js');

var url = 'http://www.appledaily.com.tw/realtimenews/article/finance/20131225/314703/【台股開盤】開高上漲11點';
console.log(URLNormalizer.query(url));
