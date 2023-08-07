import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@primer/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Text as="h1" sx={{color: 'fg.onEmphasis', p: 2}}>
    Sai Charan Arishanpally
  </Text>
  <Text as="h2" sx={{color: 'fg.onEmphasis', p: 2}}>
    Welcome to my portfolio This site will be updated soon
  </Text>
      
    </>
  )
}

export default App
