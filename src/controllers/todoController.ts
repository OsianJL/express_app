import { RequestHandler } from "express";
import { Todo } from "../model/todoModel";

const TODOS: Todo[] = [];
console.log(TODOS)

export const createTodo: RequestHandler = (req, res, next) => {
  console.log("Solicitud recibida: ", req.body);
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res
    .status(201)
    .json({ message: "todo correctly created", createTodo: newTodo });
};

export const getTodos: RequestHandler= (req, res, next) => {
  res.json({todos: TODOS})
};

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
  const todoID = req.params.id; 
  const updatedText = (req.body as { text: string }).text;

  const index = TODOS.findIndex((todo) => todo.id === todoID)

  if( index < 0 ) {
    throw new Error('todo no fue encontrado....')
  }

  TODOS[index] = new Todo(TODOS[index].id, updatedText)
res.json({message: 'Actualizado', updateTodos: TODOS[index]})
}



export const deleteTodos: RequestHandler<{id: string}> = (req, res, next) => {
  const todoID = req.params.id; 
  const index = TODOS.findIndex((todo) => todo.id == todoID)

  if (index < 0) {
    throw new Error ('Todo no fue encontrado...')
  }

  TODOS.splice(index, 1)

  res.json({message: "todo fue eliminado"})

  }
  


