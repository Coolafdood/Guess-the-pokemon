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

 **Navbar – Desktop**
 <img width="1892" height="857" alt="image" src="https://github.com/user-attachments/assets/454cfe81-a34f-4056-80aa-5626385c1c15" />

**Navbar – Mobile**
 <img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/2e395d9c-d96b-41bd-901d-b5729072a8c1" />
<img width="1080" height="2340" alt="image" src="https://github.com/user-attachments/assets/c3dd001a-f2eb-4bee-a4cf-8d99f222baef" />
 **Footer** 
 <img width="1036" height="695" alt="image" src="https://github.com/user-attachments/assets/3fb000ed-6c92-42d9-af2c-d452a5bce21c" />
 **Pokémon Image**
<img width="1028" height="676" alt="image" src="https://github.com/user-attachments/assets/a4426562-1835-492f-817b-5b3609b71c6e" />
**Submit Guess** - Correct
<img width="340" height="416" alt="image" src="https://github.com/user-attachments/assets/ae6f8e3b-d0bb-419a-922c-063e4b9673c8" />

**Submit Guess**  Incorrect
<img width="293" height="376" alt="image" src="https://github.com/user-attachments/assets/92e3cb9e-607b-4b0e-8a68-1d4fb1f484c8" />

 **Next Pokémon** 
 <img width="523" height="730" alt="image" src="https://github.com/user-attachments/assets/67f7ac96-3eda-4dff-b950-dcd58f1625f2" />

 <img width="505" height="713" alt="image" src="https://github.com/user-attachments/assets/cf7af886-9f64-4712-803f-0e101fd7ab71" />

 **Game Completion** 

<img width="771" height="395" alt="image" src="https://github.com/user-attachments/assets/ce9bf065-d826-41bf-a7be-a0e7dcd0f4d5" />

**Reset Function** 
<img width="513" height="760" alt="image" src="https://github.com/user-attachments/assets/6daab79d-e1aa-485a-949e-24a59ca910e4" />

**Responsiveness** 
Laptop home index 1366px to 1920px
<img width="1020" height="667" alt="image" src="https://github.com/user-attachments/assets/c8406dac-9490-44fd-b9cf-3b489ebb965c" />

tablet home index 768px to 1280px
<img width="846" height="757" alt="image" src="https://github.com/user-attachments/assets/4210bfa7-6773-4df4-b55c-fd4c1d2819be" />


phone home index 360px to 414px wide:
<img width="252" height="758" alt="image" src="https://github.com/user-attachments/assets/4057735e-1c71-42ee-ad70-19e11afa5135" />



laptop pokemon game 
<img width="960" height="757" alt="image" src="https://github.com/user-attachments/assets/2aabf41f-f1dc-406b-929d-a64b166ca0b7" />


tablet pokemon game
<img width="536" height="752" alt="image" src="https://github.com/user-attachments/assets/5a8c35b8-e025-4786-999b-3ad372a4fda7" />

phone pokemon game
<img width="242" height="756" alt="image" src="https://github.com/user-attachments/assets/89297517-e512-4e26-a7cc-2841b6ee20b8" />


## User Cases
*To be added: scenarios of how different users interact with the game.*  
