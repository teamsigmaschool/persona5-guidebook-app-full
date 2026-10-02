import React, { useState, useRef, useEffect } from 'react';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/theme.flac');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => {
        console.log("Audio play failed:", e);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay} 
      className={`audio-icon-btn ${isPlaying ? 'playing' : 'muted'}`}
      title={isPlaying ? "Mute Persona 5 OST" : "Play Persona 5 OST"}
      aria-label="Toggle Audio"
    >
      {isPlaying ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 0px 3px var(--p5-red))' }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FFFFFF"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#FFFFFF"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      )}
    </button>
  );
}

export default AudioPlayer;
