import React from 'react'
import AutoImageSlider from './slider/AutoImageSlider';

const TopSlider = () => {
  const images = [
    'https://ke.jumia.is/cms/2023/W30/CP/Revised/KE_Payweek_Soundbars_0723_S.jpg',
    'https://ke.jumia.is/cms/2023/SIS/Adidas/W29/21/712x384.png',
    'https://ke.jumia.is/cms/2023/W30/BeautySeries/Nivea/Clean/KE_BeautySeries_Nivea_0723_S.png',
    'https://ke.jumia.is/cms/2023/W30/CP/Revised/KE_Payweek_Phones_0723_S.jpg',
    // Add more image URLs here
  ];

  const intervalTime = 3000; // 3 seconds interval

  return (
    <div className='top-slider'>
      <AutoImageSlider images={images} intervalTime={intervalTime} />
    </div>
  )
}

export default TopSlider