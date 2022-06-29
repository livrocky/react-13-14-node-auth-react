require('dotenv').config();

const PORT = process.env.PORT || 5000;

// db config
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cao24',
  port: '8889',
};

module.exports = {
  PORT,
  dbConfig,
};
