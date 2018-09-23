function _chunk(array, index) {
  var result = [];
  for (var i = 0, len = array.length; i < len; i += index) {
    result.push(array.slice(i, i + index));
  }

  console.log(result)

}
_chunk([1, 2, 3, 4, 5], 2)