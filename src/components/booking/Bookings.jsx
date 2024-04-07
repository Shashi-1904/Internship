import React, { useState } from 'react';

function FindMyBookings() {
  const [bookingId, setBookingId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookingIdChange = (e) => {
    setBookingId(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to find bookings
    console.log('Booking ID:', bookingId);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div className="container" style={{margin:"5em"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border" style={{ backgroundColor: '#f2f2f2' }} onSubmit={handleSubmit}>
            <h2 className="text-center mb-4" style={{ color: '#DA1173' }}>Find My Bookings</h2>
            <div className="mb-3">
              <label htmlFor="bookingId" className="form-label" style={{ color: '#DA1173' }}>Booking ID</label>
              <input type="text" className="form-control" id="bookingId" name="bookingId" placeholder="Enter booking ID" style={{ backgroundColor: '#ececec' }} onChange={handleBookingIdChange} value={bookingId} />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label" style={{ color: '#DA1173' }}>Start Date</label>
              <input type="date" className="form-control" id="startDate" name="startDate" style={{ backgroundColor: '#ececec' }} onChange={handleStartDateChange} value={startDate} />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label" style={{ color: '#DA1173' }}>End Date</label>
              <input type="date" className="form-control" id="endDate" name="endDate" style={{ backgroundColor: '#ececec' }} onChange={handleEndDateChange} value={endDate} />
            </div>
            <div className="mb-3 d-grid">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindMyBookings;
