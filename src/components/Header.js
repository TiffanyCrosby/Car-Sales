import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((state) => state.car);
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.image} alt={state.name} />
      </figure>
      <h2>{state.name}</h2>
      <p>Amount: ${state.price}</p>
    </>
  );
};

export default Header;
