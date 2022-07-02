const databaseConfig = {
  USER: 'khai_pham',
  PASSWORD: '123456a',
};

module.exports = {
  PROD_URI: `mongodb+srv://${databaseConfig.USER}:${databaseConfig.PASSWORD}@db.hd7kx.mongodb.net/?retryWrites=true&w=majority`,
};
