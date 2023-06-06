import styled from 'styled-components';

export const Profile = styled.div`
  text-align: center;
  border: 4px solid;
  border-radius: 0.99rem;
  border-color: black;
  width: 600px;
  height: 600px;
  margin-right: auto;
  margin-left: auto;
  background-color: aliceblue;
`;
export const Avatar = styled.img`
  margin-top: 30px;
  width: 300px;
  height: 300px;
`;
export const Name = styled.p`
  background-color: cadetblue;
  font-size: 40px;
  margin-bottom: 20px;
`;
export const Tag = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Location = styled.p`
  font-size: 20px;
`;
export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
