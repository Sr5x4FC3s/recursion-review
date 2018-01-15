// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // 
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj + '';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  }
  if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var objArr = [];
    for (var i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      if (keys[i] === undefined || keys[i] === 'functions') { // empty obj || obj === function
        return '{}';
      }
      objArr.push(stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]));
    }
    return '{' + objArr.join(',') + '}';
  }
};

//  '{'one': 'burger', 'two': 'pizza' }'