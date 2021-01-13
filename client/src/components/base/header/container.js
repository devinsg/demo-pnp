import React from 'react';

const Container = function() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>TechBase - Demo Employee</a>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Container;