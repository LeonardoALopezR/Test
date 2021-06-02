//Its base and height are both equal to n. It is drawn using . symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size n.

function staircase(n) {
    for (let i = 0; i < n; i++){
        let step = ' ';

    for (let j= 0; j < n; j++){
        if (j <= i){
            step += '.'
        }
        else{
            step += ' '
        }
    }
    console.log(step)
    }
}

staircase(12)