import React from 'react'
import ReactDOM from 'react-dom/client'
// import './assets/scss/normalize.scss'
// import './assets/scss/style.scss'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-v19-helmet-async'
import { router } from './router'
import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './pages/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
