// let stocks = {
//     Fruits : ["Strawberry","Apple","Mango","Banana"],
//     liquid : ["Water","Ice","Shakes"],
//     holder : ["Stick","Cup","Cone"],
//     toppings : ["Chocolate","Peanuts"]
// };
// let is_shop_open = true;
// let order = () => {
//     return new Promise( (resolve,reject)=>{
//         if(){
//             resolve()
//         }
//         else{
//             reject
//         }
//     })
// }

// async function order (){}

let is_shop_open = true;
let order = (time,work) =>{
    return new Promise( (resolve,reject)=>{
        if(is_shop_open)
        {
            setTimeout(() => {resolve( work() )},time)
        }
        else{
            reject(console.log("The shop is closed"))
        }
    })
}
order(2000, ()=>console.log(`${stocks.Fruits[2]} was selected.`))
.then(()=>{
    return order(0000,()=>console.log("Production has started."))
})
.then(() => {
    return order(2000,()=>console.log("The fruit was chopped."))
})
.then(() => {
    return order(1000,()=>{console.log(`${stocks.liquid[1]} & ${stocks.liquid[2]} are selected & mixed.`)})
})
.then(() => {
    return order(1000,()=>console.log("Machine has started."))
})
.then(() => {
    return order(1000,()=>{console.log(`IceCream is placed on ${stocks.holder[1]}.`)})
})
.then(() => {
    return order(3000,()=>console.log(`${stocks.toppings[1]} was selected.`))
})
.then(() => {
    return order(1000,()=>{console.log("IceCream was served.")})
})
.catch(() => {
    console.log("Coustmer left.")
})
.finally(() => {
    console.log("Thank You....Day Ended");
})



// let order = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//     call_production();
// },2000);

// };

// let production = () => {
//     setTimeout(()=>
//     {
//     console.log("Production has started");
//         setTimeout(() => {console.log("The fruit has been chopped");
//                             setTimeout(() => {console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                             setTimeout(() => {console.log("Machine was started");
//                             setTimeout(() => {console.log(`IceCream was placed on ${stocks.holder[2]}`);
//                             setTimeout(() => {console.log(`${stocks.toppings[0]} was addedd as toppings`);
//                             setTimeout(() => {console.log("Serve IceCream");
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000);
//             },1000);
//         },2000);
//     },0000);
// };
// order(0,production)
