import { useState, useEffect } from 'react';

const GRID_SIZE = 20;
const TILE_SIZE = 20;

const getRandomCoordinate = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};

const useGameLogic = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomCoordinate());
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Start moving up
  const [gameOver, setGameOver] = useState(false);

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomCoordinate());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }

        // Self collision
        for (let i = 1; i < newSnake.length; i++) {
          if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
            setGameOver(true);
            return prevSnake;
          }
        }

        newSnake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
          setFood(getRandomCoordinate());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 200);

    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver]);

  return { snake, food, gameOver, restartGame, setDirection, GRID_SIZE, TILE_SIZE };
};

export default useGameLogic;
