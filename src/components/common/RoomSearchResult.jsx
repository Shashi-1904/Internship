import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RoomSearchResult() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      
    };
  }, []);

  return (
    <div className="container">
      <h4>Search Results</h4>
      <div className="row">
        {rooms.map(room => (
          <div key={room.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Room Name: {room.name}</h5>
                <p className="card-text">Room Type: {room.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
