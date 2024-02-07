import React from 'react';

export default function RoomSearch() {
  return (
    <div className="container shadow-lg p-4 mb-5 bg-white rounded" style={{marginTop:"50px"}}>
      <div className="row g-4">
        <div className="col-md-4">
          <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
          <input type="date" className="form-control" id="checkInDate" />
        </div>
        <div className="col-md-4">
          <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
          <input type="date" className="form-control" id="checkOutDate" />
        </div>
        <div className="col-md-3">
          <label htmlFor="roomType" className="form-label">Room Type</label>
          <select className="form-select" id="roomType">
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="col-md-1 d-flex align-items-end">
          <button type="button" className="btn btn-secondary btn-block">Search</button>
        </div>
      </div>
    </div>
  );
}
