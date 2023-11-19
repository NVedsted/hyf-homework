const computeTravelTime = require("./travel");

test("test formatting", () => {
    expect(computeTravelTime({speed: 50, destinationDistance: 432})).toBe("8 hours and 38 minutes");
    expect(computeTravelTime({speed: 50, destinationDistance: 50})).toBe("1 hour");
    expect(computeTravelTime({speed: 60, destinationDistance: 1})).toBe("1 minute");
    expect(computeTravelTime({speed: 60, destinationDistance: 61})).toBe("1 hour and 1 minute");
    expect(computeTravelTime({speed: 60, destinationDistance: 62})).toBe("1 hour and 2 minutes");
    expect(computeTravelTime({speed: 60, destinationDistance: 120})).toBe("2 hours");
    expect(computeTravelTime({speed: 60, destinationDistance: 121})).toBe("2 hours and 1 minute");
    expect(computeTravelTime({speed: 60, destinationDistance: 122})).toBe("2 hours and 2 minutes");
});

test("zero speed", () => {
    expect(computeTravelTime({speed: 0, destinationDistance: 432})).toBe("Never");
});

test("zero distance", () => {
    expect(computeTravelTime({speed: 50, destinationDistance: 0})).toBe("Now");
});

test("zero speed and zero distance", () => {
    expect(computeTravelTime({speed: 0, destinationDistance: 0})).toBe("Now");
});

test("negative speed", () => {
    expect(() => computeTravelTime({speed: -100, destinationDistance: 100})).toThrow("speed cannot be negative");
});

test("negative distance", () => {
    expect(() => computeTravelTime({speed: 100, destinationDistance: -100})).toThrow("distance cannot be negative");
});

test("sub-minute time", () => {
    expect(computeTravelTime({speed: 100, destinationDistance: 1})).toBe("Any second now");
});