// Explored multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)



// Default Arguments
let getScoreText = function (name = 'Player', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)


// Challenge Tip Calc
// 2 arg= total, tipPercent

let percentCalc = function (total, tipPercent = 20) {
    return total * (tipPercent / 100)
}


let answer = percentCalc(10)
console.log('Your tip would be: $' + answer)

//Challenge
// A 25% tip on $40 would be $10.

let name = 'Nyte'
console.log(`Hey, my name is ${name}!`)

