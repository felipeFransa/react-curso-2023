import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Counter } from './components/Counter/Counter';

const app = () => {
  const [firstName, setFirstName] = useState('Felipe')
  const [logoName, setLogoName] = useState('Developers')
  
  const handleClick = () => {
    setLogoName('Novo Logo')
  }
  return (
    <div>
      <Header title={logoName}/>
      <button onClick={handleClick}>Clique aqui</button>
      <Counter/>
    </div>
  )
}

export default app;