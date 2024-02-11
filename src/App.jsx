import { useState } from 'react'
import './App.css'
import { Card } from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Card 
      imgSrc= "https://picsum.photos/300/200" 
      imgAlt= "random image" 
      title= "Card Title" 
      description= "This is the details of the picture,click learn more if you want to know" 
      buttonText= "Learn More"
      link="cardPage" />
      </div>
  )
}

export default App
