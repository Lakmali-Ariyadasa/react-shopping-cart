import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HeaderBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <span className="ml-2">Product List</span>
        <span className="justify-content-end">
        <ShoppingCartIcon className="primary ml-2 mr-2"/>
        </span>
      </nav>
  </div>
  )
}

export default HeaderBar;