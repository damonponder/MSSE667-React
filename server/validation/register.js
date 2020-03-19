const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data)  {
    let errors = {};


// Convert empty fields to an empty string so we can use validator functions
data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
data.email = !isEmpty(data.email) ? data.email : "";
data.password1 = !isEmpty(data.password1) ?  data.password1 : "";
data.password2 = !isEmpty(data.password2) ? data.password2 : "";

// Name Checks
if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
}
if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
}

// Email Checks
if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
} else if (!Validator.isEmpty(data.email)) {
    errors.email = "Email is Invalid - Please Try Again"
}

// Password Checks
if (Validator.isEmpty(data.password1)) {
    errors.password1 = "Password field is Required";
}
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
}
if (!Validator.isLength(data.password1, { min: 8, max: 30 })) {
    errors.password1 = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password1, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};