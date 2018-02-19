const header = document.querySelector('header');
const openButton = document.getElementById('openButton');
const videoBox = document.getElementById('videobox');
const questions = Array.from(videoBox.querySelectorAll('p'));
const videos = Array.from(videoBox.querySelectorAll('video'));

const readmore = document.getElementById('readmore');
const more = document.getElementById('more');

const windowHeight = window.innerHeight;
const parallax = document.querySelector('.parallax');

window.onload = function () {
    // fix for slide down animation
    const elHeight = window.getComputedStyle(header).getPropertyValue('height');
    header.style.height = elHeight;
}

window.onscroll = function () {
    const position = parallax.getBoundingClientRect().top;
    let value = position / windowHeight * 100;
    if (value > 100) {
        value = 100
    } else if (value < 0) {
        value = 0
    }

    const image = parallax.querySelector('img');
    image.style["object-position"] = value + '%' + value + '%';

    // show more content on scroll
    document.body.classList.add('appearMore');
}

function openVideo() {
    header.classList.add('hide');
    videoBox.classList.add('open');

    const targetVideo = document.querySelector(`video[data-name="${this.dataset.name}"]`);
    targetVideo.classList.add('active');
    targetVideo.play();

    // show more content
    document.body.classList.add('loadMore');
}

function playVideo() {
    this.remove();

    videos.forEach(video => video.classList.remove('active'));

    const targetVideo = document.querySelector(`video[data-name="${this.dataset.name}"]`);
    targetVideo.classList.add('active');
    videoBox.classList.remove('waiting');
    targetVideo.play();
}

function hideVideo() {
    videoBox.classList.add('waiting');
    this.currentTime = 0;
}


openButton.addEventListener('click', openVideo);
questions.forEach(question => question.addEventListener('click', playVideo));
videos.forEach(video => video.addEventListener('ended', hideVideo))
readmore.addEventListener('click', () => scrollIt(more, 1000, 'easeInOutQuad'));