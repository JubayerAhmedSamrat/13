

// with for loop---------------------------------------------------------------
// for(let num = 1; num <=100; num++){
//     if(Math.sqrt(num) % 1 === 0 && num !== 1){
        
//         console.log(num);
//         break;
//     }
    
// }
// with while loop------------------------------------------------------------
let num = 1;
while(num <= 100){
    if(Math.sqrt(num) % 1 === 0 && num !== 1){
        console.log(num);
        break;
    }
    
    num++;
}