import React, { useState, useEffect } from 'react';
import { Heart, Camera, Clock3 } from 'lucide-react';

function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your relationship start date here
  const startDate = new Date('2023-07-28'); // Update this with your actual start date

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const photos = [
    "public/pic1.jpg",
    "public/pic2.jpg",
    "public/pic3.jpg",
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-2 flex items-center justify-center gap-2">
            <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
            Hada & Hamzi
            <Heart className="text-pink-500 animate-pulse" fill="currentColor" />
          </h1>
          <p className="text-pink-400 text-lg">I love you Hadiya!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock3 className="text-pink-500" />
            <h2 className="text-2xl font-semibold text-pink-600">Time Together</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{time.days}</div>
              <div className="text-pink-400">Days</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{time.hours}</div>
              <div className="text-pink-400">Hours</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{time.minutes}</div>
              <div className="text-pink-400">Minutes</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4">
              <div className="text-3xl font-bold text-pink-600">{time.seconds}</div>
              <div className="text-pink-400">Seconds</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Camera className="text-pink-500" />
            <h2 className="text-2xl font-semibold text-pink-600">Cute Photos of my bebe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-pink-500 text-lg">💕 Forever & Always 💕</p>
          <p className="text-pink-400">Together since {startDate.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
