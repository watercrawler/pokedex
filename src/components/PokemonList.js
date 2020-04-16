import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [posts, setPosts] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${posts}`)
      .then(
        (response) => setPokemon(response.data['results'])
        // console.log(response.data['results'])
      );
  }, [posts]);

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

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
    margin-left: -200px;
    padding: 0 50px;
  `;

  const ButtonWrapper = styled.div`
    text-align: center;
  `;
  const Button = styled.button`
    width: 100px;
    height: 50px;
    margin-right: 40px;
  `;

  return (
    <>
      <Header>Pokedex</Header>
      <Container>
        {pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </Container>
      <ButtonWrapper>
        <Button
          onClick={() => {
            if (posts !== 0) {
              setPosts(posts - 20);
            }
          }}
        >
          before
        </Button>
        <Button onClick={() => setPosts(posts + 20)}>next</Button>
      </ButtonWrapper>
    </>
  );
};

export default PokemonList;
