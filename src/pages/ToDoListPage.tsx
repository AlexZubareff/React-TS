import { useState } from 'react'
import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { IToDo } from '../models/todo-item'
import { ToastContainer, toast } from 'react-toastify'

export const ToDoListPage = () => {
  const notifyAdd = () => toast.success('Новая задача добавлена')
  const notifyDelete = () => toast.warning('Задача удалена')
  const notifyUpdate = () => toast.info('Задача обновлена')
  const [todos, setTodos] = useState<IToDo[]>([])

  const createNewToDo = (text: string) => {
    const newToDo: IToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    }
    setTodos([...todos, newToDo])
    notifyAdd()
  }

  const updateToDo = (todoItem: IToDo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoItem.id) {
        todoItem.isDone = !todo.isDone
      }
      return todo
    })
    setTodos(newTodos)
    notifyUpdate()
  }

  const deleteToDo = (todoItem: IToDo) => {
    const newTodos = todos.filter(todo => todo.id !== todoItem.id)
    setTodos(newTodos)
    notifyDelete()
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" theme="colored" autoClose={2000} hideProgressBar={true} />
    </>
  )
}
