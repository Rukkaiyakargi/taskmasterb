const Task = require('../models/Task');
const jwt = require('jsonwebtoken');

exports.createTask = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const task = new Task({ ...req.body, userId: decoded.userId });
  await task.save();
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (task.userId.toString() !== decoded.userId) return res.status(403).json({ message: 'Forbidden' });
  res.json(task);
};
