import React, { useState } from 'react';

export default function ReserveRoom() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numAdults: 1,
    numChildren: 0
  });

  const [reservationInfo, setReservationInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = `
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Check-in Date: ${formData.checkInDate}
      Check-out Date: ${formData.checkOutDate}
      Number of Adults: ${formData.numAdults}
      Number of Children: ${formData.numChildren}
    `;
    setReservationInfo(summary);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          
          <form className="p-4 border" style={{ backgroundColor: '#f2f2f2' }} onSubmit={handleSubmit}>
          <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Reserve Room</h2>
          <div className="mb-3">
          <label htmlFor="fullName" className="form-label" style={{ color: '#DA1173' }}>Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your full name" style={{ backgroundColor: '#ececec' }} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: '#DA1173' }}>Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" style={{ backgroundColor: '#ececec' }} onChange={handleChange} required />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="checkInDate" className="form-label" style={{ color: '#DA1173' }}>Check-in Date</label>
            <input type="date" className="form-control" id="checkInDate" name="checkInDate" style={{ backgroundColor: '#ececec' }} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="checkOutDate" className="form-label" style={{ color: '#DA1173' }}>Check-out Date</label>
            <input type="date" className="form-control" id="checkOutDate" name="checkOutDate" style={{ backgroundColor: '#ececec' }} onChange={handleChange} required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="numAdults" className="form-label" style={{ color: '#DA1173' }}>Number of Adults</label>
            <input type="number" className="form-control" id="numAdults" name="numAdults" style={{ backgroundColor: '#ececec' }} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="numChildren" className="form-label" style={{ color: '#DA1173' }}>Number of Children</label>
            <input type="number" className="form-control" id="numChildren" name="numChildren" style={{ backgroundColor: '#ececec' }} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#DA1173', border: 'none' }}>Continue</button>
      </form>
          
        </div>
        <div className="col-md-6">
          {reservationInfo && (
            <div className="p-4 border" style={{ backgroundColor: '#f2f2f2' }}>
              <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Reservation Summary</h2>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3"><strong>Full Name:</strong> {formData.fullName}</div>
                  <div className="mb-3"><strong>Email:</strong> {formData.email}</div>
                  <div className="mb-3"><strong>Check-in Date:</strong> {formData.checkInDate}</div>
                  <div className="mb-3"><strong>Check-out Date:</strong> {formData.checkOutDate}</div>
                  <div className="mb-3"><strong>Number of Adults:</strong> {formData.numAdults}</div>
                  <div className="mb-3"><strong>Number of Children:</strong> {formData.numChildren}</div>
                </div>
                <div className="col-12">
                  <button className="btn btn-success">Confirm Booking</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
