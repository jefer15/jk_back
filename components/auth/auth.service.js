const sequelize = require('../../db/config');
const jwt = require('../../utils/jwt')

const login = async (user) => {
  try {
    const sequelizeResolve = await sequelize;
    const [results, metadata] = await sequelizeResolve.query(
      `
      SELECT 
        id AS "id",
        NAME AS "name",
        email AS "email",
        identification AS "identification"
      FROM user
      WHERE email = :email AND password = :password
       `,
      {
        replacements: {
          email: user.email,
          password: user.password
        }
      },
    );

    if(results.length === 0)
      return { status: 200, code: 3, message: "User not exists" };

    const response = results[0]
    const token = await jwt.createToken(response)

    return {
      status: 200,
      code: 1,
      message: 'Success', data: {
        token,
        user: response
      },
    };
  } catch (err) {
    return { status: 500, code: 2, message: 'Error' };
  }
};

module.exports = {
  login
};
