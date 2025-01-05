import React ,{Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Navigator from './components/Navigator'
import Contextapi from './components/Contextapi'
// import { Suspense } from 'react'

// const Pag=React.lazy(()=>import('./components/About'))
//to check the lazy loading
const Pag = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/About')), 3000); // 3-second delay
  })
);
function App() {
  
  return (
      <>
      {/* <p>hello</p>
       <BrowserRouter>
          <Navigator />
            <Routes>
               <Route path='/'  element={<Landing />} />
               <Route path='/about' element={
                <Suspense fallback={<div><img src="/vite.svg" alt="" /></div>}>
                  <Pag />
                </Suspense>
               }/>
               <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter> */}

        <Contextapi />
      </>
  )
}


export default App
