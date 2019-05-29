// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var result = '{';


  var arrVal = [];
  var keyValues = [];
  //check string type
  if (typeof obj === 'string') {
    return '"' + obj + '"';
    //check number, boolean, null   
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return obj + '';
    //check array
  } else if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var result = '[';
      for (var i = 0; i < obj.length; i++) {
        result += (stringifyJSON(obj[i]) + ',');
      }
      if (result[result.length - 1] === ',') {
        result = result.slice(0, result.length - 1) + ']';
      }
      return result;
    }
  } else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var result = '{';
      for (var key in obj) {

        if (key === null || obj[key] === undefined || typeof obj[key] === 'function') {
          return undefined;
        } else {
          keyValues.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
        }
      }
      result += (keyValues.join(',') + '}');
    }
    return result;
  }
};
