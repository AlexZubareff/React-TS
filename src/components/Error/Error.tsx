import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/404.png'
import { ErrorContainer, ErrorHomeButton, ErrorImg } from './Error.styled'

export const Error = () => {
  const navigate = useNavigate()
  const goToMainPage = () => {
    navigate('/')
  }
  return (
    <ErrorContainer>
      <ErrorImg src={image} alt="404 error" />
      <ErrorHomeButton onClick={goToMainPage}>
        To Home page
      </ErrorHomeButton>
    </ErrorContainer>
  )
}
