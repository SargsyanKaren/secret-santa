import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Snow from 'react-snow-effect';

import './App.css';
import logo2 from './assents/images/logo2.png';
import santa from './assents/images/santa.gif';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgb(100%, 71%, 66.1%), rgb(100%, 34.8%, 21.6%));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: ${({width}) => width};
`;

const Header = styled.div`
  padding: 10px 30px;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Content = styled.div`
  width: 80%;
  flex-grow: 1;
  background-color: rgba(0,0,0,.2);
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,.2);
  color: white;
  border-radius: 5px; 
  padding: 10px;
`;

const Button = styled.button`
  border: 4px solid rgb(53.4%, 9.1%, 1.5%);
  outline: none;
  border-radius: 20px;
  color: rgb(53.4%, 9.1%, 1.5%);
  background-color: white;
  padding: 5px 25px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.1s;
  margin: 5px 10px;
  :hover{
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,.4);
  }
`;

const Input = styled.input`
  outline: none;
  border: 2px solid rgba(53.4%, 9.1%, 1.5%, 0.7);
  padding: 3px;
  color: rgb(53.4%, 9.1%, 1.5%);
  margin: 5px 10px;
  font-size: 20px;
  border-radius: 3px;
`;

function App() {
  const [players, setPlayers] = useState([{}]);

  const inputsGenerator = players => (
    players.map((player, i) => (
      <div>
        <div>
          Player {i + 1}
        </div>
        <label>
          Name: <Input key={i} />
        </label>
        <label>
          Email: <Input key={i} />
        </label>
      </div>
      
    ))
  )

  const addPlayer = () => {
    setPlayers([...players, {}])
  }

  return (
    <AppContainer>
      <Snow />
      <Header>
        <Img width="200px" src={logo2} />
      </Header>
      <Content>
        {inputsGenerator(players)}
        <div>
          <Button onClick={addPlayer}>Add</Button>
        </div>
      </Content>
      <Footer>
        <Img width="350px" src={santa} />
      </Footer>
    </AppContainer>
  );
}



export default App;
