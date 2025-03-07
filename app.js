const nextBtn = document.querySelector('.next-btn')
const video = document.querySelector('.hero-video')
const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4']

let index = 0
nextBtn.addEventListener('click', function() {
  index = (index + 1) % 4
  video.src = movieList[index]
})