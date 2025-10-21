import { useEffect, useState } from 'react'
import { IToDo } from '../models/todo-item'
import { useNavigate, useParams } from 'react-router-dom'

interface ComponentProps {
  todos: IToDo[]
}
export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams()
  const navigate = useNavigate()

const[todo, setTodo] = useState<IToDo>()

  useEffect(() => {
    const searchTodo = todos.find(todo => String(todo.id) === id)
    if(searchTodo){
      setTodo(searchTodo)
    } else{
      navigate('/404')
    }
  },[id,navigate,todos])

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  )
}
