// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // for (var i = 0; i < json.length; i++) {
  //   if (json[i] === '{') {
  //     parseObject(json.slice(i));
  //   }
  // }


};
// var parseObject = function (str) {
//   //{"a":
//   var obj = {};
//   obj[pairArr][0] = pairArr[1]

//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === ':') {

//     }
//   }
//   return obj
// }
// { [a: 5, b: 6}
// ['a:5', 'b:6']
// var parseMember = function (str) {
//   var members = str.split(',');
//   for (var i = 0; i < members.length; i++) {
//     parsePair(members[i]);
//   }
// }

// var parsePair = function (str) {
//   var pairArr = str.split(':');
//   return pairArr;
// }

// var parseValue = function (value)

// var parseArr = function (str) {
//   var arr = [];
//   return arr
// }

// [1, 2, 3, { a: 5 }, 5]


// var elemArr = [];
// var elem = '';
// var index = 1;
// while (json[index] !== ',') {
//   elem += json[index]
//   index++;
// }
// elemArr.push(elem);