const getStudentManager = require("./student-manager");

const logSpy = jest.spyOn(console, "log").mockImplementation();

beforeEach(() => {
    logSpy.mockClear();
});

test("can add student", () => {
    const manager = getStudentManager();

    manager.addStudentToClass("Nicklas");

    expect(manager.getNumberOfStudents()).toBe(1);
});

test("fails to add student once at limit", () => {
    const manager = getStudentManager();

    const name = "Bjarne";
    fillUpClass(manager);

    expect(manager.getNumberOfStudents()).toBe(6);
    expect(() => manager.addStudentToClass(name)).toThrow("no more room");
    expect(logSpy).toBeCalledWith("Cannot add more students to class 07");
});

test("fails to add empty name", () => {
    const manager = getStudentManager();

    expect(() => manager.addStudentToClass("")).toThrow("no empty name");
});

test("no duplicates", () => {
    const manager = getStudentManager();

    const name = "Nicklas";
    manager.addStudentToClass(name);

    expect(() => manager.addStudentToClass(name)).toThrow("already enrolled");
    expect(logSpy).toBeCalledWith(`Student ${name} is already in the class`);

});

test("always accommodate the queen", () => {
    const manager = getStudentManager();

    fillUpClass(manager);

    manager.addStudentToClass("Queen");
    expect(manager.getNumberOfStudents()).toBe(7);
});

function fillUpClass(manager) {
    manager.addStudentToClass("Nicklas");
    manager.addStudentToClass("Martin");
    manager.addStudentToClass("Nicolaj");
    manager.addStudentToClass("Simon");
    manager.addStudentToClass("Brian");
    manager.addStudentToClass("Mads");
}