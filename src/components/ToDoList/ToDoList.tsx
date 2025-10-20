import './ToDoList.scss'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import { IToDo } from '../../models/todo-item'

export const ToDoList = (props: { todos: IToDo[], deleteToDo: Function, updateToDo: Function }) => {


  const checkedList = () => {
    return props.todos
      .filter(todo => !todo.isDone)
      .map((todo, idx) => {
        return <ToDoListItem toDoItem={todo} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter(todo => todo.isDone)
      .map((todo, idx) => {
        return <ToDoListItem toDoItem={todo} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      })
  }
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list failed">{checkedList()}</ul>
        <ul className="todo-list completed">{unCheckedList()}</ul>
      </div>
    </>
  )
}
