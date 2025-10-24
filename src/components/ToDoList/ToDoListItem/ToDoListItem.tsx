import { IToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControls, ToDoItemControl, ToDoItemText } from './ToDoListItem.styled'
import trashIcon from '../../../assets/images/trash.png'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'

export const ToDoListItem = (props: { toDoItem: IToDo; deleteToDo: Function; updateToDo: Function }) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}></ToDoItemControl>
        <ToDoItemControl
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  )
}
