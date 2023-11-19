const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(days) {
    if (typeof days !== "number") {
        throw new Error("days must be provided as a number");
    }

    if (days < 0) {
        throw new Error("days may not be negative");
    }

    const currentWeekdayIndex = (new Date()).getDay();
    const eventWeekdayIndex = (currentWeekdayIndex + days) % 7;
    return DAYS[eventWeekdayIndex];
}

module.exports = getEventWeekday;