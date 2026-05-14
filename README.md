# Web Projects Learning

A collection of beginner-friendly web development projects built while learning HTML, CSS, JavaScript, and basic frontend/backend concepts.

Most projects in this repository are small, browser-based practice apps that can be opened directly from their HTML files. The repo also contains a couple of larger local projects that are intentionally ignored by Git and are documented separately below.

## Repository

- Remote: `https://github.com/Kushagra1857/WebProjectsLearning.git`
- Main branch: `main`

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Static assets such as images, SVGs, WebP files, and video
- The assests are also available in the repo per project
- React, Node.js, Express, MongoDB, and Socket.IO in local-only ignored projects

## Tracked Projects

| Project | Path | Description |
| --- | --- | --- |
| Colour Changing | `8_projects/01_colourChanging` | A simple DOM project where clicking color boxes changes the page background color. |
| BMI Calculator | `8_projects/02_bmi` | Calculates BMI from height and weight, validates input, and shows the user's BMI category. |
| Digital Clock | `8_projects/03_digitalClock` | Displays the current local time and updates it live in the browser. |
| Guess Number | `8_projects/04_guessNumber` | A number guessing game where the player has 10 attempts to guess a random number between 1 and 100. |
| Calculator | `calculator` | A basic calculator with number buttons, arithmetic operators, clear, delete, and evaluate actions. |
| Fashion Store | `fasion_store` | A static fashion store page with product images, a shopping banner, and festival discount table. |
| Salesforce Clone | `sales-force-clone` | A static Salesforce-inspired landing page clone using local image and video assets. |
| Tic Tac Toe | `tic-tac-toe` | A two-player tic tac toe game with win detection, tie handling, and new game reset. |
| Unlimited Colours | `unlimitedColours` | Starts and stops automatic random background color changes using JavaScript timers. |

## Project Structure

```text
projects/
+-- 8_projects/
|   +-- 01_colourChanging/
|   +-- 02_bmi/
|   +-- 03_digitalClock/
|   +-- 04_guessNumber/
+-- calculator/
+-- fasion_store/
+-- sales-force-clone/
+-- tic-tac-toe/
+-- unlimitedColours/
+-- .gitignore
+-- README.md
```

## How to Run

These tracked projects are static browser projects. You can run them by opening the main HTML file for each project.

Examples:

```text
8_projects/01_colourChanging/index.html
8_projects/02_bmi/index.html
8_projects/03_digitalClock/index.html
8_projects/04_guessNumber/index.html
calculator/index.html
fasion_store/main.html
sales-force-clone/main.html
tic-tac-toe/index.html
unlimitedColours/index.html
```

Then open the shown localhost URL and browse to the project folder.

## Notes

- The `sales-force-clone` project currently uses absolute asset paths in some places. It may need path updates if moved to another machine or deployed online.
- The `calculator` project uses JavaScript `eval()` for expression evaluation, which is okay for a learning project but should be replaced with a safer parser in production code.
