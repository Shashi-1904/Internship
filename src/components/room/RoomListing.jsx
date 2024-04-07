import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

export default function RoomListing() {
  const room = {
    id: 1,
    photo: "src/assets/images/services-1.jpg",
    roomType: "Standard Room",
    roomPrice: 100
  };

  return (
    <div style={{margin:"1em",marginBottom:"25em"}}>
    <Col key={room.id} className="mb-4" xs={12} >
      <Card>
        <Card.Body className="d-flex flex-wrap align-items-center">
          <div className="flex-shrink-0 mr-3 mb-3 mb-md-0">
            <Link to={`/book-room/${room.id}`}>
              <Card.Img
                variant="top"
                src={room.photo} 
                alt="Room Photo"
                style={{ width: "100%", maxWidth: "200px", height: "auto" }}
              />
            </Link>
          </div>
          <div className="flex-grow-1 ml-3 px-5">
            <Card.Title className="hotel-color">{room.roomType}</Card.Title>
            <Card.Title className="room-price">{room.roomPrice} / night</Card.Title>
            <Card.Text>Some room information goes here for the guest to read through</Card.Text>
          </div>
          <div className="flex-shrink-0 mt-3">
            <Link to="/reserve-room" className="btn btn-hotel btn-sm">
              Book Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    </div>
  );
}
