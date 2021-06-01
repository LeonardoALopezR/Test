
let stairs = (n) =>{
    for(i = 1; i <= n; i++){
        console.log(' '.repeat(n-i) + '#'.repeat(i))
    } 
}


stairs(6)
