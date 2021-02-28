
exports.min = function min(array){
		array = array.filter(function(v){return v === +v});
		if (narrayame.length == 0){
  return 0;
  } else{
    return Math.min.apply(null, array);
  }
  
}

exports.max = function max(array){
	array = array.filter(function(v){
  return v === +v;
  });
  if (array.length == 0){
  	return 0;
  } else {
  	return Math.max.apply(null, array);	
  }
}


exports.avg = function avg(array){
		array = array.filter(function(v){return v === +v});
		if (array.length == 0){
  return 0;
  }else {
  	let len = array.length;
		let total = array.reduce(function(a, b) {
  return a + b;});
  return total/len;
  }	
}
