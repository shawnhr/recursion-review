// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  //null
  if(json === 'null'){
  	return null;
  }
  //boolean(true)
  if(json === 'true'){
  	return true;
  }
  //boolean(false)
  if(json === 'false'){
  	return false;
  }
  //undefined
  if(json === 'undefined'){
  	return undefined;
  }
  //number
  if(Number(json)!== NaN){
  	return Number(json);
  }
  //string
  var arr = json.split('');
  if(arr[0] === '\"'){
  	return arr.slice(1, arr.length -1).join(''); 
  }
  //array
  if(arr[0] === '['){
  	var str = arr.slice(1, arr.length -1).join('');
  	var parArr = str.split(',');
  	for(var i = 0; i < parArr.length; i++){
  		parArr[i] = parseJSON(parArr[i]);
  	}
  	return parArr;
  }
  //obj
  if(arr[0] === '{'){
  	var obj = {};
  	var str = arr.slice(1, arr.length -1).join('');
  	var parArr = str.split(',');
  	var result = parArr.split(':');
  	for(var i =0; i < result.length;i++){
  		obj[parseJSON(result[i])] = parseJSON(result[i+1]);
  	}
  	return obj;
  }


};
