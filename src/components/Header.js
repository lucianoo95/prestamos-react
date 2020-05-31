import React, { Fragment } from 'react';

const Header = ({ titulo, cantidad }) => {
  // Acá se escribe la logica del componente
  return (
    <Fragment>
      <h1>{titulo}</h1>
    </Fragment>
  )
}

export default Header;