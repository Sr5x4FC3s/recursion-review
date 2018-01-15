// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//base case is if it has the classname push it to the array
//check to see if has children then 
var getElementsByClassName = function(className) {
  // your code here
  var outputs = [];

  function checkNodes(node) {
    if (node.classList && node.classList.contains(className)) {
      outputs.push(node);
    }
    if (node.childNodes) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        checkNodes(children[i]);
      }
    } 
  }  
  checkNodes(document.body);
  return outputs;
};
