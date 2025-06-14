import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import { AllRooms } from './pages/AllRooms';
import { RoomDetails } from './pages/RoomDetails';
import { MyBooking } from './pages/MyBooking';
import { HotelReg } from './components/HotelReg';
import { Layout } from './pages/hotelOwner/Layout';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
     {false && <HotelReg/>} 
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/rooms" element={<AllRooms/>} />
         <Route path="/rooms/:id" element={<RoomDetails/>} />
         <Route path="/my-bookings" element={<MyBooking/>} />
          <Route path='/owner' element={<Layout/>}>
          </Route>
        </Routes> 
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
