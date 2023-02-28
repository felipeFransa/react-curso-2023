import { useState } from 'react';
import * as C from './style';

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
    <C.Container>
      <C.ContainerCounter>
        <h1>{firstNumber}</h1>
        <C.Button onClick={sum}>Adicionar</C.Button>
        <C.Button onClick={sub}>Diminuir</C.Button>
        <C.Button onClick={resert}>Reserta</C.Button>
      </C.ContainerCounter>
    </C.Container>
  )
}