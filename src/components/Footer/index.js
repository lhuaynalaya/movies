import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles.css';
import {
  Col
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
    
      <footer className='footer'>
        <Col sm={12}>
          <div className='redes'>
            <FontAwesome 
              className="fab fa-twitter"
              name='twitter'
            />
          

          
            <FontAwesome
              className="fab fa-facebook"
              name='facebook'
            />
          
          
            <FontAwesome
              className="fab fa-instagram"
              name='instagram'
            />
          </div>
        </Col>
      </footer>
    
    );
  }
}

export default Footer;
