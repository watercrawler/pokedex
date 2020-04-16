import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  margin-left: 200px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  height: 200px;
  width: 150px;
  font-weight: bold;
`;

const PokemonImg = styled.img`
  height: 150px;
  width: 150px;
`;

const Index = styled.div`
  text-align: left;
  border-bottom: 1px solid lightgrey;
  background-color: lightgrey;
  color: white;
  font-weight: bold;
`;

const PokemonCard = ({ name, url }) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];

  return (
    <Card>
      <Link to={`pokemon/${pokemonIndex}`}>
        <Index>{pokemonIndex}</Index>
        <PokemonImg src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
        <div>{name}</div>
      </Link>
    </Card>
  );
};

export default PokemonCard;
