const asyncHandler = require("express-async-handler");

const Todo = require("../models/TodoModel");
const User = require("../models/UserModel");

// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id }).sort({
    completed: 1,
  });
  res.status(200).json(todos);
});

// @desc Set todos
// @route POST /api/todos
// @access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const todo = await Todo.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(todo);
});

// @desc Update todos
// @route POST /api/todos
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found!");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  // });

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    [{ $set: { completed: { $eq: [false, "$completed"] } } }],
    { new: true }
  );

  res.status(200).json(updatedTodo);
});

// @desc Delete todos
// @route DELETE /api/todos
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the todo user
  if (todo.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await todo.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
