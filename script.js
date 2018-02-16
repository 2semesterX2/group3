const openButton = document.getElementById('openButton');
const videoBox = document.getElementById('videobox');
const questions = Array.from(videoBox.querySelectorAll('p'));
const videos = Array.from(videoBox.querySelectorAll('video'));

function openVideo() {
    document.querySelector('.intro').classList.add('hide');
    videoBox.classList.add('open');
   
    const targetVideo = document.querySelector(`video[data-name="${this.dataset.name}"]`);
    targetVideo.classList.add('active');
    targetVideo.play();
}

function playVideo() {
    this.classList.add('clicked');

    const targetVideo = document.querySelector(`video[data-name="${this.dataset.name}"]`);
    targetVideo.classList.add('active');
    videoBox.classList.remove('waiting');
    targetVideo.play();
}

function hideVideo() {
    videoBox.classList.add('waiting');
    this.currentTime = 0;
    this.classList.remove('active');

}

openButton.addEventListener('click', openVideo);
questions.forEach(question => question.addEventListener('click', playVideo));
videos.forEach(video => video.addEventListener('ended', hideVideo))