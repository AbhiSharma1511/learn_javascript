const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNums = myNums.map((num) => num + 10);
// console.log(myNums);
// console.log(newNums);
newNums = newNums.map((num) => {
  return num - 5;
});
// console.log(myNums);
// console.log(newNums);

// chaining....
const newNums2 = myNums
                .map((num) => num * 10)
                .map((num) => num - 2)
                .filter((num)=> num%4==0 )// only true and false case
console.log(newNums2);
