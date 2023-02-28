import { useState } from 'react'
import { Header } from './components/Header/Header';

const app = () => {
  const [firstName, setFirstName] = useState('Felipe')
  const [logoName, setLogoName] = useState('Developers')

  return (
    <div>
      <Header title={logoName}/>
      {firstName}
    </div>
  )
}

export default app;