import styled from 'styled-components';



export const Status = styled.span`
display: block;
width: 30px;
height: 30px;
background-color: ${({isOnline}) => isOnline === true ? 'green' : 'red' };
border: 1px solid;
border-radius: 50%;
border-color: black;
`

export const Item = styled.li`
display: flex;
justify-content: center;
gap: 50px;
width: 600px;
height: 100px;
border-radius: 0.99rem;
border: 4px solid;
  border-color: black;
  margin-right: auto;
  margin-left: auto;
  background-color: aliceblue;
  align-items: center;
`