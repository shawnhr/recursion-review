// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var arr = [];
  var nodeCheck = function(node){
  	if(node.classList && node.classList.contains(className)){
  		arr.push(node);
  	}
  	if(node.hasChildNodes){
  		for(var i = 0; i < node.childNodes.length; i++){
  			nodeCheck(node.childNodes[i]);
  		}
  	}
  };
  nodeCheck(document.body);
  return arr;  
};
