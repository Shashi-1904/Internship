import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  const handleLogout = () => {

    console.log('Logout action performed'); 
  };

  return (
    <div className="container" style={{margin:"5em",marginBottom:"17em"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-4 border" style={{ backgroundColor: '#f2f2f2' }}>
            <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Logout</h2>
            <p className="text-center">Are you sure you want to logout?</p>
            <div className="mb-3 d-grid">
              <button className="btn btn-danger" onClick={handleLogout}><Link className="nav-link active" aria-current="page" to='/'>Logout</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
