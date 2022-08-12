import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let pastTime = 0;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

function onAdjastTime(currentTime) {
    if (currentTime) { pastTime = JSON.parse(currentTime); }
    else { pastTime = 0; }

}

onAdjastTime(currentTime);
player.setCurrentTime(pastTime);