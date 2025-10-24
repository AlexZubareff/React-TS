import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import { IToDo } from '../../models/todo-item'
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './ToDoList.styled'

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
      <ToDoListContainer>
        <ToDoListFailed>{checkedList()}</ToDoListFailed>
        <ToDoListCompleted>{unCheckedList()}</ToDoListCompleted>
      </ToDoListContainer>
    </>
  )
}
