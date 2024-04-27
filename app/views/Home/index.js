import React from 'react'
import Navbar from '../../components/Navbar'
import HomeCover from './HomeCover'
import ShceduleCourse from './ShceduleCourse'
import Classes from './Classes'
import GardenOfBooks from './GardenOfBooks'
import PrayerTime from './PrayerTime'

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeCover/>
      <ShceduleCourse/>
      <Classes/>
      <GardenOfBooks/>
      <PrayerTime/>
    </div>
  )
}

export default Home
