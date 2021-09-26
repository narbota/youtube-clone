import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import IosShareIcon from '@mui/icons-material/IosShare';
import SaveIcon from '@mui/icons-material/Save';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import { ButtonGroup } from '@mui/material';

function Video() {
  return (
    <div className="flex__container">
      {/* header goes up here */}
      <div className="html5__video__container">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/SJ3cXmRX7mM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* video page will have a channel video and a list of video cards on the side */}
        <div className="video__title">
          <h3>The Biggest Networking Opportunity you're missing out on</h3>
          <br />
          <div className="video__icons">
            <div className="video__data">
              42,895 views
              <span style={{ padding: '5px' }}>&#183;</span>Sep 10, 2021
            </div>
            <div className="icon__buttons">
              <button>
                <ThumbUpOffAltIcon />
              </button>
              <button>
                <ThumbDownOffAltIcon />
              </button>

              <IosShareIcon />
              <SaveIcon />
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className="channel__text">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTl5dmlTXVSQk9Tzhe_wDcBP_Kgxl9qCPpdVq4v2Q=s48-c-k-c0x00ffffff-no-rj"
            alt="Mayuko"
          />
          <p>Mayuko 479K subscribers</p>
          <button>Join</button> <button>Subscribe</button>
        </div>
        <div className="comment__section">
          <h4>comments</h4>
        </div>
      </div>

      <div className="right__section">
        <h2>Videos</h2>
      </div>
    </div>
  );
}

export default Video;
