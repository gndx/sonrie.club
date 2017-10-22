import React from 'react';

const Footer = () => {
  return (
    <footer className='fixed-bottom'>
      <div className='container'>
        <div className='row'>
          <div className="col-sm-6">
            <h2>Build with <span className='love'>♥</span> in Guadalajara Jal. México.</h2>
          </div>
          <div className='col-sm-6'>
            <div className='menu-right'>
              <ul>
                <li><a href='#'>.Acerca</a></li>
                <li><a href='#'>.Nosotros</a></li>
                <li><a href='#'>.Colabora</a></li>
                <li><a href='#'>.Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;