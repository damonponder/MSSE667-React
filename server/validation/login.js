const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};


// Convert empty fields to an empty string so we can use validator functions

data.email = !isEmpty(data.email) ? data.email :  "";
data.password1 = !isEmpty(data.password1) ? data.password1 : "";

// Email  Checks
if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
} else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
}

// Password Checks
if (Validator.isEmpty(data.password1)) {
    errors.password1 = "Password field is required";
}

return {
    errors,
    isValid: isEmpty(errors)
    };
};