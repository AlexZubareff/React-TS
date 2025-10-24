import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListItemLink = styled(Link)<{color: string}>`
  text-decoration: none;
  padding: 10px;
  color:${(props)=>props.color};
`
