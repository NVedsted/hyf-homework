function whatToWear(temperature) {
    if (temperature < 10) {
        return "Winter jacket";
    } else if (temperature < 18) {
        return "Light jacket";
    } else if (temperature < 25) {
        return "T-shirt";
    } else {
        return "Swim suit and head straight for water!";
    }
}