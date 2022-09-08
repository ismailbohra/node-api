module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    name: {
      type: Sequelize.STRING
    },
    computer_code: {
      type: Sequelize.INTEGER
    },
    enrollment: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATE
    }
  },{
    timestamps:false
  });

  return Tutorial;
};
