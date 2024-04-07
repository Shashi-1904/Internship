import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send registration data to backend for processing
    console.log('Registration Data:', {
      fullName,
      address,
      gender,
      phoneNo,
      email,
      password,
      confirmPassword
    });
    // You would typically send this data to your backend API for registration
  };

  return (
    <div className="container" style={{margin:"5em"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border" style={{ backgroundColor: '#f2f2f2' }} onSubmit={handleSubmit}>
            <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Register</h2>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label" style={{ color: '#DA1173' }}>Full Name</label>
              <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your full name" style={{ backgroundColor: '#ececec' }} onChange={handleFullNameChange} value={fullName} required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label" style={{ color: '#DA1173' }}>Address</label>
              <input type="text" className="form-control" id="address" name="address" placeholder="Enter your address" style={{ backgroundColor: '#ececec' }} onChange={handleAddressChange} value={address} required />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label" style={{ color: '#DA1173' }}>Gender</label>
              <select className="form-select" id="gender" name="gender" style={{ backgroundColor: '#ececec' }} onChange={handleGenderChange} value={gender} required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNo" className="form-label" style={{ color: '#DA1173' }}>Phone Number</label>
              <input type="tel" className="form-control" id="phoneNo" name="phoneNo" placeholder="Enter your phone number" style={{ backgroundColor: '#ececec' }} onChange={handlePhoneNoChange} value={phoneNo} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#DA1173' }}>Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" style={{ backgroundColor: '#ececec' }} onChange={handleEmailChange} value={email} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#DA1173' }}>Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" style={{ backgroundColor: '#ececec' }} onChange={handlePasswordChange} value={password} required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label" style={{ color: '#DA1173' }}>Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" style={{ backgroundColor: '#ececec' }} onChange={handleConfirmPasswordChange} value={confirmPassword} required />
            </div>
            <div className="mb-3 d-grid">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
