import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styles';

export default function header() {
  // eslint-disable-next-line
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/asda">
        <FaSignInAlt size={24} />
      </Link>
      <h1>{botaoClicado ? 'Clicado' : 'Não Clicado'}</h1>
    </Nav>
  );
}
