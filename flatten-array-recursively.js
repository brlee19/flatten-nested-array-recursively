function flatten (array) {
  var flat = [];

  (function flattenRecursively (array) {
    array.forEach(function(element) {
      if (Array.isArray(element)) {
        flattenRecursively(element);
      } else {
        flat.push(element);
      }
    });
  }) (array);

  return flat;
}

console.log(flatten([1,[2, [3, [[5]]]],[[[[4], 67]]]]));
