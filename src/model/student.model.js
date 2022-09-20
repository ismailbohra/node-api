module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define(
    "tutorial",
    {
      name: {
        type: Sequelize.STRING,
      },
      computer_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        require: true,
      },
      enrollment: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Tutorial;
};
