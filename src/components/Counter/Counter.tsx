import { useState } from 'react';
import * as C from './style';

type Props = {
  clickLogo: (txt: string) => void;
}

export const Counter = ({ clickLogo }: Props ) => {
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
  const handleLogo = () => {
    clickLogo('Felipe Devops')
  }

  return (
    <C.Container>
      <C.ContainerCounter>
        <h1>{firstNumber}</h1>
        <C.Button onClick={sum}>Adicionar</C.Button>
        <C.Button onClick={sub}>Diminuir</C.Button>
        <C.Button onClick={resert}>Reserta</C.Button>
        <C.Button onClick={handleLogo}>Muda Logo</C.Button>
      </C.ContainerCounter>
    </C.Container>
  )
}