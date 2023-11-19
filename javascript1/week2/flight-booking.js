const MAN = "man";
const WOMAN = "woman";
const NEUTRAL = "neutral";

function getFullname(firstname, surname, useFormalName = false, gender = NEUTRAL) {
    if (!firstname || !surname) {
        throw new Error("invalid name");
    }

    let prefix = "";

    if (useFormalName) {
        switch (gender) {
            case MAN:
                prefix = "Lord ";
                break;
            case WOMAN:
                prefix = "Lady ";
                break;
            case NEUTRAL:
                prefix = "Liege ";
                break;
            default:
                throw Error("invalid gender");
        }
    }

    return `${prefix}${firstname} ${surname}`;
}

module.exports = {
    MAN,
    WOMAN,
    NEUTRAL,
    getFullname,
};