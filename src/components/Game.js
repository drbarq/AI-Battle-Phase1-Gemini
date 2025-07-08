import React from 'react';
import useGameLogic from '../hooks/useGameLogic';

const Game = () => {
  const { snake, food, gameOver, restartGame, setDirection, GRID_SIZE, TILE_SIZE } = useGameLogic();

  return (
    <div>
      <h1>Snake Game</h1>
      {gameOver && (
        <div>
          <h2>Game Over</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      <div
        className="game-board"
        style={{
          width: GRID_SIZE * TILE_SIZE,
          height: GRID_SIZE * TILE_SIZE,
          border: '1px solid black',
          position: 'relative',
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake"
            style={{
              left: segment.x * TILE_SIZE,
              top: segment.y * TILE_SIZE,
              width: TILE_SIZE,
              height: TILE_SIZE,
              backgroundColor: 'green',
              position: 'absolute',
            }}
          />
        ))}
        <div
          className="food"
          style={{
            left: food.x * TILE_SIZE,
            top: food.y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE,
            backgroundColor: 'red',
            position: 'absolute',
          }}
        />
      </div>
      <div className="joystick">
        <button onClick={() => setDirection({ x: 0, y: -1 })}>Up</button>
        <div>
          <button onClick={() => setDirection({ x: -1, y: 0 })}>Left</button>
          <button onClick={() => setDirection({ x: 1, y: 0 })}>Right</button>
        </div>
        <button onClick={() => setDirection({ x: 0, y: 1 })}>Down</button>
      </div>
    </div>
  );
};

export default Game;
