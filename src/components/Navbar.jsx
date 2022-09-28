import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>hi shunD</h4>
        <h1>
          welcome to <span>MY DASH BOARD</span>
        </h1>
      </div>
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5em;
        color: #ffc107;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    input {
      background-color: transparent;
      border: 0;
      color: #ffc107;
      &::placeholder {
        color: #ffc107;
      }
      &:focus {
        border: 0;
        outline: none;
      }
    }
  }
`;
