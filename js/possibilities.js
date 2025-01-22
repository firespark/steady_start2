const tabs = document.querySelectorAll('.possibilities-tab');
const videoItems = document.querySelectorAll('.possibility-video-item');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        videoItems.forEach(video => video.classList.remove('active'));

        tab.classList.add('active');
        videoItems[index].classList.add('active');
    });
});