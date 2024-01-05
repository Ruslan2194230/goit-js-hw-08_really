import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_VIMEO = 'videoplayer-current-time';
function getCurrentTime(currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_VIMEO, JSON.stringify(seconds));
}


player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(
  JSON.parse(localStorage.getItem(CURRENT_TIME_VIMEO)) || 0
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

localStorage.setItem('test', 'hello yofrf');
