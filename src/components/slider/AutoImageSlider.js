import React, { useState, useEffect } from 'react';

const AutoImageSlider = ({ images, intervalTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the current image index every 'intervalTime' milliseconds
    const slideNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(slideNextImage, intervalTime);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length, intervalTime]);

  return (
    <div className="auto-image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} style={{objectFit: 'cover', width: '100%', borderRadius: '5px'}} />
    </div>
  );
};

export default AutoImageSlider;
