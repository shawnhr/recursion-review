// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


  if( Array.isArray(obj) ){
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  }
  if (obj && typeof obj === 'object'){
    var arr = [];
    for( var key in obj) {
      if (obj[key] === undefined || typeof(obj[key]) === 'function'){
        continue;
      }
      arr.push(stringifyJSON(key)+ ":" + stringifyJSON(obj[key]));
    }
    return '{' + arr.join(',') + '}';
  }

  if( typeof obj === 'string' ){
   return '"' + obj + '"';
  }

  return '' + obj;
};
