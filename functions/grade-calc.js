// arguments: student's score, total possible score
// print letter and numerical score
// 15/20 -> You got a C (75%)!

let studentGrade = function (studentScore, totalScore) {
    let grade = (studentScore / totalScore) * 100
    let letterGrade = ''

    if (grade >= 90) {
        letterGrade = 'n A!'

    } else if (grade >= 80) {
        letterGrade = ' B!'

    } else if (grade >= 70) {
        letterGrade = ' C!'

    } else if (grade >= 60) {
        letterGrade = ' D!'

    } else {
        letterGrade = ' F!'
    }

    return `You got a${letterGrade} (${grade}%)`
}

let result = studentGrade(9,20)
console.log(result)