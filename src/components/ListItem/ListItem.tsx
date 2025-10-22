import classes from './ListItem.module.scss'
import { IToDo } from '../../models/todo-item'
import { Link } from 'react-router-dom'

export const ListItem = ({ todo }: { todo: IToDo }) => {
  return (
    <>
      <Link to={`/list/${todo.id}`} target='_blank' rel='noreferrer' className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}>
        {todo.text}
      </Link>
    </>
  )
}
