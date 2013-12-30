(function(exports){
  exports.query = function(url){
    var url_parts = this.parse_url(url);

    var ret = {};
    ret.query_url = url;

    switch (url_parts['hostname']) {
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
