import { useState, useEffect } from "react";
import * as C from './style';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  },[firstName, lastName])

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  return (
    <C.Container>
      <C.ContainerForm>
        <C.inputText type="text" value={firstName} onChange={handleFirstName}/>
        <hr />
        <C.inputText type="text" value={lastName} onChange={handleLastName}/>
        <C.TextName>{`Seu nome é: ${fullName}`}</C.TextName>
      </C.ContainerForm>
    </C.Container>
  )
}