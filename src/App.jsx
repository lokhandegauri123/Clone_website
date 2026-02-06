import { Children, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './app.scss'
import Dock from './component/Dock'
import Nav from './component/Nav'
import { Rnd } from 'react-rnd'
import MacWindow from './component/windows/MacWindow'

function App() {

  return (
    <>
    <main className='app'>
      <Nav/>
      <Dock/>
     <MacWindow children="kdsffj"/>
      {/* <h1 >hello</h1>    */}
     


    </main>
    </>
  )
}

export default App
