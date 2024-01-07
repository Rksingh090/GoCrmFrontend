import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/global/index.css';
import './styles/global/colors.css';
import './styles/global/utils.css';
import './styles/global/radix-ui.css';

import AppContextProvider from './context/appContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
  ,
)
