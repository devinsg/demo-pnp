import React from 'react';

const Container = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>VNI Online 365</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Home
                <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/employee'>Employee</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/course'>Course</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/video'>Video</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/camera'>Camera</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Container2 = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>VNI Online 365</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Home
                <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/camera'>Camera</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Container2;