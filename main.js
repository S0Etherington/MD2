// let backpack = [];

// backpack.push('pokeball')
// backpack.push('potion')
// backpack.push('poke-dollars')

// backpack.shift()
// backpack.splice(0, 1)

// let stone = 'water  stone'
// backpack.push(stone)

// backpack.pop()

// console.log(backpack.length)

// backpack.push('great ball','antidote','revive')

// let satchel = backpack.splice(3, 2)

// for(i = 0; i < backpack.length; i++)

// for(i = 0; i < 2; i++)

// console.log(`this is the item at the index of ${i} ${backpack[i]}`)

// if(backpack.length > 2){
//     for(i = 0; i < 2; i++)

// console.log(`this is the item at the index of ${i} ${backpack[i]}`)
// }else{
// console.log('backpack')
// }


// console.log(backpack)
// console.log(satchel)

// ``````````````````````````````````````````

let guessMe = 54

while (guessMe < 100) {
    console.log(`**${guessMe}`)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log(`Divisable by 4 or 5, added 25. ${guessMe}`)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log(`Divisable by 3, subtracted 27. ${guessMe}`)
    } else {
        guessMe += 3
        console.log(`Added 3. ${guessMe}`)
    }
    guessMe += 22
}
console.log(`final value ${guessMe}`)