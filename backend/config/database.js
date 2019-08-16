module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'trigger',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    port: process.env.DB_PORT || 3306
  },
  // test: {
  //   username: process.env.DB_USER || 'root',
  //   password: process.env.DB_PASS || 'root',
  //   database: process.env.DB_NAME || 'crm',
  //   host: process.env.DB_HOST || 'localhost',
  //   dialect: 'mysql',
  //   port: process.env.DB_PORT || 3306
  // },
  // production: {
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   dialect: 'mysql',
  //   port: process.env.DB_PORT || 3306
  // }
};
