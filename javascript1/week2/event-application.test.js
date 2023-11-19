const getEventWeekday = require("./event-application");

// Fake current date to be Friday, November 17th 2023.
jest.useFakeTimers({
    now: new Date(2023, 10, 17, 22, 5),
});

test("random days", () => {
    expect(getEventWeekday(0)).toBe("Friday");
    expect(getEventWeekday(1)).toBe("Saturday");
    expect(getEventWeekday(2)).toBe("Sunday");
    expect(getEventWeekday(3)).toBe("Monday");
    expect(getEventWeekday(4)).toBe("Tuesday");
    expect(getEventWeekday(5)).toBe("Wednesday");
    expect(getEventWeekday(6)).toBe("Thursday");
    expect(getEventWeekday(7)).toBe("Friday");
    expect(getEventWeekday(8)).toBe("Saturday");
});

test("missing or bad days", () => {
    expect(() => getEventWeekday()).toThrow("days must be provided as a number");
    expect(() => getEventWeekday("a")).toThrow("days must be provided as a number");
    expect(() => getEventWeekday(true)).toThrow("days must be provided as a number");
});

test("negative days", () => {
    expect(() => getEventWeekday(-1)).toThrow("days may not be negative");
    expect(() => getEventWeekday(-10)).toThrow("days may not be negative");
});