function computeTravelTime(travelInformation) {
    if (travelInformation.speed < 0) {
        throw new Error("speed cannot be negative");
    }

    if (travelInformation.destinationDistance < 0) {
        throw new Error("distance cannot be negative");
    }

    if (travelInformation.destinationDistance === 0) {
        return "Now";
    }

    if (travelInformation.speed === 0) {
        return "Never";
    }

    const travelTotalMinutes = Math.floor(travelInformation.destinationDistance / travelInformation.speed * 60);
    const travelMinutes = travelTotalMinutes % 60;
    const travelHours = (travelTotalMinutes - travelMinutes) / 60;

    const parts = [];

    if (travelHours > 0) {
        parts.push(`${travelHours} ${travelHours === 1 ? "hour" : "hours"}`);
    }

    if (travelMinutes > 0) {
        parts.push(`${travelMinutes} ${travelMinutes === 1 ? "minute" : "minutes"}`);
    }

    return parts.length === 0 ? "Any second now" : parts.join(" and ");
}

module.exports = computeTravelTime;
