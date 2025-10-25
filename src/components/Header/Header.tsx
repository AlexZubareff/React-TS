import { useDispatch } from 'react-redux'
import classes from './Header.module.scss'
import { HeaderStyle, HeaderContainer, HeaderNavLink, HeaderToggleButton, ThemeButton } from './Header.style'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
const dispatch = useDispatch()
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    console.log(isActive)
    return isActive ? `${classes.active} ${classes.link}` : classes.link

  }
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderNavLink to="/" className={getActiveClass}>
          ToDo
        </HeaderNavLink>
        <HeaderNavLink to="/list" className={getActiveClass}>
          List
        </HeaderNavLink>
        <HeaderToggleButton>
          <ThemeButton onClick={()=>dispatch(toggleThemeAction())}>Theme</ThemeButton>
        </HeaderToggleButton>
      </HeaderContainer>
    </HeaderStyle>
  )
}
