import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Home from './scenes/Home';

import ReactGA from 'react-ga';

import './styles.css';

class Full extends Component {
  state = {
    menuAbierto: true,
    abrirPosiciones: false,
    abrirConfiguracion: false,
    abrirSiderbarCuenta: false,
    abrirNotificaciones: false,
    abrirAccesoDirecto: false,
    abrirSelectBuscador: false,
    abrirHistorialHeader: false,
    abrirAyuda: false,
    alertaSystem: undefined,
    modulo: {}
  }

  render() {
    return (
      <div>
        <Header
          onClick={ this.abrirMenu }
          abrirHistorialHeader={ this.abrirHistorialHeader }
          abrirSelectBuscador={ this.abrirSelectBuscador }
          abrirAccesoDirecto={ this.abrirAccesoDirecto }
          abrirPosiciones={ this.abrirPosiciones }
          abrirConfiguracion={ this.abrirConfiguracion }
          abrirSiderbarCuenta={ this.abrirSiderbarCuenta}
          abrirNotificaciones={ this.abrirNotificaciones }
          abrirAyuda={ this.abrirAyuda }
          location={ this.props.location }
          onChangeLocation={ this.handleChangeLocation }
          modulo={ this.state.modulo }
          onChangeDataModulo={ this.onChangeDataModuloFull }
        />

        <div className='app-body'>
                <Switch>
                  <Route
                    path='/'
                    name='Home'
                    render={ (props) => (
                      <Home
                        { ...props }
                        alertaSystem={ this.state.alertaSystem }
                      />
                    )}
                  />

                </Switch>
        </div>
        <Footer
        />
      </div>
      
    );
  }
}

export default Full;
