import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import './styles.css';

class CargandoComponente extends Component {
  render() {
    const className = this.props.activar ? 'cargando-componente active': 'cargando-componente';

    return(
      <div className={ className }>
        <ReactLoading
          type='bubbles'
          color='#5569AA'
          className='spinner-center'
          delay={ 0 }
        />
      </div>
    );
  }
}

export default CargandoComponente;
