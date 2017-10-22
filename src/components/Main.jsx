import React from 'react';

const Main = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='home'>
          <div className='row'>
            <div className="col-sm-6">
            😜
            </div>
            <div className='col-sm-6'>
              <div className="phrases">
                <h2>Sonríe</h2>
                <h3>La risa es la medicina para el dolor más efectiva, y sin efectos secundarios.</h3>
                <p>Nunca Lo olvides...</p>
              </div>
            </div>
          </div>
          <div className='steps'>
            <div className='row'>
              <div className='col-sm-4'>
                <h3>Sonrie</h3>
                </div>
              <div className='col-sm-4'>
                <h3>Registra</h3>
                </div>
              <div className='col-sm-4'>
                <h3>Comparte</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;