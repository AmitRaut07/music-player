// Existing code
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};

// New code for next song functionality
const songs = [
    {
        title: "Shiva Tandav Stotram",
        description: "Feel the power of Shiva",
        imgSrc: "shiv-tandav-image.jpg",
        audioSrc: "Shiva Tandava Stotram  Original Powerful & Best Trance.mp3"
    },
    {
        title: "Here-Remix",
        description: "Alessia Cara- Here",
        imgSrc: "612182583f212f05d5d15f72_how to remix a song.jpg",
        audioSrc: "Alessia Cara - Here (Lucian Remix).mp3"
    },
    {
        title: "post Malone - Psycho",
        description: "Vibe in the song with me",
        imgSrc: "desktop-wallpaper-2048x2048-neon-noir-venom-art-ipad-air-venom-neon-thumbnail.jpg",
        audioSrc: "Post Malone - Psycho ft. Ty Dolla $ign.mp3"
    }
];

let currentSongIndex = 0;

const titleElement = document.querySelector('h1');
const descriptionElement = document.querySelector('p');
const imgElement = document.querySelector('.song-img');

function loadSong(songIndex) {
    const songData = songs[songIndex];
    titleElement.textContent = songData.title;
    descriptionElement.textContent = songData.description;
    imgElement.src = songData.imgSrc;
    song.src = songData.audioSrc;

    progress.max = song.duration;
    progress.value = song.currentTime;

    playPause(); // Play the song automatically
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Cycle through the songs
    loadSong(currentSongIndex);
}

document.querySelector('.fa-forward').addEventListener('click', nextSong);

// Load the first song when the page loads
window.onload = () => loadSong(currentSongIndex);
