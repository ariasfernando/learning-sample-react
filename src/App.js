import React, { Fragment, useState } from 'react';
import './App.css';

import MyFirstComponent from './components/MyFirstComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 30 },
    { id: 3, nombre: 'Camisa Angular', precio: 40 },
    { id: 4, nombre: 'Camisa Node.js', precio: 20 }
  ]);

  const year = new Date().getFullYear();

  return (
    <Fragment>
      <Header title='Tienda Virtual' />
      <main>
        <h2>Lista de Productos</h2>
        <MyFirstComponent></MyFirstComponent>
        {productos.map(producto => <Producto key={ producto.id } producto={producto} />)}
      </main>
      <Footer year={year} />
    </Fragment>
  );
}

export default App;
