import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import HomePage from './component/Pages/HomePage'
import AboutPage from './component/Pages/AboutPage'
import DetailsPage from './component/Pages/DetailsPage'
import ToursPage from './component/Pages/ToursPage'
import ReviewsPage from './component/Pages/ReviewsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
