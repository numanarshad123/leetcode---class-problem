

// const arr = [
//   [5, 4], // 0
//   [9, 2, 10,9, 2], // 1
//   [7, 15, 7], // 2
//   [7], // 2
// ];


// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[i][j]);
//   }
// }



const matrix1 = [
  [3, 2, 5],
  [5, 4, 6],
  [1, 0, 90],
];
const matrix2 = [
  [7, 2, 1],
  [5, 9, 2],
  [1, 0, 19],
];

const result=[]

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
   result1 =(matrix1[i][j] + matrix2[i][j]);
   result.push(result1);
  }
  // console.log(result)
}
console.log(result)
