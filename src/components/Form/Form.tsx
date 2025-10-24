import { useState } from 'react'
import plusIcon from '../../assets/images/plus.png'
import { FormWrapper, FormBlock, FormLabel, FormField, FormControl } from './Form.styled'

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (text) {
      props.createNewToDo(text)
      setText('')
    }
  }

  return (
    <FormWrapper >
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField value={text} type="text" onChange={e => setText(e.target.value)} />
          <FormControl icon={plusIcon}/>
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}
