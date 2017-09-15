// function flatten(array) {
//   return array.reduce(function(newArr, element) {
//       return newArr.concat(element);
//   }, []);
// }

function flatten (array) {
  var flat = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flattenRecursively(array[i]);
      } else {
        flat.push(array[i]);
      }
    }
  }) (array);
  
  return flat;
}

console.log(flatten([1,[2, [3, [[5]]]],[[[[4], 67]]]]));
