import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IToDo } from '../models/todo-item'
import { v4 as uuid} from 'uuid'

export interface TodoState {
  todos: IToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: IToDo = {
        id: uuid(),
        text: action.payload,
        isDone: false,
      }
      state.todos = [...state.todos, newToDo]
    },
    updateAction: (state, action: PayloadAction<IToDo>) => {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
         todo.isDone = !todo.isDone
        }
        return todo
      })
      state.todos = newTodos
    },
    deleteAction: (state, action: PayloadAction<IToDo>) => {
      const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      state.todos = newTodos
    },
  },
})

// Action creators are generated for each case reducer function
export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer
