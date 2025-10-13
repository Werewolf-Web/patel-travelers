import React from 'react'
import Header from '../Header/Header'
import Memories from '../Memories/Memories'
import MoreDetails from '../Details/MoreDetails'
import BookTours from '../Tours/BookTours'
import Reviews from '../Reviews/Reviews'

function HomePage() {
  return (
    <>
      <Header />
      <Memories />
      <MoreDetails />
      <BookTours />
      <Reviews />
    </>
  )
}

export default HomePage
