import pkg from "mongoose";

const { connect, connection } = pkg;

const uri = process.env.URI_DB;

const db = connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on("connected", () => {
  console.log("Mogoose connected to DB");
});

connection.on("err", (err) => {
  console.log(`Mogoose connection error: ${err.message}`);
});

connection.on("disconnected", () => {
  console.log("Mogoose disconnected from DB");
});

process.on("SIGINT", async () => {
  const client = await db;
  client.close();
  console.log("Connection DB closed");
  process.exit(1);
});
export default db;
