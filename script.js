const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('valentineAudio');
    
    // Set random position when metadata is loaded
    audio.addEventListener('loadedmetadata', function() {
      const randomTime = Math.random() * audio.duration;
      audio.currentTime = randomTime;
      
      // Attempt to play audio automatically
      audio.play().catch(error => {
        // If autoplay is blocked, show browser's native controls
        audio.controls = true;
        console.log('Autoplay blocked - click to play');
      });
    });
  
    // Fallback for browsers that might have loaded metadata already
    if (audio.readyState > 0) {
      audio.currentTime = Math.random() * audio.duration;
      audio.play();
    }
  });