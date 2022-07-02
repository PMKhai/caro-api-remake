const { MongoClient } = require('mongodb');
const config = require('./db.config');

const dbs = {
  production: {},
};

const connect = (uri) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((client) => client.db());

exports.initDB = async () => {
  const database = await connect(config.PROD_URI);
  dbs.production = database;
};

exports.dbs = dbs;
