"use client"; // Ensure this is a Client Component

import { useState, useEffect } from 'react';
import Navbar from '../components/navbar'; // Adjust the path if necessary

function CountdownTimer() {
  const [duration, setDuration] = useState<number>(0); // Duration in seconds
  const [timeLeft, setTimeLeft] = useState<number>(0); // Time left in seconds
  const [isActive, setIsActive] = useState<boolean>(false); // Countdown active status
  const [hasEnded, setHasEnded] = useState<boolean>(false); // Countdown ended status

  // Handle input change for duration
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  // Set duration for the countdown
  const handleSetDuration = () => {
    setTimeLeft(duration);
    setHasEnded(false); // Reset hasEnded when setting duration
  };

  // Start the countdown
  const handleStart = () => {
    if (timeLeft > 0) setIsActive(true);
  };

  // Pause the countdown
  const handlePause = () => {
    setIsActive(false);
  };

  // Reset the countdown
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(0);
    setHasEnded(false); // Reset hasEnded when resetting
  };

  // Effect to manage countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null; // Type for the interval

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      if (interval) {
        clearInterval(interval);
      }
      setIsActive(false);
      setHasEnded(true);

      // Play the audio when the timer ends
      const audio = new Audio('/audio/alarm.mp3');
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }

    // Cleanup interval on component unmount
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft]);

  // Format time as MM:SS
  const formatTime = (time: number): string => { // Explicitly define 'time' as a number
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      {/* Add Navbar here */}
      <Navbar />

      {/* Countdown timer content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-8" style={{ backgroundColor: "#0d1b2a" }}>
        <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md" style={{ backgroundColor: "#1b263b" }}>
          <h1 className="text-3xl font-extrabold mb-6 text-center" style={{ color: "#e0e1dd" }}>Countdown Timer</h1>

          <div className="mb-4">
            <input
              className="w-full border border-[#e0e1dd] p-3 rounded-lg bg-[#415a77] text-[#e0e1dd] placeholder-[#e0e1dd] focus:outline-none focus:ring-2 focus:ring-[#9fb8ad]"
              type="number"
              value={duration}
              onChange={handleDurationChange}
              placeholder="Set Duration (seconds)"
            />
          </div>

          <div className="flex justify-between mb-6">
            <button
              onClick={handleSetDuration}
              className="py-3 px-4 w-32 rounded-lg transition transform hover:scale-105 hover:bg-[#9fb8ad] hover:text-[#1b263b]"
              style={{ backgroundColor: "#9fb8ad", color: "#060706" }}
            >
              Set Duration
            </button>
            <button
              onClick={handleStart}
              className="py-3 px-4 w-32 rounded-lg transition transform hover:scale-105 hover:bg-[#9fb8ad] hover:text-[#1b263b]"
              style={{ backgroundColor: "#9fb8ad", color: "#060706" }}
            >
              Start
            </button>
          </div>

          <div className="flex justify-between mb-6">
            <button
              onClick={handlePause}
              className="py-3 px-4 w-32 rounded-lg transition transform hover:scale-105 hover:bg-[#9fb8ad] hover:text-[#1b263b]"
              style={{ backgroundColor: "#9fb8ad", color: "#060706" }}
            >
              Pause
            </button>
            <button
              onClick={handleReset}
              className="py-3 px-4 w-32 rounded-lg transition transform hover:scale-105 hover:bg-[#9fb8ad] hover:text-[#1b263b]"
              style={{ backgroundColor: "#9fb8ad", color: "#060706" }}
            >
              Reset
            </button>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold" style={{ color: "#e0e1dd" }}>{`Time Left: ${formatTime(timeLeft)}`}</p>
          </div>

          {hasEnded && <p className="text-red-500 text-center font-bold">Times up</p>}
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
