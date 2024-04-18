import inquirer from "inquirer";


const currency:any   = { 
    USD: 1,
    EUR: 0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
};

 let user_answer:any =  await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter To Currency",
            type:"list",
            choices:['USD',"EUR",'GBP','INR','PKR']
        },
        {
            name:"tO",
            message:"Enter to currency ",
            type:"list",
            choices:['USD',"EUR",'GBP','INR','PKR']
        },
        {
            name:"amount",
            message:"Enter Your Amounr",
            type:"number"
        }
    ]
 )
 let formAmount = currency[user_answer.from]
 let toAmount = currency[user_answer.to]
 let amount = user_answer.amount
 let baseAmount = amount / formAmount
let convertedAmount = baseAmount * toAmount
 console.log(formAmount);
 console.log(toAmount);
 console.log(amount);
   
