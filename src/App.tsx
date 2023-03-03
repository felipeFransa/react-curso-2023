import { useState } from 'react'
import { Header } from './components/Header/Header';
import { Counter } from './components/Counter/Counter';
import { Form } from './components/Form/Form';
import { People } from './components/People/People';
import * as GS from './styleGlobal'

const app = () => {
  const [logoName, setLogoName] = useState('Developers')
  const [loading, setLoading] = useState(false)
  const [containerBG, setContainerBG] = useState(true)

  let people = [
    {name: 'Felipe', age: 26},
    {name: 'Fransa', age: 32},
    {name: 'Silva', age: 22},
    {name: 'Antonio', age:45}
  ]
  
  const hanldeLoading = () => {
    setLoading(!loading)
  }
  const handleClick = (txt: string) => {
    setLogoName(txt)
  }
  const handleContainerBG = () => {
    setContainerBG(!containerBG)
  }


  return (
    <GS.GlobalContainer bg={containerBG}>
      <GS.Button onClick={handleContainerBG}>Theme container</GS.Button>

      <Header title={logoName}/>
      <Counter clickLogo={handleClick} />
      <Form/>
      <GS.Button onClick={hanldeLoading}>Carregar!</GS.Button>
      {loading === true &&
        <ul>{people.map((item, index) => (<People key={index} data={item}/>))}</ul>}
      
    </GS.GlobalContainer>
  )
}
export default app;