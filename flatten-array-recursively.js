function flatten (array) {
  var flat = [];

  (function flattenRecursively (array) {
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
