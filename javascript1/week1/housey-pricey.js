const width = 8;
const depth = 10;
const height = 10;
const volumeInMeters = width * depth * height;
const gardenSizeInM2 = 100;
const expectedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const actualPrice = 1_000_000;

if (actualPrice < expectedPrice) {
    console.log("Peter and Julia are paying too little!");
} else if (actualPrice === expectedPrice) {
    console.log("Peter and Julia are paying the expected price!");
} else {
    console.log("Peter and Julia are paying too much!");
}