import styled from "styled-components";

type ContainerProps = {
  bg: boolean
}

export const GlobalContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bg ?  '#50595c' : '#f8f8d6'};
`
export const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  background-color: #50595c;
  color: #f8f8d6;
  margin: 10px;
`