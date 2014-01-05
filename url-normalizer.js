(function(exports){
  exports.replace_var = function(data, matches, query){
    return data.replace(/{\$[^}]*}/g, function(str){
        var id = str.substr(2, str.length - 3);
        if (id.match('^[0-9]*$')) {
          return matches[parseInt(id)];
        }
        var params = exports.parse_str(query);
        return params[id];
    });
  };

  exports.query = function(url, cb){
    this.getCSVMap(function(csvmap){
      var url_parts = exports.parse_url(url);
      var ret = {};
      ret.query_url = url;

      for (var i = 1; i < csvmap.length; i ++) {
        if (csvmap[i][0] != url_parts['hostname']) {
          continue;
        }
        var matches = csvmap[i][1].match(/'(.*)'([a-z]*)/);
        var pattern = new RegExp(matches[1].replace('/', '\\/'), matches[2]);
        matches = pattern.exec(url_parts['pathname']);
        if (null === matches) {
          continue;
        }

        ret.normalized_url = exports.replace_var(csvmap[i][2], matches, url_parts['query']);
        ret.normalized_id = exports.replace_var(csvmap[i][3], matches, url_parts['query']);
        cb(ret);
      }
    });
  };

  exports.parse_str = function(query_str){
    if (query_str == '') {
      return {};
    }
    var terms = query_str.split('&');
    var ret = {};
    for (var i = 0; i < terms.length; i ++) {
      var key_value = terms[i].split('=');
      if (key_value.length < 2) {
        continue;
      }
      var key = decodeURIComponent(key_value.shift());
      var value = decodeURIComponent(key_value.join('='));
      ret[key] = value;
    }
    return ret;
  }

  var csvmap = null;

  exports.getCSVMap = function(cb){
   if (null !== csvmap) {
     return cb(csvmap);
   }
   var fs = require('fs');
   fs.readFile('map.csv', 'ascii', function(err, data){
     csvmap = data.split("\n").map(function(line){ return line.split(','); });
     cb(csvmap);
   });
  },

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
