import { useState } from 'react'
import './App.css'

import HomePage from './pages/HomePage';
import GuestsAgePage from './pages/GuestsAgePage';
import GuestsNoServicePage from './pages/GuestsNoServicePage';
import GuestsSpecialOfferPage from './pages/GuestsSpecialOfferPage';
import RoomsDurationPage from './pages/RoomsDurationPage';
import RoomPeakSeasonPage from './pages/RoomsPeakSeasonPage';
import RoomsPopularityPage from './pages/RoomsPopularityPage';
import ServicesTogetherPage from './pages/ServicesTogetherPage';
import StaffPerfomancePage from './pages/StaffPerfomancePage';

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import client from './main';

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GuestsAgePage" element={<GuestsAgePage />} />
          <Route path="/GuestsNoServicePage" element={<GuestsNoServicePage />} />
          <Route path="/GuestsSpecialOfferPage" element={<GuestsSpecialOfferPage />} />
          <Route path="/RoomsDurationPage" element={<RoomsDurationPage />} />
          <Route path="/RoomsPeakSeasonPage" element={<RoomPeakSeasonPage />} />
          <Route path="/RoomsPopularityPage" element={<RoomsPopularityPage />} />
          <Route path="/ServicesTogetherPage" element={<ServicesTogetherPage />} />
          <Route path="/StaffPerfomancePage" element={<StaffPerfomancePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
