var URLNormalizer = require('./url-normalizer.js');

var url = 'http://www.appledaily.com.tw/realtimenews/article/finance/20131225/314703/【台股開盤】開高上漲11點';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.appledaily.com.tw/realtimenews/article/finance/20131225/314703/【台股開盤】 開高上漲11點',
  normalized_url: 'http://www.appledaily.com.tw/realtimenews/article/local/20131225/314703',
  normalized_id: 'www.appledaily.com.tw/realtimenews/20131225/314703' }
*/

url = 'http://www.chinatimes.com/newspapers/蠻牛再起-3登年終球王-20131108000743-260111?from=fb';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.chinatimes.com/newspapers/蠻牛再起-3登年終球王-20131108000743-260111?from=fb',
  normalized_url: 'http://www.chinatimes.com/newspapers/20131108000743-260111',
  normalized_id: 'www.chinatimes.com/newspapers/20131108000743/260111' }
*/

url = 'http://www.cna.com.tw/News/aFE/201309070021-1.aspx';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.cna.com.tw/News/aFE/201309070021-1.aspx',
  normalized_url: 'http://www.cna.com.tw/News/aAll/201309070021-1.aspx',
  normalized_id: 'www.cna.com.tw/aAll/201309070021-1.aspx' }
*/
url = 'http://www.cna.com.tw/News/firstnews/201309070021-1.aspx';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.cna.com.tw/News/firstnews/201309070021-1.aspx',
  normalized_url: 'http://www.cna.com.tw/News/firstnews/201309070021-1.aspx',
  normalized_id: 'www.cna.com.tw/firstnews/201309070021-1.aspx' }
*/
url = 'http://www.cna.com.tw/Topic/Popular/3959-1/201309070021-1.aspx';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.cna.com.tw/Topic/Popular/3959-1/201309070021-1.aspx',
  normalized_url: 'http://www.cna.com.tw/News/firstnews/201309070021-1.aspx',
  normalized_id: 'www.cna.com.tw/firstnews/201309070021-1.aspx' }
*/

url = 'http://www.nownews.com/n/2013/10/28/1003767';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.nownews.com/n/2013/10/28/1003767',
  normalized_url: 'http://www.nownews.com/n/2013/10/28/1003767',
  normalized_id: 'www.noewnews.com/1003767' }
*/

url = 'http://newtalk.tw/news/2013/12/30/43243.html';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://newtalk.tw/news/2013/12/30/43243.html',
  normalized_url: 'http://newtalk.tw/news/2013/12/30/43243.html',
  normalized_id: 'newtalk.tw/43243' }
*/

url = 'http://iservice.libertytimes.com.tw/liveNews/news.php?no=927070&type=%E5%9C%8B%E9%9A%9B';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://iservice.libertytimes.com.tw/liveNews/news.php?no=927070&type=%E5%9C%8B%E9%9A%9B',
  normalized_url: 'http://iservice.libertytimes.com.tw/liveNews/news.php?no=927070',
  normalized_id: 'iservice.libertytimes.com.tw/liveNews/927070' }
*/
url = 'http://www.libertytimes.com.tw/2013/new/dec/30/today-taipei1.htm';
console.log(URLNormalizer.query(url));
/*
{ query_url: 'http://www.libertytimes.com.tw/2013/new/dec/30/today-taipei1.htm',
  normalized_url: 'http://www.libertytimes.com.tw/2013/new/dec/30/today-taipei1.htm',
  normalized_id: 'www.libertytimes.com.tw/new/2013/dec/30/taipei1' }
*/
