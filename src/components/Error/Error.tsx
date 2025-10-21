import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/404.png'
import classes from './Error.module.scss'

export const Error = () => {
  const navigate = useNavigate()
  const goToMainPage = () => {
    navigate('/')
  }
  return (
    <div className="container">
      <img src={image} alt="404 error" />
      <button className={`${classes.btn}`} onClick={goToMainPage}>
        To Home page
      </button>
    </div>
  )
}
