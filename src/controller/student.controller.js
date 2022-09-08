const db = require("../model/index");
const Student = db.student;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

  const student = {
    name:req.body.name,
    computer_code:req.body.computer_code,
    enrollment:req.body.enrollment,
    email:req.body.email,
    dob:req.body.dob
  };

  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    });
};


exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Student.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Student with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Student with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Student.update(req.body, {
    where: { id: id }
  })
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id }
  })
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });
};

exports.auth=(req,res)=>{
  const computer_code=req.body.computer_code;
  const dob=req.body.dob

Student.findOne({
    where:{
      computer_code:computer_code
    }
  })
  .then(data => {
    if (data != null) {
      res.send({
        data:data,
        message: "student exist"
      });
    } else {
      res.send({
        data:data,
        message: `incorrect credentials`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error to connect from table "
    });
  });

}
