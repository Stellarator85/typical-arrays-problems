exports.min = function min (array) {
	if (array.length >= 1)
    return Math.min(...array);
  else return 0;
}

exports.max = function max (array) {
	if (array.length >= 1)
    return Math.max(...array);
  else return 0;
}

exports.avg = function avg (array) {
	function arrSum (array){
    return array.reduce(function(a,b){
    return a + b}, 0);}
	if (array.length >= 1)
    return arrSum(array) / +array.length;
	else return 0;
}
