"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = require("../model/todoModel");
const TODOS = [];
console.log(TODOS);
const createTodo = (req, res, next) => {
    console.log("Solicitud recibida: ", req.body);
    const text = req.body.text;
    const newTodo = new todoModel_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ message: "todo correctly created", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = req.body.text;
    const index = TODOS.findIndex((todo) => todo.id === todoID);
    if (index < 0) {
        throw new Error('todo no fue encontrado....');
    }
    TODOS[index] = new todoModel_1.Todo(TODOS[index].id, updatedText);
    res.json({ message: 'Actualizado', updateTodos: TODOS[index] });
};
exports.updateTodos = updateTodos;
const deleteTodos = (req, res, next) => {
    const todoID = req.params.id;
    const index = TODOS.findIndex((todo) => todo.id == todoID);
    if (index < 0) {
        throw new Error('Todo no fue encontrado...');
    }
    TODOS.splice(index, 1);
    res.json({ message: "todo fue eliminado" });
};
exports.deleteTodos = deleteTodos;
