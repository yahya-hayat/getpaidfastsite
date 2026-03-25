'use client';

import { useState, useRef, useEffect } from 'react';

export default function HeroDashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Dashboard card */}
      <div className="border border-border bg-card">
        {/* Invoice header */}
        <div className="p-5 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Invoice Discussed
            </p>
            <span className="font-mono text-xs text-accent">Promised</span>
          </div>

          <div className="border border-accent/30 bg-accent/5 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent" />
                <span className="text-sm font-semibold tracking-tight">INV-0034</span>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold tracking-tight">$650.00</p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Due Dec 5, 2025</span>
                <span className="text-accent">3 days overdue</span>
              </div>
              <div className="flex justify-between">
                <span>Payment promised by</span>
                <span className="text-foreground font-medium">Dec 15, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transcript */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Transcript
            </p>
            <span className="text-xs text-muted-foreground">21 messages</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex gap-3">
              <span className="w-12 shrink-0 text-accent font-semibold">AI</span>
              <span className="text-muted-foreground">Hi, this is Max calling from Brilliant Construction NZ.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-12 shrink-0 text-foreground font-semibold">Client</span>
              <span className="text-muted-foreground">Yeah. What&apos;s the purpose of your call?</span>
            </div>
            <div className="flex gap-3">
              <span className="w-12 shrink-0 text-accent font-semibold">AI</span>
              <span className="text-muted-foreground">I&apos;m calling about invoice INV-0034 for $650. When can you make a payment?</span>
            </div>
            <div className="flex gap-3">
              <span className="w-12 shrink-0 text-foreground font-semibold">Client</span>
              <span className="text-muted-foreground">I can get that sorted by the 15th.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio player overlay */}
      <div
        className="absolute -bottom-6 left-4 right-4 border border-accent bg-card p-3 flex items-center gap-3 cursor-pointer hover:bg-muted transition-colors"
        onClick={togglePlay}
      >
        <audio ref={audioRef} src="/recording.mp3" preload="metadata" />
        <button className="w-8 h-8 border border-accent flex items-center justify-center shrink-0">
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="7" y="6" width="3" height="12" fill="currentColor" className="text-accent" />
              <rect x="14" y="6" width="3" height="12" fill="currentColor" className="text-accent" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M8 6V18L17 12L8 6Z" fill="currentColor" className="text-accent" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-semibold tracking-tight truncate">Listen to a sample call</span>
            <span className="font-mono text-[10px] text-muted-foreground ml-2 shrink-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <div className="h-1 bg-border w-full">
            <div
              className="h-full bg-accent transition-all duration-150"
              style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
