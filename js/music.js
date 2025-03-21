/**
 * Background music player for 2000s style website
 * Plays music after first user interaction with the page
 * Music plays once per page load (not tracked across visits)
 * No music in WAP/mobile version
 */

// Flag to track if music has played during this page visit
let musicPlayed = false;
let audioElement = null;

// Helper function to check if user is on WAP/mobile version
function isWAPVersion() {
    // Check if the window width is small (mobile) or if WAP element exists
    return window.innerWidth <= 768 || document.querySelector('.wap-header') !== null;
}

// Helper function to check if today is April 1st
function isAprilFoolsDay() {
    const today = new Date();
    return today.getMonth() === 3 && today.getDate() === 1; // Month is 0-indexed, so April is 3
}

// Function to play background music once per page load
function playBackgroundMusic() {
    // Only play if it hasn't played during this page visit AND not in WAP mode
    if (!musicPlayed && !isWAPVersion()) {
        // Get the existing audio element
        audioElement = document.getElementById('background-music');
        
        if (!audioElement) {
            // Create audio element if it doesn't exist
            audioElement = document.createElement('audio');
            audioElement.id = 'background-music';
            
            // Check if it's April 1st and set appropriate music file
            if (isAprilFoolsDay()) {
                audioElement.src = 'fullhampster.mp3';
            } else {
                audioElement.src = 'music.mp3';
            }
            
            document.body.appendChild(audioElement);
        }
        
        // Set audio properties
        audioElement.volume = 0.5; // Set volume to 50%
        audioElement.loop = true; // Loop the music
        
        // Try to play the music
        const playPromise = audioElement.play();
        
        // Modern browsers return a promise from play()
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Background music started!');
                // Add controls to let user stop the music if desired
                addMusicControls(audioElement);
            }).catch(error => {
                // Auto-play was prevented by the browser
                console.log('Auto-play prevented:', error);
                // Add a manual play button since auto-play failed
                addPlayButton(audioElement);
            });
        }
        
        // Set flag in memory for this page visit only
        musicPlayed = true;
    }
}

// Function to add a small music control to the page
function addMusicControls(audioElement) {
    // Don't add controls in WAP version
    if (isWAPVersion()) return;
    
    const controlDiv = document.createElement('div');
    controlDiv.className = 'music-controls desktop-only'; // Add desktop-only class
    controlDiv.innerHTML = '<div class="music-icon">🎵</div>' +
                          '<div class="music-controls-inner">' +
                          '<button id="music-pause">Pause Music</button>' +
                          '<button id="music-stop">Stop Music</button>' +
                          '</div>';
    
    document.body.appendChild(controlDiv);
    
    // Add event listeners to buttons
    document.getElementById('music-pause').addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            this.textContent = 'Pause Music';
        } else {
            audioElement.pause();
            this.textContent = 'Play Music';
        }
    });
    
    document.getElementById('music-stop').addEventListener('click', function() {
        audioElement.pause();
        audioElement.currentTime = 0;
        controlDiv.remove();
    });
    
    // Show controls on hover
    controlDiv.addEventListener('mouseenter', function() {
        document.querySelector('.music-controls-inner').style.display = 'block';
    });
    
    controlDiv.addEventListener('mouseleave', function() {
        document.querySelector('.music-controls-inner').style.display = 'none';
    });
}

// Function to add a play button if auto-play fails
function addPlayButton(audioElement) {
    // Don't add play button in WAP version
    if (isWAPVersion()) return;
    
    const playButton = document.createElement('div');
    playButton.className = 'play-music-button desktop-only'; // Add desktop-only class
    playButton.innerHTML = '🎵 Play Music';
    
    document.body.appendChild(playButton);
    
    playButton.addEventListener('click', function() {
        audioElement.play()
            .then(() => {
                this.remove();
                addMusicControls(audioElement);
            })
            .catch(error => {
                console.log('Play failed:', error);
                this.innerHTML = '❌ Cannot play music';
            });
    });
}

// Add event listeners to trigger music on first interaction
function setupMusicTriggers() {
    // Don't set up music triggers in WAP version
    if (isWAPVersion()) {
        console.log('WAP version detected, music disabled');
        return;
    }
    
    // List of events that we'll consider as "interaction"
    const interactionEvents = [
        'click', 'keydown', 'scroll', 'touchstart'
    ];
    
    // Function to handle the first interaction
    function handleFirstInteraction() {
        console.log('User interaction detected, playing music...');
        playBackgroundMusic();
        
        // Remove all event listeners after first interaction
        interactionEvents.forEach(eventType => {
            document.removeEventListener(eventType, handleFirstInteraction);
        });
    }
    
    // Add event listeners for each interaction type
    interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, handleFirstInteraction);
    });
}

// Set up music triggers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupMusicTriggers); 