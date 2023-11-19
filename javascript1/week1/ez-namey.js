const firstWords = ["Easy", "Awesome", "Corporate", "Fantastic", "Smart", "Delightful", "Artificial"];
const secondWords = ["Mechanics", "Technology", "Incorporated", "Intelligence", "Learning", "Management"];

const randomFirstWordIndex = Math.floor(Math.random() * firstWords.length);
const randomFirstWord = firstWords[randomFirstWordIndex];
const randomSecondWordIndex = Math.floor(Math.random() * secondWords.length);
const randomSecondWord = secondWords[randomSecondWordIndex];

const startupName = `${randomFirstWord} ${randomSecondWord}`;
console.log(startupName);