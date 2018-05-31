let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log("Account is locked. Please contact Administrator.")
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}



// Challenge
//it is freezing
// it is hot
//  it is great outside


let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is way too hot outside!')
} else {
    console.log('It is great outside!')
}