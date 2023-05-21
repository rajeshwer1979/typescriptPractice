var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 1] = "AUTHOR";
    ROLES[ROLES["USER"] = 2] = "USER";
    ROLES[ROLES["GUEST"] = 3] = "GUEST";
})(ROLES || (ROLES = {}));
var employees = {
    name: 'Leela',
    job: 'Web Developer',
    role: ROLES.ADMIN
};
var krishna = {
    name: 'Leela',
    job: 'Web Developer',
    role: ROLES.AUTHOR
};
