import { IToDo } from '../../models/todo-item'
import { ListItemLink } from './ListItem.styled'

export const ListItem = ({ todo }: { todo: IToDo }) => {
  return (
    <>
      <ListItemLink to={`/list/${todo.id}`} target='_blank' rel='noreferrer' color={todo.isDone ? 'green' : 'red'}>
        {todo.text}
      </ListItemLink>
    </>
  )
}
