function getCandyHelper() {
    const CANDIES_PRICE_PER_GRAM = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03,
    };

    const amountToSpend = Math.random() * 100;

    const boughtCandyPrices = [];

    function addCandy(candyType, weight) {
        const pricePerGram = CANDIES_PRICE_PER_GRAM[candyType];

        if (!pricePerGram) {
            throw new Error("unknown candy");
        }

        boughtCandyPrices.push(pricePerGram * weight);
    }

    function canBuyMoreCandy() {
        let sum = 0;
        for (let price of boughtCandyPrices) {
            sum += price;
        }
        const canBuyMore = sum < amountToSpend;

        if (canBuyMore) {
            console.log("You can buy more, so please do!");
        } else {
            console.log("Enough candy for you!");
        }
    }
}