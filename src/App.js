import React from 'react';
import Game from './components/Game';
import './styles/game.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <div className="tiktok-link">
        <a href="https://www.tiktok.com/@vibinwiththechef" target="_blank" rel="noopener noreferrer">
          <img src="/Images/logo.png" alt="VibinWithTheChef TikTok" />
        </a>
      </div>
      <Game />
      <Analytics />
    </div>
  );
}

export default App;