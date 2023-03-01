import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Counter } from './components/Counter/Counter';
import { Form } from './components/Form/Form';
import * as GS from './styleGlobal'

const app = () => {
  const [logoName, setLogoName] = useState('Developers')
  
  const handleClick = (txt: string) => {
    setLogoName(txt)
  }
  return (
    <GS.GlobalContainer>
      <Header title={logoName}/>
      <Counter clickLogo={handleClick} />
      <Form/>
    </GS.GlobalContainer>
  )
}
export default app;