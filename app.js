const musicPlayer = document.getElementById("music-player");

function shiftMusicPlayerDown() {
  navHeight = document.getElementsByTagName("header")[0].offsetHeight;
  if (window.innerWidth < 1030) {
    musicPlayer.style.paddingTop = navHeight + "px";
  } else {
    musicPlayer.style.paddingTop = "0px";
  }
}

// on load
shiftMusicPlayerDown();

// on window resize
window.addEventListener("resize", () => {
  shiftMusicPlayerDown();
});
