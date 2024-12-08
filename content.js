// content.js

// Function to set playback speed
function setPlaybackSpeed(speed) {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = speed;
      console.log(`Playback speed set to ${speed}x`);
    } else {
      console.error("No video element found on the page.");
    }
  }
  
  // Listen for messages from popup.js
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "SET_SPEED") {
      setPlaybackSpeed(message.speed);
    }
  });
  