// The “Coin Flip” Game

let coinFlip = Math.floor(Math.random() * 100) + 1
// console.log(coinFlip)

// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
let choice = prompt('Heads or Tails?')

// Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
if (choice == 'Heads' && coinFlip >= 50) {
    document.write('The flip was heads and you chose heads...you win!')
}

else if (choice == 'Tails' && coinFlip >= 50) {
    document.write('The flip was heads but you chose tails...you lose!')

}
else if (choice == 'Heads' && coinFlip <=49) {
    document.write('The flip was tails but you chose heads...you lose!')
}

else if (choice == 'Tails' && coinFlip <=49) {
    document.write('The flip was tails and you chose tails...you win!')
}

else {
    alert('You did not select heads or tails')
}

// console.log(coinFlip)