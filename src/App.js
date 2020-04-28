import React from 'react';
import PokemonList from './pages/PokemonList';
import Pokemon from './pages/Pokemon';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const Header = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: red;
  color: white;
  line-height: 70px;
  padding-left: 50px;
  font-size: 48px;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <a href="/">Pokedex</a>
        </Header>
        <div>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
