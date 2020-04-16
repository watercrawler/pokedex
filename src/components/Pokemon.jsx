import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
  const { pokemonIndex } = props.match.params;
  const [info, setInfo] = useState([]);
  const [stat, setStat] = useState([]);

  function handleInfo(response) {
    setInfo(response.data);
    setStat(response.data.stats);
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((response) => handleInfo(response));
  }, []);

  const name = info.name;

  let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

  stat.map((stat) => {
    switch (stat.stat.name) {
      case 'hp':
        hp = stat['base_stat'];
        break;
      case 'attack':
        attack = stat['base_stat'];
        break;
      case 'defense':
        defense = stat['base_stat'];
        break;
      case 'speed':
        speed = stat['base_stat'];
        break;
      case 'special-attack':
        specialAttack = stat['base_stat'];
        break;
      case 'special-defense':
        specialDefense = stat['base_stat'];
        break;
    }
  });

  console.log(hp);
  // const speed = stat[0];
  // const specialDefense = stat[1];
  // const specialAttack = stat[2];
  // const defense = stat[3];
  // const attack = stat[4];
  // const hp = stat[5];
  // const stats = [hp, attack, defense, specialAttack, specialDefense, speed];

  return (
    <div>
      <div>{info.id}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
      />
      <div>{name}</div>
      <ul>
        <li>hp: {hp}</li>
        <li>attack: {attack}</li>
        <li>defense: {defense}</li>
        <li>special attack: {specialAttack}</li>
        <li>special defense: {specialDefense}</li>
        <li>speed: {speed}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
