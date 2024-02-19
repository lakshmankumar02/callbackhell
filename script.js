/*************** Arrow Functions in JavaScript ***************/

// console.log("Hello");

// setTimeout(()=>{
//     console.log("This will execute later");
// }, 3000);

// console.log("World");

// function getCheese(){
    // yaha setTimeout ke inside humne koi anonymous function nahi banaya 
    // ye check karne ke liye ki ye cheese return karta hai ya nahi
//     setTimeout(che = () => {
        // const cheese = "🧀";
//         console.log("Here is your cheese", cheese);
//         return cheese; 
            // in real function down the line
//         // after calling getCheese function it will not return cheese because 
//         // it is defined in anonymous function inside setTimeout function so 
//         // it is of no use so commented it.
//     }, 2000);
//     che(); // yaha se print hoga console wala
//     console.log(che()); /// yaha jo cheese return kiye the wo bhi print hoga
//     // return undefined;
//     // if we don't return anything by default the function return undefined.
// };
// console.log(getCheese());

function getCheese(){
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is your cheese", cheese);
    }, 2000);
};
// console.log(getCheese());

// getCheese((cheese)=>{
//     console.log("got the cheese", cheese);
// });

getCheese((cheese)=>{
    console.log("got the cheese", cheese);
});

