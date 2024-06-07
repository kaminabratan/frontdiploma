import React from 'react';
import HeaderHome from '../components/HeaderHome'
import Gallery from '../components/Gallery'
import HotelList from '../components/HotelList'
import Footer from '../components/Footer'
import AboutChain from '../components/AboutChain';
import { Link } from 'react-router-dom';
import AccordionPoints from '../components/AccordionPoints';

const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <AccordionPoints />
    </>
  );
};

export default HomePage;