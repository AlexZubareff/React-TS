import classes from './Header.module.scss'
import { HeaderStyle, HeaderContainer, HeaderNavLink } from './Header.style'

export const Header = () => {
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
      </HeaderContainer>
    </HeaderStyle>
  )
}
