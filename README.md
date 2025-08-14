# Task Thoughts:

##Problem 1: 
###Limitations: 
Since I was creating a simplistic version of the game, the main things that I can improve on is: 
1. UI/UX of design
    - Improving the modals and buttons for how it is presented that a person wins(kept it minimal currently)
    - Different screen size layout would impact how UI and interactivity would be
2. File Organisation. Making code flow more smoothly by splitting things into components and debatebly hooks depending on how project will scale. Could refactor/simplify code sections to reduce lines/increase readability of functions. 
3. Testing. Can add testing for individual flows to ensure that they work. Currently only test the file that checks for a winner(and haven't included some various scenarios(e.g. draws, conditions during games)), however can test other functionality(e.g. the game logic and adding error cases). 


##Problem 2: 
Changed the file structure a bit to be able to accomodate the new functionality. Similar thoughts to the first problem, in which more testing could be added to check complete functionality. Changed the winning function (see winner.ts file) to something that can scale/accomodate different sizes and variations of the game and moved the board/ restart functionalities out of the main file to their own component, whilst adding functionalities to be able to change board size(within limit). 
Note: Main thought process was about if the winning condition would change(e.g. be more than 3 in a row), so made it customisable with a win length variable that a user can select. 

##Problem 3:
 Did not start problem 3, however general approach would be: 
- Create DB containing a players table, storing a players name(or X/O), player ID, and a games table that has information about each game, where it stores winner(joined by ID)/ outcome of games. Can add additional info(e.g. size of game, conditions to win etc..). DB info would be stored in a .env file.  
- I would create endpoints(POST/GET) to be able to fetch information from the backend(using express), which would be triggered at the end of a game(when winner/draw).
- Then I would add testing for the endpoints created, types used in backend and any alterations made to the frontend due to it.    
# Tic-Tac-Toe
The below problems are to allow us a glimpse into your problem solving ability, style and current skill set. Please do problem 1, and optionally problem 2 or 3 depending on where you are most comfortable. We expect this test to take 2-3 hours, if you find yourself spending more than this do not aim to solve all 3 problems! We will not be judging based on number of problems completed only the style and thought process.

## Problems
### Problem 1
We have started a basic game of Tic-Tac-Toe as outlined [here](https://en.wikipedia.org/wiki/Tic-tac-toe) but we don't have anyone good enough to code to finish it! 
- Please implement a complete basic game of Tic-Tac-Toe
- Please use React and TypeScript throughout, if you know TailwindCSS please expand on what is already provided, otherwise it is fine to use raw styling 
- Both players will play out of the same application, it is sufficient to just switch the current player each time a move is played
- Once a game is completed, I should be able to start another game 


### Problem 2
We are bored with the basic game now, can you make it so the board can be scaled to any size? 
- Add some kind of input which allows me to change the board size
- The board size should be a number between 3 and 15 

### Problem 3
We want to store game results in a database.
- create a simple backend server (using a simple generator provided by your IDE is fine)
- use any SQL/noSQL database to store the results
- return simple stats back to the front-end: number of win/losses for each player.

Simplification for the task:
- do not use database migration tools, just an SQL or other script to create tables is fine
- add comments about what you were thinking about but didn’t implement because of restrictions
- host the project on your local machine, optional hosting in a public place is fine
- optionally create a Dockerfile to build both back-end and front-end. Do not create any deployment scripts, if it's not necessary.
- optional tests are welcome


## Quickstart
- Make sure you have **node** installed
- `cd client`
- `npm i`
- `npm start`
