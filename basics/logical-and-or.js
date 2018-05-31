let temp = 12

if (temp >=60 && temp <=90) {
    console.log('It is very nice outside!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Meh. Do what ya want.')
}

// Challenge

// are both vegan, only offer vegan
// at least one vegan, offer both
// if neither offer anything on menu

let isGuestOneVegan = false
let isGuestTwoVegan = false


if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here is the vegan specials')
} else if (isGuestOneVegan || isGuestTwoVegan) {
        console.log('Here are both menu specials')
} else {
    console.log('Here is the menu')
}




