module.exports = {
  test: {
    username: "root",
    password: "",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  local: {
    username: "root",
    password: "",
    database: process.env.MYSQL_DATABASE || "simpleTest-dev",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+08:00"
  },
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "simpleTest-dev",
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00"
  },
  staging: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "simpleTest-dev",
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00"
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "simpleTest",
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00"
  }
};
