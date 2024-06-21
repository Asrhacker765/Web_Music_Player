document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause');
    const volumeControl = document.getElementById('volume-control');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');

    const tracks = [
        {
            title: 'Bewafa',
            artist: 'Artist 1',
            src: 'music/song1.mp3'
        },
        {
            title: 'Aa ja we mahiya',
            artist: 'Artist 2',
            src: 'music/song2.mp3'
        },
        {
            title: 'JUG JUG JEEVE',
            artist: 'Artist 3',
            src: 'music/song3.mp3'
        },
        {
            title: 'koi si',
            artist: 'Artist 4',
            src: 'music/song4.mp3'
        },
        {
            title: 'MI_amor',
            artist: 'Artist 5',
            src: 'music/song5.mp3'
        },
        {
            title: 'sajni',
            artist: 'Artist 6',
            src: 'music/song6.mp3'
        }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        const track = tracks[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        audio.load();
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    volumeControl.addEventListener('input', function() {
        audio.volume = volumeControl.value;
    });

    nextBtn.addEventListener('click', function() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    });

    prevBtn.addEventListener('click', function() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    });

    loadTrack(currentTrackIndex);
});
