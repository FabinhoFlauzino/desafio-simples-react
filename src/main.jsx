import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import GlobalStyle from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
