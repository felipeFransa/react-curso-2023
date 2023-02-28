import { useState } from 'react';

export const Counter = () => {
  const [firstNumber, setFirstNumber] = useState(0)

  const sum = () => {
    setFirstNumber(firstNumber + 1)
  }

  const sub = () => {
    setFirstNumber(firstNumber - 1)
  }
  const resert = () => {
    setFirstNumber(0)
  }
  return (
    <div>
      <h1>{firstNumber}</h1>
      <button onClick={sum}>Adicionar</button>
      <button onClick={sub}>Diminuir</button>
      <button onClick={resert}>Reserta</button>
    </div>
  )
}