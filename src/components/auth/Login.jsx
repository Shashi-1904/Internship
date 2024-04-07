import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login verification
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container" style={{margin:"5em"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border" style={{ backgroundColor: '#f2f2f2' }} onSubmit={handleSubmit}>
            <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#DA1173' }}>Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" style={{ backgroundColor: '#ececec' }} onChange={handleEmailChange} value={email} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#DA1173' }}>Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" style={{ backgroundColor: '#ececec' }} onChange={handlePasswordChange} value={password} required />
            </div>
            <div className="mb-3 d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
