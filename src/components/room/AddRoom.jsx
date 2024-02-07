import React, { useState } from "react";

function AddRoom() {
    const [roomType, setRoomType] = useState("");
    const [roomPrice, setRoomPrice] = useState("");
    const [roomPhoto, setRoomPhoto] = useState(null);

    const handleRoomPhotoChange = (event) => {
        const photo = event.target.files[0];
        setRoomPhoto(photo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Room added successfully!");
        setRoomType("");
        setRoomPrice("");
        setRoomPhoto(null);
    };

    return (
        <div className="container mt-5">
            <h1 style={{ textAlign: "center" }}>Add New Room</h1>
            <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "40px", borderRadius: "10px", maxWidth: "800px", margin: "0 auto" }}>
                <div className="mb-3">
                    <label htmlFor="roomType" className="form-label">Room Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roomType"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomPrice" className="form-label">Room Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="roomPrice"
                        value={roomPrice}
                        onChange={(e) => setRoomPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomPhoto" className="form-label">Room Photo</label>
                    <input
                        type="file"
                        className="form-control"
                        id="roomPhoto"
                        onChange={handleRoomPhotoChange}
                        accept="image/*"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Room</button>
            </form>
        </div>
    );
}

export default AddRoom;
