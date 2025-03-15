const getConfigDataBase = async () => {
    return {
      database: process.env.DB_NAME || 'jk_bd',
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '3306',
    };
  };
  
  module.exports = {
    getConfigDataBase,
  };
  