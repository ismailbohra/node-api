const joi = require("joi");
// const errorFunction = require("../../utils/errorFunction");

const validation = joi.object({
     userName: joi.string().alphanum().min(3).max(25).trim(true).required(),
     email: joi.string().email().trim(true).required(),
     password: joi.string().min(5).trim(true).required(),
     enrollment: joi.string().min(5).trim(true).required().uppercase(),
     mobileNumber: joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
     birthYear: joi.number().integer().min(1950).max(2005)
});
const userValidation = async (req, res, next) => {
	const payload = {
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password,
        enrollment:req.body.enrollment,
		mobileNumber: req.body.mobileNumber,
		birthYear: req.body.birthYear,
	};

	const { error } = validation.validate(payload);
	if (error) {
		res.status(406);
        console.log(error)
		return res.json(
			// errorFunction(true, `Error in User Data : ${error.message}`)
		);
	} else {
		next();
	}
};
module.exports = userValidation;