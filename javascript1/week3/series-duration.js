const AVERAGE_LIFESPAN_IN_YEARS = 80;
const AVERAGE_LIFESPAN_IN_MINUTES = AVERAGE_LIFESPAN_IN_YEARS * 365 * 24 * 60;

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];

function logOutSeriesText() {
    let totalMinutes = 0;
    for (const series of seriesDurations) {
        const seriesMinutes = (series.days * 24 + series.hours) * 60 + series.minutes;
        console.log(`${series.title} took ${(seriesMinutes / AVERAGE_LIFESPAN_IN_MINUTES * 100).toFixed(3)}% of my life`);
        totalMinutes += seriesMinutes;
    }

    console.log(`\nIn total that is ${(totalMinutes / AVERAGE_LIFESPAN_IN_MINUTES * 100).toFixed(3)}% of my life`);
}

logOutSeriesText();
