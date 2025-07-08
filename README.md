# Snake Game

This is a simple Snake game implemented using React, featuring basic game mechanics, keyboard controls, and an on-screen joystick for broader compatibility.

## Features

-   **Core Gameplay:** Classic Snake game with snake movement, food generation, and collision detection (walls and self).
-   **Controls:** Supports both keyboard arrow keys and an on-screen joystick for movement.
-   **Restart Functionality:** Allows players to restart the game after a game over.
-   **TikTok Integration:** Includes a link to the `VibinWithTheChef` TikTok profile, displayed with a custom image.
-   **Vercel Analytics:** Integrated with Vercel Analytics to track page views and visitor data.

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd AI-Battle-Prompt/AI-Battle:Phase1:Gemini/snake-game
    ```
    *(Replace `<your-repository-url>` with the actual URL of your repository.)*

2.  **Navigate to the project directory:**
    ```bash
    cd snake-game
    ```

3.  **Install dependencies:**
    ```bash
    npm install --force
    ```
    *Note: `--force` is used to resolve potential peer dependency conflicts, particularly with TypeScript versions.*

## Running the Game

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

The game will typically open in your browser at `http://localhost:3000`.

## Deployment

This project is configured for deployment on Vercel. The `start` script in `package.json` has been updated to explicitly use the full path to `react-scripts`, ensuring robust execution in various environments, including Vercel's build process.

## Technologies Used

-   React
-   JavaScript
-   CSS
-   Vercel Analytics