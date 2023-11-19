let name = null;
const tasks = [];
let timer = null;

function commandMatch(prefix, suffix, command) {
    let lowerCaseCommand = command.toLowerCase();

    if (prefix && !lowerCaseCommand.startsWith(prefix)) {
        return false;
    }
}

function parseCommand(command, prefix, suffix) {

}

function getReply(command) {
    console.log(`Question:\n${command}\nAnswer:`);

    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const NAME_COMMAND_PREFIX = "hello my name is ";
    const ADD_TODO_PREFIX = "add ";
    const ADD_TODO_SUFFIX = "to my todo";
    const REMOVE_TODO_PREFIX = "remove ";
    const REMOVE_TODO_SUFFIX = "from my todo";
    const MATH_PREFIX = "what is ";
    const MATH_SUFFIX = "?";
    const SET_TIMER_PREFIX = "set a timer for ";
    const SET_TIMER_SUFFIX = " minutes";

    let lowerCaseCommand = command.toLowerCase();
    if (lowerCaseCommand.startsWith(NAME_COMMAND_PREFIX)) {
        name = command.slice(NAME_COMMAND_PREFIX.length).trim();
        console.log(`Nice to meet you ${name}!`);
    } else if (lowerCaseCommand === "what is my name?") {
        if (name) {
            console.log(`Your name is ${name}!`);
        } else {
            console.log("I don't know your name.");
        }
    } else if (lowerCaseCommand.startsWith(ADD_TODO_PREFIX) && lowerCaseCommand.endsWith(ADD_TODO_SUFFIX)) {
        const task = command.slice(ADD_TODO_PREFIX.length, -ADD_TODO_SUFFIX.length).trim();
        tasks.push(task);
        console.log(`${task} added to your todo!`);
    } else if (lowerCaseCommand.startsWith(REMOVE_TODO_PREFIX) && lowerCaseCommand.endsWith(REMOVE_TODO_SUFFIX)) {
        const task = command.slice(REMOVE_TODO_PREFIX.length, -REMOVE_TODO_SUFFIX.length).trim();
        const taskIndex = tasks.indexOf(task);

        if (taskIndex === -1) {
            console.log(`${task} was not on your todo!`);
        } else {
            tasks.splice(taskIndex, 1);
            console.log(`Removed ${task} added to your todo!`);
        }
    } else if (lowerCaseCommand === "what is on my todo?") {
        if (tasks.length === 0) {
            console.log("You have no todos.");
        } else if (tasks.length === 1) {
            console.log(`You have 1 todo: ${tasks[0]}`);
        } else if (tasks.length === 2) {
            console.log(`You have 2 todos: ${tasks[0]} and ${tasks[1]}`);
        } else {
            const last = tasks[tasks.length - 1];
            const prior = tasks.slice(0, -1);
            console.log(`You have ${tasks.length} todos: ${prior.join(", ")}, and ${last}.`);
        }
    } else if (lowerCaseCommand === "what day is it today?") {
        const today = new Date();
        console.log(`Today is the ${today.getDate()}. of ${MONTH_NAMES[today.getMonth()]} ${today.getFullYear()}.`);
    } else if (lowerCaseCommand.startsWith(MATH_PREFIX) && lowerCaseCommand.endsWith(MATH_SUFFIX)) {
        const math = command.slice(MATH_PREFIX.length, -MATH_SUFFIX.length).trim();

        // Pray it is math and not some insane JS
        const result = eval(math);

        console.log(`The answer is ${result}.`);
    } else if (lowerCaseCommand.startsWith(SET_TIMER_PREFIX) && lowerCaseCommand.endsWith(SET_TIMER_SUFFIX)) {
        const time = parseInt(command.slice(SET_TIMER_PREFIX.length, -SET_TIMER_SUFFIX.length).trim());

        if (timer) {
            console.log("You already have a timer!");
        } else {
            timer = setTimeout(() => console.log("Timer done."), time * 60 * 1000);
            console.log(`Timer set for ${time} minutes`);
        }
    } else if (lowerCaseCommand === "stop my timer") {
        if (timer) {
            clearTimeout(timer);
            console.log("I stopped your timer!");
        } else {
            console.log("You don't have a timer!");
        }
    } else {
        console.log("I did not understand.");
    }

    console.log();
}

getReply("what is my name?");
getReply("Hello my name is Nicklas");
getReply("what is my name?");
getReply("stop my timer");
getReply("set a timer for 1 minutes");
getReply("set a timer for 1 minutes");
getReply("stop my timer");
getReply("what is on my todo?");
getReply("add fishing to my todo");
getReply("what is on my todo?");
getReply("add programming to my todo");
getReply("what is on my todo?");
getReply("add sleeping to my todo");
getReply("what is on my todo?");
getReply("remove fishing from my todo");
getReply("what is on my todo?");
getReply("what day is it today?");
getReply("what is 4 * 5 + 7?");

// Let's just pretend you cannot do this.
getReply("what is getReply('Hello my name is hackerman');getReply('What is my name?')?");
getReply("what is my name?");
