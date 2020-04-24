import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  margin-left: 200px;
  margin-bottom: 20px;
  height: 200px;
  width: 150px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background-color: white;

  &:hover {
    box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.2),
      0 10px 25px 0 rgba(0, 0, 0, 0.19);
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const PokemonImg = styled.img`
  height: 130px;
  width: 130px;
`;

const Index = styled.div`
  text-align: left;
  border-bottom: 1px solid lightgrey;
  background-color: lightgrey;
  color: white;
  font-weight: bold;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 5px;
`;

const Name = styled.div`
  margin-top: 5px;
`;

const PokemonCard = ({ name, url }) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];

  return (
    <Card>
      <StyledLink to={`pokemon/${pokemonIndex}`}>
        <Index>{pokemonIndex}</Index>
        <PokemonImg src={`https://img.pokemondb.net/artwork/${name}.jpg`} />
        <Name>{name}</Name>
      </StyledLink>
    </Card>
  );
};

export default PokemonCard;
