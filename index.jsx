
import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage.jsx'
import DetailsPage from './DetailsPage.jsx'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <DetailsPage/>
    </>
   
   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 