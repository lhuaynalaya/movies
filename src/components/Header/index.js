import React, { Component } from 'react';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Utils from '../../utils/permisos';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  usuario: state.data.user,
  permisos: state.data && state.data.user && state.data.user.permisos ? state.data.user.permisos: []
});

class Header extends Component {

  state = {
  };

  render() {
    return(
      <header>
        <nav className='navbar'>
          <div className='logo'>
            <img src={require('./images/logo.png')}/>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(
  mapStateToProps
)(Header);
