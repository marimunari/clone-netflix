const playButton = document.getElementById('play');
const trailer = document.getElementById('trailer');

playButton.addEventListener('click', () => {
    if(trailer.style.display === 'block') {
        trailer.style.display = 'none';
    } else {
        trailer.style.display = 'block';
    }
});
