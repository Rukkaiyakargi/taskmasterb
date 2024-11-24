const express = require('express');
const PORT= 5500;
const app = express();
const db = require('./db');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TASKMASTER', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Adding authorization middleware
const authenticate = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  // Update task routes
  app.get('/tasks', authenticate, async (req, res) => {PublicKeyCredential.U7KJ
  });
  
  app.post('/tasks', authenticate, async (req, res) => {
  });
  db.collection('tasks').find().toArray(function(err, tasks) {
    if (err) {
      console.log(err);
    } else {
      console.log(tasks);
    }
  });
  app.post('/api/tasks', (req, res) => {
    const task = req.body;
    db.collection('tasks').insertOne(task, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error creating task' });
      } else {
        res.send({ message: 'Task created successfully' });
      }
    });
  });
  
  app.get('/api/tasks', (req, res) => {
    db.collection('tasks').find().toArray((err, tasks) => {
      if (err) {
        res.status(500).send({ message: 'Error retrieving tasks' });
      } else {
        res.send(tasks);
      }
    });
  });
  
  app.put('/api/tasks/:id', (req, res) => {
    const id = req.params.id;
    const task = req.body;
    db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: task }, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error updating task' });
      } else {
        res.send({ message: 'Task updated successfully' });
      }
    });
  });
  
  app.delete('/api/tasks/:id', (req, res) => {
    const id = req.params.id;
    db.collection('tasks').deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error deleting task' });
      } else {
        res.send({ message: 'Task deleted successfully' });
      }
    });
  });

  