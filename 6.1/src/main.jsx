import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Memo from './Memo.jsx'
import Keys from './Keys.jsx'
import Wrapper from './Wrappre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Memo /> */}
    {/* <Keys /> */}
    <Wrapper />
  </StrictMode>,
)
