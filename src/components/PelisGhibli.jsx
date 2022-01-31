import React from 'react';
import { Card, Container, Table, Row, Col, tableData } from 'react-bootstrap';
//import '../table_component.css';
import { DatosTablaJuegos } from '../data/DatosJuegos';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      tableData: [],
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      nombrep: item.Nombre,
      desarrolladorp: item.Desarrollador,
      modop: item.Modo,
      plataformasp: item.Plataformas,
    });
  }
  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Películas de Studio Ghibli</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}></Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisGhibli;
