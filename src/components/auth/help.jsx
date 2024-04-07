import React from 'react';

const HelpPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Help</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
           some information
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email: email here</li>
            <li className="list-group-item">Phone: xxxxxxxx</li>
            <li className="list-group-item">Address: address here</li>
          </ul>
          <p className="card-text mt-3">
            Our customer service representatives are available to assist you from Monday to Friday, 9:00 AM to 5:00 PM (local time).
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
