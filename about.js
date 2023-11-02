// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to auto-play the video when it's in the viewport
  function playVideoIfInViewport() {
    var video = document.querySelector(".video-section video");
  
    if (isElementInViewport(video)) {
      video.play();
    }
  }
  
  // Attach an event listener to check when the video should play
  window.addEventListener("scroll", playVideoIfInViewport);
  
  // Initial check in case the video is already in the viewport on page load
  playVideoIfInViewport();
  