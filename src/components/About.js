import React from 'react';

const About = ({ imageSrc, aboutText }) => {
  // Default placeholder image if no imageSrc prop is provided
  const defaultImageSrc = "https://via.placeholder.com/215";

  return (
    <aside>
      <img
        src={imageSrc || defaultImageSrc}
        alt="blog logo"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;