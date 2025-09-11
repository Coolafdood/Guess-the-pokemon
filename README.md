# Table of Contents
1. [Introduction](#introduction)   
2. [Wireframe](#wireframe)  
3. [Features](#features)  
4. [Used Tools](#used-tools)  
5 [Testing](#testing)  

---

## Introduction
This web application is a **Pokémon guessing game**.  

- The **homepage** introduces the game’s theme: testing the user’s knowledge of Pokémon.  
- When the user navigates to the **game page**, they see a hero image of a Pokémon silhouette.  
- The user can type their guess into a text box and submit it.  
- Two buttons are provided:  
  - **Submit Guess** → checks the answer.  
  - **Next Pokémon** → loads a new random Pokémon.  
- Correct answers display a green “Correct!” message.  
- Incorrect answers display a red “Incorrect!” message.  
- A running tally is kept throughout the game.  
- At the end of 20 rounds, the user is given a final score (e.g., `18/20`).  
- After the results, the game resets so the user can play again.

---*  

## Wireframe
Index.html
desktop:
1366px to 1920px
<img width="890" height="420" alt="image" src="https://github.com/user-attachments/assets/c1a27beb-bd7c-4a85-8e93-fb8315fd61b9" />



index tablet
768px to 1280px
<img width="550" height="492" alt="image" src="https://github.com/user-attachments/assets/6bb07403-a8e4-401d-b9d8-081137caecfd" />



index phone
360px to 414px wide:
<img width="252" height="532" alt="image" src="https://github.com/user-attachments/assets/76593d18-25ed-4038-91b3-9e8a0f70773e" />


pokemongame.html
desktop
1366px to 1920px
<img width="831" height="452" alt="image" src="https://github.com/user-attachments/assets/7a0c0a48-2401-49d3-8cde-5a975f62e32b" />

pokemongame tablet
768px to 1280px
<img width="550" height="492" alt="image" src="https://github.com/user-attachments/assets/30449846-889a-4d69-bfcf-d396a5b2de88" />

pokemongame phone
360px to 414px wide:
<img width="218" height="482" alt="image" src="https://github.com/user-attachments/assets/b6abdef7-c0ad-41ad-9750-fcc129fcf4fb" />

## Features
*To be added: list the features of your game (e.g., random Pokémon selection, score tracking, responsive design).*  

## Used Tools
HTML5 — page structure.

CSS3 / Bootstrap 5 — responsive design and layout.

JavaScript (Vanilla) — game logic and interactivity.

Font Awesome — icons (dragon, trophy, etc.).

Git & GitHub — version control and hosting.  

## Testing
| Feature              | Action                                 | Expected Result                                     | Actual Result     | Pass/Fail |
| -------------------- | -------------------------------------- | --------------------------------------------------- | ----------------- | --------- |
| **Navbar – Desktop** | Open on desktop (≥1366px)              | Navbar visible with links aligned right             | Works as expected | ✅ Pass    |
| **Navbar – Mobile**  | Open on phone (≤414px)                 | Navbar collapses into burger menu, expands on click | Works as expected | ✅ Pass    |
| **Footer**           | Scroll page / resize window            | Footer sticks to bottom of viewport                 | Works as expected | ✅ Pass    |
| **Pokémon Image**    | Start game                             | First Pokémon image loads correctly                 | Works as expected | ✅ Pass    |
| **Submit Guess**     | Enter correct Pokémon name             | Displays green "Correct!" message                   | Works as expected | ✅ Pass    |
| **Submit Guess**     | Enter incorrect Pokémon name           | Displays red "Incorrect!" message                   | Works as expected | ✅ Pass    |
| **Next Pokémon**     | Click "Next Pokémon" button            | Loads new Pokémon image                             | Works as expected | ✅ Pass    |
| **Game Completion**  | Play through all 20 Pokémon            | Displays final score and restarts automatically     | Works as expected | ✅ Pass    |
| **Reset Function**   | After 20 rounds                        | Game resets to round 1, score cleared               | Works as expected | ✅ Pass    |
| **Responsiveness**   | Resize to desktop, tablet, phone sizes | Layout adapts, images/buttons scale properly        | Works as expected | ✅ Pass    |
| **Cross-browser**    | Test in Chrome, Firefox, Edge          | Game runs without layout or script issues           | Works as expected | ✅ Pass    |

 **Navbar – Desktop**
 <img width="1892" height="857" alt="image" src="https://github.com/user-attachments/assets/454cfe81-a34f-4056-80aa-5626385c1c15" />

## User Cases
*To be added: scenarios of how different users interact with the game.*  
