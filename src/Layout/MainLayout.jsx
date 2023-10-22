import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { createContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const DonationContext = createContext([]);

export default function MainLayout() {

  return (
    // <div className='max-w-7xl mx-auto py-9'>
    <div className=''>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
