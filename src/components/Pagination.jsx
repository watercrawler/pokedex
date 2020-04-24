import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postsPerPage, totalPosts, paginate, pageBlock }) => {
  const pageNumbers = [];

  const PageButton = styled.button`
    text-decoration: none;
    width: 50px;
    height: 50px;
    border: 1px solid lightgrey;
    background-color: white;
    margin-left: 10px;
  `;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.slice(pageBlock, pageBlock + 10).map((number) => (
        <PageButton onClick={() => paginate(number)} key={number} href="!#">
          {number}
        </PageButton>
      ))}
    </>
  );
};

export default Pagination;
