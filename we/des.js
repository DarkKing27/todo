 
 const arrvalue = ["one", "two", "three"];
 const [x, y, z] = arrvalue;
 console.log(x);
 console.log(y);
 console.log(z);
 const nest = {
 start: {
 x: 7,
 y: 7,
 },
 end: {
 x: 6,
 y: 9,
 },
 };
 const {
 start: { x: startX, y: startY },
 } = nest;
 console.log(startX, startY);
 const {
 end: { x: endX, y: endY },
 } = nest;
 console.log(endX, endY);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const [first, second, , , fifth] = arr;
 console.log(first, second, fifth);
 