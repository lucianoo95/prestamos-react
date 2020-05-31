import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {

  // Definir el 'state'
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  return (
    <Fragment>
      <Header
        titulo="Cotizador de prestamos"
      />

      <div className="container">
        <Form
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {cargando ? <Spinner /> : total === 0 ? <Message /> : <Result
            total={total}
            plazo={plazo}
            cantidad={cantidad}
          />}
        </div>

      </div>
    </Fragment>


  );
}

export default App;
