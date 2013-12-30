(function(exports){
  exports.query = function(url){
    var url_parts = this.parse_url(url);

    var ret = {};
    ret.query_url = url;

    switch (url_parts['hostname']) {
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
