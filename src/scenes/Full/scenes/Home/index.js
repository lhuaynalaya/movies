import React, { Component } from 'react';

import {
  Button,
  Label,
  DropdownButton,
  ButtonToolbar,
  MenuItem,
  ButtonGroup,
  Panel,
  Row,
  Col,
  br
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';
import CargandoComponente from '../../../../components/CargandoComponente';
import Confirmar from '../../../../components/Confirmar';
import PeliculaService from '../../../../services/api/peliculas'
import GeneroService from '../../../../services/api/generos'
import PeliculaDetalleModal from '../../../../components/PeliculaDetalleModal/PeliculaDetalleModal';
import './styles.css';

class Home extends Component {
  state = {
    cargando: false,
    peliculas: [],
    generos: [],
    openmodal: false,
    guardando: false,
    pelicula: {}
  };

  componentDidMount () {
    this.cargarPeliculas();
  }

  cargarPeliculas = () => {
    this.setState({ cargando: true });
    PeliculaService.getPeliculas((response) => {
      this.setState({
        peliculas: response,
        cargando: false
      })
    });
  };

  handleClickCloseCanalModal = () => {
  this.setState({
   openmodal: false
  })
  };

  handleClickVerDetalle = (pelicula) => {

  this.setState({
    openmodal: true,
    pelicula
  });
};

  render() {
    const notas = this.state.peliculas.map((pelicula) =>
      <div className='div-columna'>
        <div className='home-pelicula'>
          <div className='home-body'>
            <Row>
              <Col sm={12}>
                <div>
                  <div className='pelicula'>
                   <img src={pelicula.imagen}/>
                  </div>
                  <div className='nombre-pelicula'>
                    { pelicula.nombre }
                  </div>
                  <div className='genero-pelicula'>
                    Aventura, Terror, Ficción
                  </div>
                  <br/>
                  <div className="ranking-pelicula">
                    <img src={require('./images/heart.svg')}/>
                    { pelicula.ranking }
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <Button
                  onClick={
                    (e) => {
                      this.handleClickVerDetalle(pelicula);
                    }
                  }
                  style={
                    {
                      marginTop: '-40px',
                      marginLeft:'200px',
                      backgroundColor: '#FAB005'
                    }
                  }
                >
                  Detalle
                </Button>
              </Col>
            </Row>  
          </div>
        </div>
      </div>
    );
    return (

       <div>
       <div>
      
          {notas}
        
       </div>

        <PeliculaDetalleModal
          show={ this.state.openmodal }
          onHide={ this.handleClickCloseCanalModal }
          guardando={ this.state.guardando }
          id={ this.state.pelicula.id }
          nombre={ this.state.pelicula.nombre }
          idioma_codigo={ this.state.pelicula.idioma_codigo }
          popularidad={ this.state.pelicula.popularidad }
          ranking={ this.state.pelicula.ranking }
          voto={ this.state.pelicula.voto }
          sinopsis={ this.state.pelicula.sinopsis }
          imagen={ this.state.pelicula.imagen }
        />
        <Confirmar
          ref='confirmarEliminarSystem'
        />
        
      </div>
    );
  }
}
export default Home;
