const dogYearOfBirth = 1998;
const dogYearFuture = 2050;
const dogAge = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log(`You will be ${dogAge * 7} dog years old in ${dogYearFuture}`);
} else {
    console.log(`You will be ${dogAge} years old in ${dogYearFuture}`);
}

