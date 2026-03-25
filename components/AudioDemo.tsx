'use client';

import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioDemo() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(pct);
  };

  const onEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  return (
    <section id="demo" className="py-20 md:py-28 lg:py-32 bg-muted border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              Hear It
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
              Judge for
              <br />
              <span className="text-accent">yourself</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              This is a real sample call from our AI agent. Natural tone,
              professional delivery, context-aware conversation. Not a
              robocall.
            </p>
          </div>

          {/* Right — player */}
          <div className="border border-border p-8 md:p-10">
            <audio
              ref={audioRef}
              src="/recording.mp3"
              onTimeUpdate={onTimeUpdate}
              onEnded={onEnded}
              preload="metadata"
            />

            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Sample Call — Overdue Invoice Reminder
            </p>

            {/* Waveform / progress bar */}
            <div
              className="relative h-2 bg-border cursor-pointer mb-8 group"
              onClick={seek}
            >
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
              {/* Playhead */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
              />
            </div>

            {/* Play button */}
            <button
              onClick={toggle}
              className="group relative inline-flex items-center gap-3 text-accent font-semibold uppercase tracking-wider text-sm active:translate-y-px transition-all duration-150"
            >
              {playing ? (
                <Pause size={16} strokeWidth={1.5} />
              ) : (
                <Play size={16} strokeWidth={1.5} />
              )}
              {playing ? 'Pause' : 'Play Sample'}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-accent origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-150" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
