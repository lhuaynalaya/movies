import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css';

class Confirmar extends Component {
  state = {
    cerrado: true,
    mensaje: 'xxxx',
    textoBtnAceptar: 'Aceptar',
    textoBtnCancelar: 'Cancelar',
    callbackAceptar: () => { },
    callbackCancelar: () => { }
  };

  handleClickCancelarConfirmacion = (e) => {
    e.preventDefault();
    this.cerrarConfirmacion();
    this.state.callbackCancelar();
  };

  handleClickAceptarConfirmacion = (e) => {
    e.preventDefault();
    this.cerrarConfirmacion();
    this.state.callbackAceptar();
  };

  cerrarConfirmacion = (e) => {
    this.setState({
      cerrado: true
    });
  };

  abrirConfirmacion = () => {
    this.setState({
      cerrado: false
    });
  };

  mostrarConfirmacion = (confirmacion) => {
    let confirmar = Object.assign({}, this.state, confirmacion);
    confirmar.cerrado = false;

    this.setState(confirmar);
  };

  render() {
    return(
      <div
        className={
          this.state.cerrado ? 'sombra-confirmar' : 'sombra-confirmar-mostrar '
        }
      >
        <div className='confirmar'>
          <div>
						<FontAwesome
							className="fal fa-exclamation-circle icon-confirmar"
							name='exclamation-circle-icon'

						/>
					</div>

          <div className='advertencia'>
            <p><b>{ this.state.mensaje }</b></p>
            <div>
              <a
                href='#'
                className='aceptar'
                onClick={ this.handleClickAceptarConfirmacion }
              >
                { this.state.textoBtnAceptar }
              </a>
              <a
                href='#'
                className='cancel'
                onClick={ this.handleClickCancelarConfirmacion }
              >
                { this.state.textoBtnCancelar }
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Confirmar;
