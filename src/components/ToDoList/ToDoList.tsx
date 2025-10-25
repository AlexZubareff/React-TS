import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import { IToDo } from '../../models/todo-item'
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './ToDoList.styled'

export const ToDoList = (props: { todos: IToDo[], deleteToDo: Function, updateToDo: Function }) => {


  const checkedList = () => {
    return props.todos
      .filter(todo => !todo.isDone)
      .map((todo) => {
        return <ToDoListItem toDoItem={todo} key={todo.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter(todo => todo.isDone)
      .map((todo) => {
        return <ToDoListItem toDoItem={todo} key={todo.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      })
  }
  return (
    <>
      <ToDoListContainer>
        <ToDoListFailed>{checkedList()}</ToDoListFailed>
        <ToDoListCompleted>{unCheckedList()}</ToDoListCompleted>
      </ToDoListContainer>
    </>
  )
}
