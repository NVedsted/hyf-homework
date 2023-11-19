const activities = [];
const limit = 60;

function addActivity(date, activity, duration) {
    if (typeof date !== "string") {
        throw new Error("date must be a string");
    }

    if (typeof activity !== "string") {
        throw new Error("activity must be a string");
    }

    if (typeof duration !== "number") {
        throw new Error("duration must be a number");
    }

    activities.push({date, activity, duration});
}

function showStatus(date = null) {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }

    let totalMinutes = 0;
    let count = 0;
    for (const activity of activities) {
        if (date === null || activity.date === date) {
            totalMinutes += activity.duration;
            count++;
        }
    }

    if (date === null) {
        console.log(`You have added ${count} activities. They amount to ${totalMinutes} min. of usage`);
    } else {
        console.log(`On ${date}, you had ${count} activities. They amount to ${totalMinutes} min. of usage`);
    }

    if (date === null && totalMinutes > limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}

function showMostTimeConsumingActivity() {
    if (activities.length === 0) {
        console.log("Add some activities before calling showMostTimeConsumingActivity");
        return;
    }

    let mostTimeConsumingActivity = activities[0];
    for (const activity of activities) {
        if (activity.duration > mostTimeConsumingActivity.duration) {
            mostTimeConsumingActivity = activity;
        }
    }

    console.log(`${mostTimeConsumingActivity.activity} on ${mostTimeConsumingActivity.date} is the most time-consuming activity with a mind-blowing ${mostTimeConsumingActivity.duration} min.`);
}

showStatus();
addActivity("23/7-18", "Youtube", 30);
showStatus();

addActivity("23/7-18", "Facebook", 20);
addActivity("4/9-18", "X, formerly known as Twitter", 15);
showStatus();

showMostTimeConsumingActivity();

showStatus("23/7-18");