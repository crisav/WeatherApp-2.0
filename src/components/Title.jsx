import React from 'react';

const Title = ({ title = 'title', subtitle = 'subtitle' }) => {
  return (
    <h2 className="title">
      <span className="title__bold">{title} </span> 
      <span className="title__thin">{subtitle}</span>
    </h2>
  )
}

export default Title;