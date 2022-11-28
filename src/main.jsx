import React from 'react'
import ReactDOM from 'react-dom/client'

import { CalculatorPage } from './pages/Calculator'

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <CalculatorPage />
  </React.StrictMode>
)
