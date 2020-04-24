import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';
import Pagination from './Pagination';

const PokemonList = () => {
  const [posts, setPosts] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlock, setPageBlock] = useState(0);
  const POSTS_PER_PAGE = 20;
  const TOTAL_POSTS = 980;
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${POSTS_PER_PAGE}&offset=${posts}`
      )
      .then(
        (response) => setPokemon(response.data['results'])
        // console.log(response.data['results'])
      );
  }, [posts]);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPokemon = pokemon.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    setPosts(POSTS_PER_PAGE * (pageNumber - 1));
  }

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
    margin-left: -40px;
  `;
  const Button = styled.button`
    width: 100px;
    height: 50px;
    margin-left: 10px;
  `;

  return (
    <>
      <Container>
        {currentPokemon.map((pokemon) => (
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
            if (pageBlock !== 0) {
              setPageBlock(pageBlock - 10);
              setPosts((pageBlock - 1) * POSTS_PER_PAGE);
            }
          }}
        >
          ←
        </Button>
        <Pagination
          postsPerPage={POSTS_PER_PAGE}
          totalPosts={TOTAL_POSTS}
          paginate={paginate}
          currentPage={currentPage}
          pageBlock={pageBlock}
        />
        <Button
          onClick={() => {
            if (pageBlock < 40) {
              setPageBlock(pageBlock + 10);
              setPosts((pageBlock + 10) * POSTS_PER_PAGE);
            }
          }}
        >
          →
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default React.memo(PokemonList);
