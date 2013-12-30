var URLNormalizer = require('./url-normalizer.js');

var url = 'http://www.appledaily.com.tw/realtimenews/article/finance/20131225/314703/【台股開盤】開高上漲11點';
console.log(URLNormalizer.query(url));

url = 'http://www.chinatimes.com/newspapers/蠻牛再起-3登年終球王-20131108000743-260111?from=fb';
console.log(URLNormalizer.query(url));
