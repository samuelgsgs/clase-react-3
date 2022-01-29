import React from 'react';
import { Table } from 'react-bootstrap';
import { ListaTabla } from '../data/MenuTabla';

export function Perfil() {
  return (
    <div className="main-site">
      <h1>Página de perfil</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nombre Usuario</th>
          </tr>
        </thead>
        <tbody>
          {ListaTabla.map((item) => {
            return (
              <tr>
                <td>{item.numero}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.usuario}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
