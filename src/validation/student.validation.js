const joi = require("joi");

const validation = joi.object({
     name: joi.string().alphanum().min(3).max(25).trim(true).required(),
	 computer_code: joi.number().integer().min(11111).max(99999),
     enrollment: joi.string().min(5).trim(true).required().uppercase(),
     email: joi.string().email().trim(true).required(),
     dob: joi.number().integer().min(1950).max(2005)
});
const userValidation = async (req, res, next) => {
	console.log("validation called")
	const studentData = {
		name: req.body.name,
		computer_code:req.body.computer_code,
        enrollment:req.body.enrollment,
		email: req.body.email,
		dob: req.body.dob,
	};

	const { error } = validation.validate(studentData);
	if (error) {
		res.status(400).send(error);
	} else {
		next();
	}
};
module.exports = userValidation;