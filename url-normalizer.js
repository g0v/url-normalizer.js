(function(exports){
  exports.query = function(url){
    var url_parts = this.parse_url(url);

    var ret = {};
    ret.query_url = url;

    switch (url_parts['hostname']) {
    case 'www.cna.com.tw':
      // Rule: https://github.com/g0v/url-normalizer.js/issues/2
      // http://www.cna.com.tw/News/aFE/201309070021-1.aspx
      // http://www.cna.com.tw/News/firstnews/201309070021-1.aspx
      // http://www.cna.com.tw/Topic/Popular/3959-1/201309070021-1.aspx
      var pathname_parts = url_parts['pathname'].split('/');
      if ('News' == pathname_parts[1] && 'a' == pathname_parts[2].charAt(0)) {
        ret.normalized_url = 'http://www.cna.com.tw/News/aAll/' + pathname_parts[3];
        ret.normalized_id = 'www.cna.com.tw/aAll/' + pathname_parts[3];
        return ret;
      }

      if ('News' == pathname_parts[1] && 'firstnews' == pathname_parts[2].toLowerCase()) {
        ret.normalized_url = 'http://www.cna.com.tw/News/firstnews/' + pathname_parts[3];
        ret.normalized_id = 'www.cna.com.tw/firstnews/' + pathname_parts[3];
        return ret;
      }

      if ('Topic' == pathname_parts[1] && 'Popular' == pathname_parts[2]) {
        ret.normalized_url = 'http://www.cna.com.tw/News/firstnews/' + pathname_parts[4];
        ret.normalized_id = 'www.cna.com.tw/firstnews/' + pathname_parts[4];
        return ret;
      }
      break;

    case 'www.chinatimes.com':
      // Ex: http://www.chinatimes.com/newspapers/蠻牛再起-3登年終球王-20131108000743-260111
      // {newspapers|realtimenews}
      // {$title-}{$time-id}
      // $title 可能包含 - ，$time/$id 一定要吻合才能看到
      var pathname_parts = url_parts['pathname'].split('/');

      // 一定是 newspapers or realtimenews
      if (pathname_parts[1] != 'newspapers' && pathname_parts[1] != 'realtimenews') {
        break;
      }
      var title_parts = pathname_parts[2].split('-');
      // 如果網址後面的以 - 分開不到兩樣東西表示非合法網址
      if (title_parts.length < 2) {
        break;
      }
      var url_id = title_parts.pop();
      var url_time = title_parts.pop();
      
      ret.normalized_url = 'http://www.chinatimes.com/' + pathname_parts[1] + '/' + url_time + '-' + url_id;
      ret.normalized_id = 'www.chinatimes.com/' + pathname_parts[1] + '/' + url_time + '/' + url_id;
      return ret;
      console.log(title_parts.pop());
      break;


    case 'www.appledaily.com.tw':
      // Ex: http://www.appledaily.com.tw/realtimenews/article/finance/20131225/314703/【台股開盤】開高上漲11點
      // /{appledaily|realtimenews} 不能換掉
      // /article
      // /{$category} 3c, beauty, entertainment ... 可以任意更換
      // /YYYYMMDD 日期，不能任意更換
      // /{$ID}
      // /{$TITLE} 可以拿掉
      var pathname_parts = url_parts['pathname'].split('/');
      if ('article' != pathname_parts[2]) {
        // 不是新聞網址
        break;
      }

      ret.normalized_url = 'http://www.appledaily.com.tw/' + pathname_parts[1] + '/article/local/' + pathname_parts[4] + '/' + pathname_parts[5];
      ret.normalized_id = 'www.appledaily.com.tw/' + pathname_parts[1] + '/' + pathname_parts[4] + '/' + pathname_parts[5];
      return ret;
    }

    return null;
  };

  exports.parse_url = function(url){
    if ('undefined' !== typeof(document) && 'undefined' !== typeof(document.createElement)) {
      var a_dom = document.createElement('a');
      a_dom.href = url;
      return a_dom;
    } else {
      var u = require('url');
      return u.parse(url);
    }
  };
})(typeof exports === 'undefined'? this['URLNormalizer']={}: exports);
