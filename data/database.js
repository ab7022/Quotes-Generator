const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    database = client.db("first-api");
}

function getDb() {
    if (!database) {
        return new Error("Database Not Connected");
    }
    return database;
}

module.exports = {
    initDb: initDb,
    getDb: getDb,
};
