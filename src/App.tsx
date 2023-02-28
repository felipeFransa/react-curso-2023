import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Counter } from './components/Counter/Counter';
import { GlobalContainer } from './styleGlobal'

const app = () => {
  const [firstName, setFirstName] = useState('Felipe')
  const [logoName, setLogoName] = useState('Developers')
  
  const handleClick = () => {
    setLogoName('Novo Logo')
  }
  return (
    <GlobalContainer>
      <Header title={logoName}/>
      <button onClick={handleClick}>Clique aqui</button>
      <Counter/>
    </GlobalContainer>
  )
}
export default app;