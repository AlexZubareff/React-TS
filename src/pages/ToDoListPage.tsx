import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { IToDo } from '../models/todo-item'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { createAction, deleteAction, updateAction } from '../feature/todoList'

export const ToDoListPage = () => {
  const notifyAdd = () => toast.success('Новая задача добавлена')
  const notifyDelete = () => toast.warning('Задача удалена')
  const notifyUpdate = () => toast.info('Задача обновлена')

  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const createNewToDo = (text: string) => {
    dispatch(createAction(text))
    notifyAdd()
  }

  const updateToDo = (todoItem: IToDo) => {
    dispatch(updateAction(todoItem))
    notifyUpdate()
  }

  const deleteToDo = (todoItem: IToDo) => {
    dispatch(deleteAction(todoItem))
    notifyDelete()
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer position="bottom-right" theme="colored" autoClose={2000} hideProgressBar={true} />
    </>
  )
}
