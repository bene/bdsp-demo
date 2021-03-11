const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});
client.connect();

client
  .query(
    "CREATE TABLE IF NOT EXISTS answers (id SERIAL, name TEXT, answer1 TEXT, answer2 TEXT, answer3 TEXT)"
  )
  .then((res) => {
    console.log("Migrated database.");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
