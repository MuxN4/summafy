import React from 'react'
import Hero from './components/Hero'
import Preview from './components/Preview'

import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Preview />
      </div>
    </main>
  )
}

export default App