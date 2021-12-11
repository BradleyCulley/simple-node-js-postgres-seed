module.exports = {
  HOST: "castor.db.elephantsql.com",
  USER: "<put username here>",
  PASSWORD: "<put password here>",
  DB: "<put DB name here>",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
