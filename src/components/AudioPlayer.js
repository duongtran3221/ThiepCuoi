// src/components/AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Audio file - bạn có thể thay bằng file nhạc của mình
  // Đặt file nhạc trong thư mục public và dùng đường dẫn tương đối
  const audioUrl = "/music/wedding-music.mp3"; // Thay bằng file nhạc thực tế

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Audio play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Xử lý khi audio kết thúc
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <>
      <div className="audio-container">
        <button 
          className={`btnAudio ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        >
          {/* Icon SVG cho trạng thái tắt */}
          <svg className="icon volume-mute" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor"/>
            <path d="M16 9L21 14M21 9L16 14" stroke="currentColor" strokeWidth="2"/>
          </svg>
          
          {/* Icon SVG cho trạng thái bật */}
          <svg className="icon volume-up" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="currentColor"/>
            <path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke="currentColor" strokeWidth="2"/>
            <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      
      {/* Audio element ẩn */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" loop />
    </>
  );
};

export default AudioPlayer;