import React, { Component } from 'react';

import {
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  ButtonToolbar,
  Col,
  Row,
  Tooltip,
  OverlayTrigger,
  Radio,
  hr
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import ReactLoading from 'react-loading';
import './styles.css';

class PeliculaDetalle extends Component {

  state = {
    id: this.props.id || '',
    nombre: this.props.nombre || '',
    idioma_codigo: this.props.idioma_codigo || '',
    popularidad: this.props.popularidad || '',
    ranking: this.props.ranking || '',
    voto: this.props.voto || '',
    sinopsis: this.props.sinopsis || '',
    imagen: this.props.imagen || '',
  }

  handleSave = () => {
    const valid = this.isFormValid();

    if (valid) {
      this.props.onFormSubmit({
        id: this.state.id,
        nombre: this.state.nombre,
        estado: true
      });
    }
  }

  handleClose = () => {
    this.props.onFormClose();
  }

  render() {

    return (
      <Row>
        <Form horizontal>
          <Col sm={12}>
            <Row>
              <Col sm={4}>
                <div className='pelicula'>
                  <img src={ this.state.imagen }/>
                </div>
              </Col>
              <Col sm={8}>
                <div className='vista-pelicula'>
                  <div className='vista-pelicula-body'>
                        <div className='nombre-pelicula-modal'>
                          { this.state.nombre }
                        </div>
                        <hr/>
                        <Col sm={12}>
                        <Col sm={10}>
                        <div className='genero-pelicula'>
                          ficcion, aventura
                        </div>
                        </Col>

                        <Col sm={2}>
                        <div className='idioma-pelicula'>
                          { this.state.idioma_codigo }
                        </div>
                        </Col>
                        </Col>


                        <Col sm={8}>
                         <Col sm={3}>
                          <div>
                            <img src={require('./images/rating.png')}/>
                            <span className='numero-pelicula'>
                              { this.state.ranking }
                            </span>
                          </div>
                          <span>
                            Rating
                          </span>  
                         </Col>

                         <Col sm={3}>
                            <div>
                              <img src={require('./images/popularity.png')}/>
                              <span className='numero-pelicula'>
                                { this.state.popularidad }
                              </span>
                            </div>
                            <span>
                              Popularity
                            </span>
                         </Col>

                         <Col sm={2}>
                            <div>
                              <img src={require('./images/votes.png')}/>
                              <span className='numero-pelicula'>
                                { this.state.voto }
                              </span>
                            </div>
                            <span>
                              Votes
                            </span>
                         </Col>
                         </Col>
                </div>
                  </div>
              </Col>
              <Col sm={8}>
                <div className='pelicula-sinopsis'>
                  { this.state.sinopsis }
                </div>
              </Col>
            </Row>
          </Col>
        </Form>
      </Row>
    )
  }
}

export default PeliculaDetalle;