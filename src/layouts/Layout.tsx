import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Helmet } from 'react-v19-helmet-async'
import { GlobalStyle } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Layout = () => {
  const theme = useSelector((state: RootState)=>state.themeList.theme)
  return (
    <>
      <Helmet>
        <title>ToDo List</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../../public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"></link>
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  )
}
