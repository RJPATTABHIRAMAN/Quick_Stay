import React from 'react';
import { Navbar } from '../../components/hotelOwner/Navbar';
import { Outlet } from 'react-router-dom';
import { sidebar } from '../../components/hotelOwner/sidebar';

export const Layout = () => {
  return (
    <div className='flex flex-col h-screen'> 
      <Navbar/>
      <div className='flex h-full'>
        <sidebar/>
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}