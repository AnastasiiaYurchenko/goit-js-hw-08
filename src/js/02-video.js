import throttle from 'lodash.throttle';
import Player from '@vimeo/player'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    // data is an object containing properties specific to that event
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
        // console.log(data);
        // console.log(JSON.stringify(data));
        // console.log(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});