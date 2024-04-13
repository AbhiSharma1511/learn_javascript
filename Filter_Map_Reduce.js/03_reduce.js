const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((acc, curr) => {
    console.log(`acc: ${acc} and curr: ${curr}`)
  return acc + curr;
}, 0);

console.log(myTotal);

const shoppinfCart = [
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Java",
        price: 1990
    },
    {
        itemName: "JavaScript",
        price: 2999
    }
]

const totalPrice = shoppinfCart.reduce((acc, item)=>{return acc + item.price}, 0)

console.log(totalPrice);