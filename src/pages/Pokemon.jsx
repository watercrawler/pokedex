import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

import styled from 'styled-components';

const TYPE = {
  normal: '노멀',
  poison: '독',
  psychic: '에스퍼',
  grass: '풀',
  ground: '땅',
  ice: '얼음',
  fire: '불',
  rock: '바위',
  dragon: '드래곤',
  water: '물',
  bug: '벌레',
  dark: '악',
  fighting: '격투',
  ghost: '유령',
  steel: '강철',
  flying: '비행',
  electric: '전기',
  fairy: '페어리',
};

const TYPE_COLOR = {
  normal: '#8BD650',
  poison: '#9E5795',
  psychic: '#FA65B5',
  grass: '#8AD34F',
  ground: '#E7CC59',
  ice: '#96F1FF',
  fire: '#FA5643',
  rock: '#BDCD1E',
  dragon: '#8975FF',
  water: '#824D42',
  bug: '#9A94D4',
  dark: '#C2C0D7',
  fighting: '#A85644',
  ghost: '#FDE245',
  steel: '#C4C2DB',
  flying: '#79A3FF',
  electric: '#FDE440',
  fairy: '#141518',
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const IndexTag = styled.div`
  font-weight: bold;
  border-bottom: 1px solid lightgrey;
`;

const NameTag = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StatList = styled.ul`
  width: 50%;
  list-style: none;
`;

const StatInfo = styled.div`
  width: 40%;
`;

const TypeTag = styled.span`
  margin-right: 10px;
  color: white;
  font-weight: bold;
  padding: 3px;
  line-height: 16px;
  border-radius: 4px;
`;

const ColStyle = {
  backgroundColor: 'lightblue',
  color: 'white',
  paddingleft: 10,
};

const margin = {
  marginBottom: 10,
};

// const StatTag = styled(Col)``;

const Pokemon = (props) => {
  const { pokemonIndex } = props.match.params;
  const [info, setInfo] = useState([]);
  const [stat, setStat] = useState([]);
  const [types, setTypes] = useState([]);
  const [korName, setKorName] = useState(null);

  const MAX_STAT = 200;

  function handleInfo(response) {
    setInfo(response.data);

    console.log(response.data);
    setStat(response.data.stats);
    setTypes(
      response.data.types.map((type) => (
        <TypeTag
          key={type.type.name}
          style={{
            backgroundColor: `${TYPE_COLOR[type.type.name]}`,
          }}
        >
          {TYPE[type.type.name]}
        </TypeTag>
      ))
    );
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((response) => handleInfo(response));
  }, [pokemonIndex]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`)
      .then((response) => setKorName(response.data.names[8].name));
  }, [pokemonIndex]);

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
      default:
        throw new Error('error');
    }
  });

  return (
    <Wrapper>
      <div>
        <IndexTag>{info.id}</IndexTag>
        <img
          alt={name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
          style={{ width: 200 }}
        />
        <NameTag>{korName}</NameTag>
        <div>{types}</div>
      </div>
      <StatContainer>
        <Divider
          orientation="left"
          style={{ color: '#333', fontWeight: 'normal' }}
        >
          능력치
        </Divider>
        <StatList>
          <li style={margin}>HP</li>
          <li style={margin}>공격</li>
          <li style={margin}>방어</li>
          <li style={margin}>특수공격</li>
          <li style={margin}>특수방어</li>
          <li style={margin}>스피드</li>
        </StatList>
        <StatInfo>
          <Row style={margin}>
            {/* <StatTag flex={400}>HP</StatTag> */}
            <Col flex={hp} style={ColStyle}>
              {hp}
            </Col>
            <Col flex={MAX_STAT - hp}></Col>
          </Row>
          <Row style={margin}>
            {/* <StatTag flex={400}>Attack</StatTag> */}
            <Col flex={attack} style={ColStyle}>
              {attack}
            </Col>
            <Col flex={MAX_STAT - attack}></Col>
          </Row>
          <Row style={margin}>
            {/* <StatTag>Defense</StatTag> */}
            <Col flex={defense} style={ColStyle}>
              {defense}
            </Col>
            <Col flex={MAX_STAT - defense}></Col>
          </Row>
          <Row style={margin}>
            {/* <StatTag>Special Attack</StatTag> */}
            <Col flex={specialAttack} style={ColStyle}>
              {specialAttack}
            </Col>
            <Col flex={MAX_STAT - specialAttack}></Col>
          </Row>
          <Row style={margin}>
            {/* <StatTag>Special Defense</StatTag> */}
            <Col flex={specialDefense} style={ColStyle}>
              {specialDefense}
            </Col>
            <Col flex={MAX_STAT - specialDefense}></Col>
          </Row>
          <Row style={margin}>
            {/* <StatTag>Speed</StatTag> */}
            <Col flex={speed} style={ColStyle}>
              {speed}
            </Col>
            <Col flex={MAX_STAT - speed}></Col>
          </Row>
        </StatInfo>
      </StatContainer>
    </Wrapper>
  );
};

export default React.memo(Pokemon);
