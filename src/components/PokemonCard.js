import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-left: 200px;
  margin-bottom: 20px;
  border: 1px solid grey;
  height: 180px;
  width: 150px;
`;

const PokemonImg = styled.img`
  height: 150px;
  width: 150px;
`;

const PokemonCard = ({ name }) => {
  return (
    <Card>
      <PokemonImg src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
      <div>{name}</div>
    </Card>
  );
};

export default PokemonCard;
