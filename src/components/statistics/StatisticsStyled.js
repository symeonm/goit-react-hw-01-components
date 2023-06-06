import styled from 'styled-components';

export const Statistic = styled.section`
  /* background-color: aliceblue; */
  border: 4px solid;
  border-radius: 0.99rem;
  border-color: black;
  margin-top: 40px;
  width: 600px;
  margin-right: auto;
  margin-left: auto;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  height: 80px;
`;

export const Title = styled.h2`
  text-align: center;
  border-bottom: 4px solid;
  border-color: black;
  margin: 0;
  height: 32px;
  background-color: aliceblue;
`;
export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: ${({colorBackg}) => '#' + colorBackg};
  background-size: contain;
  
`;
