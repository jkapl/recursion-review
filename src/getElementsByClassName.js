// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  var result = [];
  var node = document.body;
  var childNode = node.childNodes;
  //if node has childnode recursive call of getElementsByClassName
  //childNode
  for (var i=0; i < node.classList; i++) {
    if (node.classList[i] === className) {
      result.push(node);
    }
    if (childNode) {
      getElementsByClassName(className, childNode);
    }
  }  
  return result;

};
