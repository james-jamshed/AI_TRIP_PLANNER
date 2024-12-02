import { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl'>Welcome to landing page of ai -trp-planner</h1>
      <Button>Subsribe</Button>
    </>
  )
}

export default App
