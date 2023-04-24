//Conditional Statement

// if Statement 

var votingAge = 18;

var yourAge = 19;

if (yourAge >= votingAge) {

    console.log("You are eligible to vote.")
}


// if-else Statement

const votingAge = 18;

const yourAge = 17;

if (yourAge >= votingAge) {

    console.log(`You are eligible for driving licence.`)

}  else {

    const yearLeft = votingAge - yourAge

    console.log(`You are not eligible for voting. Year left for eligibility is ${yearLeft} years.`)
}

// if-else if-else Statement

const votingAge = 18;

const contestingAge = 25;

const yourAge = 17;

if (yourAge >= votingAge & yourAge >= contestingAge) {

    console.log("You are eligible for voting and contesting.")

} else if (yourAge >= votingAge & yourAge < contestingAge) {

    const yearLeft = contestingAge - yourAge;

    console.log(`You are only eligible for voting not contesting.Year left for eligibility for the contesting is ${yearLeft} years.`)

} else {

    const yearLeftV = votingAge - yourAge
    const yearLeftC = contestingAge - yourAge;

    console.log(`You are neither eligible for the voting nor for contesting. Year left for eligibility for the voting is ${yearLeftV} years and for  contesting is ${yearLeftC} years.`)
}



