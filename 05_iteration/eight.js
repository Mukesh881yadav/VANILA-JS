const shoppingCart = [
    {
        itemName: "js course",
        price: 1
    },
    {
        itemName: "py course",
        price: 3
    },
    {
        itemName: "mobile dev course",
        price: 2
    },
    {
        itemName: "data science course",
        price: 2
    },
]

const priceToPay = shoppingCart.reduce((acc, item) =>{
     return acc+item.price;
},0)

console.log( priceToPay);