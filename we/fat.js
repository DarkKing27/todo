
let arr = [1,2,3,4,5,6,7,8,9]; 
 const square = arr.map(a => a*a);
 console.log(square);
 const cube = arr.map(a => a*a*a);
 console.log(cube);
 const es6EvenNumbers = arr.filter(number => !(number%2));
 console.log(es6EvenNumbers);
 const isMultipleof3 = arr.filter(number => !(number%3));
 console.log(isMultipleof3);
