const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://rukkaiyamusakargi94:PPFh0n1iOBaMPPCH@cluster0.kcav6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'taskmaster';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const tasksCollection = db.collection('tasks');
    // Use the tasksCollection to perform CRUD operations
  }
});
module.exports = db;
