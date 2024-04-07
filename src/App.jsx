import React from "react"
import AddRoom from "./components/room/AddRoom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/common/Header"
import HotelService from "./components/common/HotelService.jsx";
import RoomSearch from "./components/common/RoomSearch.jsx";
import RoomSearchResult from "./components/common/RoomSearchResult.jsx";
import RoomListing from "./components/room/RoomListing.jsx";
import BookingForm from "./components/booking/BookingForm.jsx"
import Login from "./components/auth/Login"
import RegistrationForm from "./components/auth/Registration.jsx";
import FindMyBookings from "./components/booking/Bookings.jsx";
import Footer from "./components/layout/Footer";
import Logout from "./components/auth/Logout.jsx";
import HelpPage from "./components/auth/help.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/*import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import ExistingRooms from "./components/room/ExistingRooms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"
import AddRoom from "./components/room/AddRoom"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import RoomListing from "./components/room/RoomListing"
import Admin from "./components/admin/Admin"
import Checkout from "./components/booking/Checkout"
import BookingSuccess from "./components/booking/BookingSuccess"
import Bookings from "./components/booking/Bookings"
import FindBooking from "./components/booking/FindBooking"
import Login from "./components/auth/Login"
import Registration from "./components/auth/Registration"
import Profile from "./components/auth/Profile"
import AuthProvider from "./components/auth/AuthProvider";

import RequireAuth from "./components/auth/RequireAuth"*/

function App() {
	return (
		<Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>
                                    <HotelService />
                                    <RoomSearch/>
                                    <RoomSearchResult/>
                                  </div>} />
        <Route path="/browse-all-rooms" element={<RoomListing />} />
		<Route path="/reserve-room" element={<BookingForm/>} />
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<RegistrationForm/>} />
		<Route path="/bookings" element={<FindMyBookings/>} />
		<Route path="/logout" element={<Logout/>} />
		<Route path="/help" element={<HelpPage/>} />




      </Routes>
	  <Footer />
    </Router>
	
	  
		//<AddRoom></AddRoom>
		/*<AuthProvider>
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
						<Route path="/add-room" element={<AddRoom />} />

						<Route
							path="/book-room/:roomId"
							element={
								<RequireAuth>
									<Checkout />
								</RequireAuth>
							}
						/>
						<Route path="/browse-all-rooms" element={<RoomListing />} />

						<Route path="/admin" element={<Admin />} />
						<Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
						<Route path="/find-booking" element={<FindBooking />} />

						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Registration />} />

						<Route path="/profile" element={<Profile />} />
						<Route path="/logout" element={<FindBooking />} />
					</Routes>
				</Router>
				<Footer />
			</main>
		</AuthProvider>*/
	)
}

export default App
