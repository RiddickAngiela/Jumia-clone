import React from 'react'
import HomeNav from './HomeNav'
import TopSlider from './TopSlider'
import ShortCutLinks from './ShortCutLinks'

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='one'>
          <HomeNav/>
          <TopSlider/>
          <ShortCutLinks/>
        </div>
      </div>
    </div>
  )
}

export default Home