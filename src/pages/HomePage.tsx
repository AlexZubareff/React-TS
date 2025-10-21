import { ListItem } from '../components/ListItem/ListItem'
import { IToDo } from '../models/todo-item'

interface ComponentProps {
  todos: IToDo[]
}

export const HomePage = ({todos}: ComponentProps) => {
  return (
    <div className="container">
      {todos.map((todo: IToDo, idx: number) => {
        return <ListItem todo={todo} key={idx} />
      })}
    </div>
  )
}
