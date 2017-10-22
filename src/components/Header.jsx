import React from 'react';

const Header = ({ title }) => {
    return (
        <header>
        <div className="container">
           <div className="row">
              <div className="col-sm-4">
                 <div className="logo">
                    <h1>{title}</h1>
                 </div>
              </div>
              <div className="col-sm-8">
                 <div className="menu">
                    <ul>
                       <li><a href="#"><i className="fa fa-facebook-official"></i></a></li>
                       <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                       <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </header>
    );
};

export default Header;