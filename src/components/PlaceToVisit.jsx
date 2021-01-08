import React from 'react';

import Title from './Title';

const PlaceToVisit = () => {
  return (
    <div className="place">

      <Title  title="Place to" subtitle="Visit" />

      <div className="place__container">

        <div className="place__container--img">
          <p><i className="fas fa-map-marker-alt"></i> Torre Eiffel, Francia </p>
        </div>

      </div>
    </div>
  )
};

export default PlaceToVisit;
