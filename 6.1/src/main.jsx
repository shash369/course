import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Memo from './Memo.jsx'
import Keys from './Keys.jsx'
import Wrapper from './Wrappre.jsx'
import UseefHook from'./UseEffect.jsx'
import AxiosUseefect from './axiosUseeffect.jsx'
import Try from './Try.jsx'
import UseCallBack from './useCallBack.jsx'
import Usememo from './Usememo.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}

    {/* <Memo /> */}
    {/* <Keys /> */}
    {/* <Wrapper /> */}
    {/* <UseefHook /> */}
    {/* <AxiosUseefect />*/}
    {/* <Try /> */}
    {/* <UseCallBack /> */}
    <Usememo />
    

  </>,
)
