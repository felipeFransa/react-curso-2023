import { useState } from 'react'
import { Header } from './components/Header/Header';

const app = () => {
  const [firstName, setFirstName] = useState('Felipe')

  return (
    <div>
      <Header/>
      {firstName}
    </div>
  )
}

export default app;