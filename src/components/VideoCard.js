import React from 'react';

function VideoCard({ title, image, image2, channel, views, age, img }) {
  return (
    <div className="video__card">
      <img className="video__image" src={image} alt="video card" />
      <div className="video__info">
        <img className="channel__thumbnail" src={image2} alt={channel} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views + {age} ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
