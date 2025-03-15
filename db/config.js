const Sequelize = require('sequelize');
const config = require('../config');

const getSequelize = async () => {
  const configDataBase = await config.getConfigDataBase();

  const sequelize = new Sequelize(
    configDataBase.database,
    configDataBase.username,
    configDataBase.password,
    {
      host: configDataBase.host,
      port: configDataBase.port, 
      dialect: 'mysql', 
      logging: false,
    }
  );

  try {
    await sequelize.authenticate();
  } catch (error) {
  }

  return sequelize;
};

module.exports = getSequelize();

