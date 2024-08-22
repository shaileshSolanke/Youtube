import { videos } from "../Data/data.js";

const content = document.querySelector(".content");

videos.forEach((video) => {
  content.innerHTML += `
<div class="video-preview">
        <div class="video-thumbnail">
          <a href=${video.videoURL}>
            <img
            src=${video.videoThumbnailURL}
          />
          </a>
          <span class="video-length">${video.videoTimeDuration}</span>
        </div>
        <div class="video-info">
          <div class="channel-profile">
            <a href=${video.videoChannelURL}>
              <img
                src=${video.channelProfile}
              />
            </a>
          </div>
          <div class="video-details">
            <p class="video-title">
              ${video.videoTitle}
            </p>
            <p class="channel-name">${video.channelName} ${video.channelVerified?"<img src='./assets/icons/verified.svg'>":""}</p>
            <p class="video-stats">${video.videoViews} views &#183; ${video.videoUploaded} ago</p>
          </div>
          <div>
            <img src="./assets/icons/ellipsis.svg"/>
          </div>
        </div>
      </div>
`;
});
