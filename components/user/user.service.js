const sequelize = require('../../db/config');

const register = async (user) => {
  try {
    const sequelizeResolve = await sequelize;
    const [results, metadata] = await sequelizeResolve.query(
      `
      INSERT INTO user (identification,
      name,
      email,
      password,
      log)
      VALUES (:identification,
        :name,
        :email,
        :password,
        JSON_OBJECT(
          'createdAt', NOW(),
          'timeLastChange', NOW()
        ) );
        `,
      {
        replacements: {
          identification: user.identification,
          name: user.name,
          email: user.email,
          password: user.password
        },
      },
    );

    return {
      status: 200, code: 1, message: 'Success',
    };
  } catch (err) {
    console.log(err)
    return { status: 500, code: 2, message: 'Error' };
  }
};

const findAll = async () => {
  try {
    const sequelizeResolve = await sequelize;
    const [results, metadata] = await sequelizeResolve.query(
      `
      select 
        id AS "id",
        NAME AS "name",
        email AS "email",
        identification AS "identification"
      from user
        `,
      {
        replacements: {}
      },
    );

    return {
      status: 200, code: 1, message: 'Success', data: results
    };
  } catch (err) {
    console.log(err)
    return { status: 500, code: 2, message: 'Error' };
  }
};

module.exports = {
  register,
  findAll
};
