import React from 'react';
import Video from './Video';
import Sidebar from './Sidebar';
import Header from './Header';
import VideoCard from './VideoCard';
function Home() {
  return (
    <div>
      {/* <h1>Header and video grid and sidebar goes here</h1> */}
      <Header />
      <div className="video__container">
        <VideoCard
          title="How I became a software engineer"
          image="https://i.ytimg.com/an_webp/8Xsn4-EwYc0/mqdefault_6s.webp?du=3000&sqp=CI-nsooG&rs=AOn4CLCd2ENrNSRPZf2OsK6sNyQ0b1jZsQ"
          channel="Tiff in Tech"
          views="423k"
          age="1 year"
          image2="https://yt3.ggpht.com/ytc/AKedOLSnSO51ezFWJuwKB437wdLRh5PbDd7NzyK8ZvgC=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="Elles Sont Les rares survivantes d'un drame"
          image="https://i.ytimg.com/vi/khI4xbTpQhY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQfY48qOmH11CkQFjfRHi44PNBgw"
          channel="Ca commence aujourd'hui"
          views="163k"
          age="10 months"
          image2="https://yt3.ggpht.com/ytc/AKedOLT73vjnPEEawotU6lKX5wgI1aBri7jUSyIgyN8mQQ=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="Cultism: Ideology vs Dogma"
          image="https://i.ytimg.com/vi/T6SiZ5Ddj2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiTgycpHgfJDQV96jga4TJybPFNw"
          channel="Diallo Kenyatta"
          views="1k"
          age="2 weeks"
          image2="https://yt3.ggpht.com/ytc/AKedOLTOPbqoHciuKVdVpQXa_tbOORT6avblQRRUmf2vZQ=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="Javascript Marathon"
          image="https://i.ytimg.com/vi/SePXnQXkCZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1pwvYmQzru9kCMR-n0Kqrn-qE6Q"
          channel="This Dot Media"
          views="163k"
          age="10 months"
          image2="https://yt3.ggpht.com/ytc/AKedOLR6PgIvsTEnpqanm38XAnYsV4-yK9_Wpjl9JYsTjw=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="Shapeshifters Live from Defected HQ"
          image="https://i.ytimg.com/vi/sUfzWhwEwCk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeg-2Rb0cd_w5K31131uyG-1O96g"
          channel="Defected HQ"
          views="163k"
          age="10 months"
          image2="https://yt3.ggpht.com/ytc/AKedOLT__fOGWGEYZywKwsb8bpM3L5_MBSNhtDq2pTqc=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="The Sheriff set an eviction date"
          image="https://i.ytimg.com/vi/mxvCmLqHf8s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7sm9XJv9mWCBNxc3kGMoLMAkt2Q"
          channel="Fun and Budget with Tinesha Davis"
          views="163k"
          age="10 months"
          image2="https://yt3.ggpht.com/ytc/AKedOLSYwxqh2NQthSC9JuSkGJXrZ98w7GRggpH5TQjTTw=s68-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="The biggest networking opportunity you're missing out on"
          image="https://i.ytimg.com/vi/SJ3cXmRX7mM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiUj-9P2y3WYWj2lW0FtFU8-dCEQ"
          views="163k"
          age="10 months"
          image2="https://yt3.ggpht.com/ytc/AKedOLTl5dmlTXVSQk9Tzhe_wDcBP_Kgxl9qCPpdVq4v2Q=s68-c-k-c0x00ffffff-no-rj"
          channel="mayuko"
        />
      </div>
    </div>
  );
}

export default Home;
