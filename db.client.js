const { Sequelize } = require("sequelize");

// database
const sequelize = new Sequelize(
  "postgres://postgree:MqvuiqJpDdeNLxFNAbpbZS60Ad5CIj7B@dpg-cn29mqf109ks7394hu4g-a/postgree_qlvd",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// authentication and synchronization
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() =>
    console.log(
      "Cannot connect to database, please check environment credentials"
    )
  );

module.exports = sequelize;
