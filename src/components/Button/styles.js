import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: #fafafa;
  border: 1px solid #fafafa;
  border-radius: 20px;
  width: 80%;
  height: 62px;
  overflow: hidden;
  font-size: 20px;
  cursor: pointer;
  transition: all .1s;
  &:hover{
    filter: brightness(.9);
  }
`