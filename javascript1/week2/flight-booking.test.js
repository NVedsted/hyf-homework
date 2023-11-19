const {getFullname, MAN, NEUTRAL, WOMAN} = require("./flight-booking");

test("simple name", () => {
    expect(getFullname("Benjamin", "Hughes")).toBe("Benjamin Hughes");
    expect(getFullname("Benjamin", "Hughes", false)).toBe("Benjamin Hughes");
});

test("missing first name", () => {
    expect(() => getFullname("", "Hughes")).toThrow("invalid name");
    expect(() => getFullname(undefined, "Hughes")).toThrow("invalid name");
    expect(() => getFullname(null, "Hughes")).toThrow("invalid name");
});

test("missing last name", () => {
    expect(() => getFullname("Benjamin", "")).toThrow("invalid name");
    expect(() => getFullname("Benjamin", undefined)).toThrow("invalid name");
    expect(() => getFullname("Benjamin", null)).toThrow("invalid name");
});

test("formal default/neutral name", () => {
    expect(getFullname("Benjamin", "Hughes", true)).toBe("Liege Benjamin Hughes");
    expect(getFullname("Benjamin", "Hughes", true, NEUTRAL)).toBe("Liege Benjamin Hughes");
});

test("formal man name", () => {
    expect(getFullname("Benjamin", "Hughes", true, MAN)).toBe("Lord Benjamin Hughes");
});

test("formal woman name", () => {
    expect(getFullname("Benjamin", "Hughes", true, WOMAN)).toBe("Lady Benjamin Hughes");
});

test("invalid gender", () => {
    expect(() => getFullname("Benjamin", "Hughes", true, "a")).toThrow("invalid gender");
});