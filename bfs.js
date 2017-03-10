//for nested arrays
function bfs(array, criteriaFn) {
  let current = array;
  let next = [];
  while (current) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i])
      }
    }
    current = next.shift();
  }  
  return null;
}
//for nested objects
function bfs(object, criteriaFn) {

}
//general solution for nested array or nested object 
function bfs(object, criteriaFn) {

}