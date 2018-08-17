import React, { Component } from 'react';

import {
  Modal,
  Button
} from 'react-bootstrap';

import PeliculaDetalle from '../PeliculaDetalle/PeliculaDetalle';
import './styles.css';

class PeliculaDetalleModal extends Component {

  state = {
    guardando: false
  };

  handleCreateFormSubmit = (fase_venta) => {
    //debugger;
    this.props.onFormSubmit(fase_venta);
    
  };

  handleOnClose = () => {
    this.props.onHide();
  };

  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <PeliculaDetalle
            ref='componentePeliculaDetalle'
            id={ this.props.id }
            nombre={ this.props.nombre }
            idioma_codigo={ this.props.idioma_codigo }
            popularidad={ this.props.popularidad }
            ranking={ this.props.ranking }
            voto={ this.props.voto }
            sinopsis={ this.props.sinopsis }
            imagen={ this.props.imagen }
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default PeliculaDetalleModal;