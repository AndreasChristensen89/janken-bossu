# Janken Bossu

The idea behind this project is to create a simple single-player game of rock paper scissors lizard spock which takes place in a cartoony setting.
The inspiration is taken from my own experiences from living in Japan, using a Japanese animation style, while incorporating my own drawings in Adobe Illustrator.
The target group is anyone who enjoys a simple game of chance. The game requires very little understanding of the rules, and can be won without knowing anything about strategy. However, the animation style would most likely be suited for people who enjoys a cartoony look and who can see the link to the Japanese style. Anyone with a browser on a laptop, a tablet, or a phone can play the game on modern browsers.

The name Janken Bossu is taken from the name of rock paper scissors in Japanese, which is "Janken", combined with the Japanese pronunciation of boss, which is "bossu". The aim of the game is to play Janken to become the boss (bossu).

## Features

### Existing features:
* __Navigation bar__
    * The navigation bar is on all pages. It has links to the Home page, the Rules page, and the Contact page.
    Visually, it is identical on each page but with a bottom border under the current page. It is a hamburger-style bar, and appears and dissapears when clicking the round icon. It appears by sliding down from the top and covers a small area in the left side of the page and dissapears by sliding up.
    * This section allows the user to always be able to navigate to all parts of the website without going back to the home page, or scrolling to the top. The hamburger style allows the bar to be hidden in the top corner when not opened, thus creating more space for the game.

![Nav Bar](/assets/images/readme-pictures/navigation-bar.webp)

* __Landing page image / start page__
    * The landing page has a centered heading with the title of the game at the top. Underneath is a centered sub-heading which acts as the subtitle. Finally, underneath the subtitle is the play button which has an animation on it to scale the size up and down. The background is a cartoony bright colored open office space with a bonsai tree close to the window. The windows show buildings outside.
    * The titles and play button are shown to indicate that this is the start of the game. The play button animation is used to indicate that this button should be noticed and interacted with. The background is displayed to show the setting of the game,

![Landing page](/assets/images/readme-pictures/landing-page.webp)

* __Introduction__
    * This section appears after clicking play. It has a centered text-box with a quick tutorial of how to play, and underneath is a centered green start button.
    * The quick tutorial gives players the information they need to play the game. The start button is green and animated and sticks out to invite users to click it to start the game.

![Introduction](/assets/images/readme-pictures/introduction.webp)

* __Main game screen__
    * At the top of the screen the name of the current opponent is displayed as a title. 
    * Underneath is a green oval-shaped element with "100" written in it - this is the health meter. 
    * Underneath the health meter are five buttons with pictures of the different choices players can make.
    * Under the buttons is the opponent element with a picture of the current opponent - if this is the first opponent then the element is not animated, but if it isn't the opponent is animated with an opacity going from 0.0 to 1.0 over a second.
    * When a button is clicked the player choice appears in the middle of the screen, meaning that the picture of the button is copied to this new element. The new element is animated to scale up and down and a green "go" button is generated and appears under the player choice.
    * Lastly, in the right corner is a restart button.
    * The opponent title changes according to the opponent and tells the players who they are versing. The green health meter changes numbers and colors according to how much health is left (green, orange, yellow, and red). The color code helps players easily understand how close they are to a loss. The five buttons clearly show the hand signals that are attached to them and they scale up when a mouse hovers over them, and scale down when mouse is off. The player choice animation signals to the player that this displayed hand is ready to be played. The opponent element is animated to appear in order to draw attention to the new opponent.

![Main game](/assets/images/readme-pictures/main-game-screen.webp)

* __Loosing screen__
    * When a loss is registered the computer choice is displayed in a new element. The computer hand is animated to scale up a lot, and then scales down to land underneath a newly generated grey text-box which gives players a short comment on the loss.
    * The player choice animation from before is set to stop.
    * The health bar is animated to blink red and black, and the health number drops while the color changes according to the value.
    * After two seconds, the hand-buttons slightly scale up and down two times.
    * The computer winning hand is scaled up in order to give the player a sense of defeat. It also draws their attention to the hand that beat them. The comments in the text box are randomly picked and they are encouraging and energetic which signals to the players to have another go. The health bar blinks in order to signal that damage has been taken. Just after these animations the player might wonder what to do next, which is why the buttons scale up and down in order to signal the player to click them again.

![Loosing screen](/assets/images/readme-pictures/losing-screen.webp)

* __Draw screen__
    * When a draw is registered the computer choice is generated and inserted underneath the player choice. Underneath the computer choice a grey text-box is also generated with the message of "Draw! Try again". The computer choice and player choice elements are animated to bump against each other two times.
    * The animation signals that the two hands are evenly matched. The message is short and clear, and should not easily be misunderstood.

![Draw screen](/assets/images/readme-pictures/draw-screen.webp)
    
* __Win screen__
    * All previous game elements are removed and the winning hand choice is shown in an animated element that scales up and down. To the right of the winning hand is the computer losing hand which is animated going back and forth from opacity 1.0 to 0.1. Underneath is a text box with text that declares that you beat the current opponent, and tells you to get ready for the next opponent. Under the next box is a green "next opponent" button, which is animated to scale up and down with a slower pace than the winning hand.
    * The winning hand is animated to scale up and down to signal victory. The other opacity animation solidifies the sensation of victory. The winning message is short and clear, and the green button signals users to click on it via the animation.

![Win screen](/assets/images/readme-pictures/win-screen.webp)

* __Game over screen__
    * All previous game elements are removed and a large black text box is inserted at the top center with the text "Game Over!". This box is animated to scale up and down.
    * Underneath is a centered grey text box with text that explains that the player lost and which also encourages players to try again.
    * Underneath is a green round button with the text "Try again"
    * The black color of the game over text is a clear opposite to all previous colors, which are light a bright, which is meant to invoke a negative sensation. The animation is there in order to draw the player's eyes to it. The losing message from the grey box is not harsh but instead reminds the player that this is game of chance "Looks like the odds were against you". It also encourages players to try again. The "try again" button is large and clear, and the green color is meant to give a "go" feeling similar to the play button and the start button.                                                                                                                       

![Game over screen](/assets/images/readme-pictures/game-over-screen.webp)

* __Victory screen__
    * A green centered text-box with the content "You Win!" is at the top. It scales up and down continuously. 
    * Underneath is a light-blue text-box that declares that the player managed to rise to the top and has won the game.
    * Underneath is a green button restart button, which is also used in the game over screen.
    * The scaling of the win title draws the users' eyes to it, which aims to make sure that what is going on is clear. The green color gives a positive feeling. The text-box underneath is in a light color with congratulative text, which is most often expected after winning a game. Lastly, the try again button is similar in style to the one on the gameover screen, but with the text "restart" instead of "try again", which differs in tone.

![Victory screen](/assets/images/readme-pictures/victory-screen.webp)

* __Rules page__
    * Dark centered heading with "how to play"
    * Underneath short introduction of the game in a grey-blue background text-box.
    * Underneath a green text-box with the title "What beats what?"
    * Underneath are five boxes side by side. Each has the name of a hand that players can choose, and underneath each is a picture of how the hand looks. Below the picture are two statements about what the hand in question beats in a game.
    * Below is a title similar in style to "what beats what", with the content "Setting of the game".
    * Underneath is a larger text box with an explanation of how the game Janken works in Japanese culture. Same color as the boxes further up.
    * Underneath is another large text box with an explanation of the back-story/setting of the game on this webpage. Same color as above.
    * There are three main colors - dark at the top, green for h2 titles, and lighter blue/gray for text. They are chosen to fit with the background blue, and the bonsai tree. 
    * The introduction is valuable as players may not be familiar with the extended version of rock paper scissors.
    * Explanation of what beats what is valuable as players want to be clear about the rules. The pictures complement well since people may not know all the hand signals, and that they only have the visual representation when playing the game.
    * Explanation of how rock paper scissors work on Japanese culture is valuable as it adds some context to why a Japanese setting was chosen.
    * Setting of the game is valuable as it may not be clear to the player in the beginning what the bigger purpose of the game is. Also, it adds a slight humorous twist.

![Rules page](/assets/images/readme-pictures/rules.webp)

* __Contact Page__
    * Dark centered heading with "contact" written. Same style as on rules page.
    * Underneath is a box with four input fields: First name, Last name, Email Address, and Message. The message field is larger that the other fields.
    * Below the fields are two green buttons: "clear" and "send". They both individually change to white when hovering over them.
    * The colors chosen are in line with the other pages.
    * It is valuable for the player to be able to contact the developers. The setup is very simple and straight to the point.

![Contact page](/assets/images/readme-pictures/contact-page.webp)

* __404 page__
    * Centered h1 with green background that states that this page does not exist
    * Underneath is a smaller grey-blue text-box that asks "were you looking for another page?"
    * Below is a darker text-box with a link to the landing page
    * This has value in case users manually type in the address but types it wrong

![404 page](/assets/images/readme-pictures/404-screen.webp)

### Future features to implement
* I thought it would be helpful to add and shortly after remove a text-box when losing HP. It would show the damage taken.
* In the game after a win I am considering a screen that introduces the next opponent, some context to the character, and the HP damage the character does.
* On the game screen the opponent should have stats: Health and HP damage - this would change the game so that a single win would not necesarily be enough to beat the current opponent
* A 10% chance of a critical hit/power up (e.g. double damage) could be implemented - this would only work if opponent stats are implemented

## Testing
* Chrome Developer Tools was used for testing all media queries down to 280px to fit the smallest devide available on the Google device list.
Also, developer tools was used to manipulate CSS to see direct outcomes. All pages have been tested with chrome developer tools to verify that text, pictures, and boxes all adapt well to the breakpoints for different screens. 

__Breakpoints are set to the following and are all tested to work:__

* __Max width 800px__
   * **Start screen:** 
        * Background-size is changed from contain to cover in order to avoid picture strething with floor too long. X and Y coordinates are set differently to adapt to new setting. 
        * Margins of the h1 and h2 are changed.
   * **Introduction screen:** 
        * P element's width, font-size, and padding are lowered. 
        * Font-size and width of start button lowered.
   * **Game screen:** 
        * Opponent-title's font-size and width lowered.
        * Margin for buttons changed.
        * Opponent-picture's height lowered, width increased. Top% increased, right% lowered.
        * Go-button margin lowered.
   * **Loosing screen**
        * Computer hand's margins changed.
   * **Draw screen** 
        * The "draw" message's margin is set to 0 auto.
   * **Win screen**
        * Player pick's margins changed, width lowered.
        * Computer losing hand's width lowered, margins changed.
        * Result text-box's margins lowered.
        * Next button's margins lowered.

* __Max width 600px__
   * **Start screen:** 
        * widths and font-sizes of h1 and h2 are lowerd
        * Width and height of hamburger icon increased. Font-size increased.
   * **Introduction screen:** P element's width and font-size are lowered.
   * **Game screen:** 
        * Opponent-title's font-size and width lowered.
        * Hand-buttons widths increased, margins changed.
        * Opponent-picture's top% increased. Height lowered, width increased.
        * Player-choice margins changed.
        * Restart button's width, height, and font-size increased.
   * **Loosing screen**
        * Lose-message's font-size and width are lowered, margins changed.
        * Computer hand's margins increased.
   * **Win screen**
        * Result text-box's margins, line-height, width, font-size lowered, 
        * Result text-box's margins increased.
        * Game-area's height lowered
   * **Victory screen**
        * Win-title's width and font-size lowered.
        * Win-text's width and font-size lowered.
        * Restart button's font-size lowered.
   * **Game over screen**
        * Game over title's width and font-size lowered.
        * Game over text's width and font-size lowered.

* __Max width 320px__
   * **Game screen:** 
        * Opponent-title's width lowered.
        * Hand-buttons height and width lowered, margins changed.
        * Opponent-picture's top% increased.

* __Max height 320px, Max width 700px__
    * **Game screen**
        * Hand-buttons margins changed.
        * Player-choice margins changed.
    * **Lose screen**
        * Lose-message margin lowered, width increased.
        * Computer hand's margins lowered.
    * **Win screen**
        * Player pick margins lowered
        * Computer losing hand's margin lowered.
        * Result text-box's margins lowered.
        * Game-area's height lowered
    * **Victory screen**
        * Win-text's width increased, margins lowered.
    * **Game over screen**
        * Game over title's width increased.
        * Game over text's margins lowered, width increased.


### Browser testing 
* Test on Firefox, no problems detected.
* Microsoft Edge, no problems detected.
* Media query tested on my own phone, Samsung Galaxy S9 using Chrome and Firefox, no issues.
* Media query tested on my own tablet, Ipad pro 2018 11" using Safari+Chrome, no issues.
* General testing with my own laptop, Asus 13 inch using Chrome, no issues.

All links were tested. The links connecting to external sources all work as intended. There are links on each site. 

I believe the game is set up so that it's intuitive, and users have an easy time navigating and understanding the next steps in the game. After a loss it's easy to restart, and it's also possible to restart during any point in the game.

### Bugs discovered during testing:
* I found the Google Developer Tool to not be stable in showing if the website responded correctly to different screensizes, particularly the phone settings as my own phone would show a smaller outcome.
* JShint gave an error regarding a function where a loop sets an eventlistener to trigger a function. This was just a warning, and after consulting with my mentor I was told to let it be. A similar usage is also used in the Love Maths learning project.
* During the first Jshint testing there were many warnings regarding template literals. This was unnecesarily used by me many times, and I corrected them; e.g. "xx = `${variable}`;" would be corrected to xx = variable;


### Validator testing:
* W3 Markup Validation Service completed for all HTML pages with no errors.
* Jigsaw test for CSS completed with no errors.
* Jshint completed with one warning, but as described in "bugs discobered during testing" it could be ignored.

### Unfixed bugs:
* 

## Deployment
### Deployment to GitHub Pages
The site was deployed to GitHub Pages, and goes as follows:
In the GitHub repository, go to the Settings tab
From the source section drop-down menu, select the Master Branch
After selecting the master branch, the page will automatically be refreshed with a ribbon display to indicate the successful deployment.
The live link can be found here - https://andreaschristensen89.github.io/janken-bossu/

### Create a local clone
1.	Open GitHub and navigate to repository here (https://github.com/AndreasChristensen89/janken-bossu).
2.	Click the Code drop-down menu.
3.	Options:
•	Download the ZIP file, unpack locally and open with IDE.
•	Copy git URL from HTTPS dialogue box.
4.	Open your chosen IDE and open the terminal in a directory.
5.	Use the "git clone" command with the copied git URL after.
6.	Clone of the project is created locally on your machine.


## Credits:
### Pictures
Images were compressed using the webpage https://tinypng.com/
All characters, hands, and backgrounds were drawn by myself in Adobe Illustrator.

### Navigation
For hamburger nagivation I took inspiration from the code from this site, but I changed the location, animation/CSS, names, parts of the JS code, and the contents to fit my site:
https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0


### Text content
Content was all formulated by myself, but I took inspiration from video/board games I have played throughout my life, as well as my own experiences living in Japan.

### Icons
Icons and script were taken from https://fontawesome.com/, as well as Google's fonts: https://fonts.google.com/icons?selected=Material+Icons.


### Coding help
* For help with varius issues with animations, css background manipulation etc. I often resorted to https://stackoverflow.com/
* For general best practice I used Code Institute's Slack community.

### Design
* For design of the different pages I didn't use other sources of information. For backgrounds and character I took inspiration from https://www.pinterest.com/ - no pictures are copies however.
* For color schemes...

## User Stories:

### The User
* What are the goals for a first time visitor
   * Quickly understand that this is a game and how to start it
   * Be captivated by the content and the imagery
   * Be able to navigate effortless through the pages
   * Easily reach the rules page and understand how to play the game
   * Easily understand the goal of the game
   * Understand how to advance after a loss/defeat/draw
   * Have the game work on all devices, both horizontally and vertically
* What are the goals for a returning visitor
   * Instantly/easily remember how to navigate the content
   * Easily remember how to play the game

## Strategy
The purpose of this site is to create a simple to play game that entertains visually and which does not require strategy to play. The goal for design was to create a simple play-interface as well as making it easy to access information with simple and clear design.

## Scope
The scope is within beginner boundaries. Features are limited, but should be smooth and completely functional. No more than three pages: game, rules, and contact.

## Structure
The features have been laid out previously. The flow of the website is simple and should be intuitive for most anyone. Game, rules, contact. Players are guides through the game with animated/colored elements that signal to press them. When accesing the webpage the user lands directly on the game page and can start immediately. In case there is some confusion / if the player wishes to know more about the background or rules of the game / wishes to contact the developer the nagivation bar makes it simple to access all pages from anywhere and from any stage of the game. A restart button is also available when the game has started.


## Surface

### Design choices
* Overview: The aim is to provide easy-to-navigate pages that make it easy and clear to navigate around. 
* The game should be easy for the eyes, meaning that there should be no overlapping animations that confuse players.
* It should be clear to the player what should be clicked in order to advance.
* Losses/wins/draws should be clear to understand and should have animations that demonstrate what happened.
* Information should not be detailed but fast to read and understand, and straight to the point.

### Color Scheme 
Colors are chosen to represent a generally bright cartoony world, which aims to give users a positive and light-hearted feeling.
In all stages of the game and on all pages there is always a play between green and blue. Blue is the general color while green is always present but more scarcely found, and it used to represent something positive. There is at all times at least one green element on the screen, which is meant to attract the users' eyes. 

Color names are found via https://www.htmlcsscolor.com/hex/749EAD.

* Background picture:
    * Main blue of window: rgb(114 217 237)
    * Darkest building: rgb(113 175 188)
    * Lighter building: rgb(129 193 206)
    * Lightest building: rgb(146 212 225)
    * Window bars: rgb(123 137 138)
    * Bottom and top bars: rgb(84 76 73)
    * Floor: rgb(116 158 173)
    * Bonsai box: rgb(120 73 46)
    * Bonsai box-lines: rgb(45 27 17)
    * Bonsai bottom-pot: rgb(189 137 109)
    * Bonsai top-pot: rgb(168 116 86)
    * Bonsai top-pot-circle: rgb(147 91 59)
    * Dirt: rgb(99 55 29)
    * Tree: rgb(128 81 55)
    * Leafs: rgb(58 148 50)
* **White**
    * All text on all pages
    * Background color of hamburger icon
* **rgb(116 158 173)** Bali Hai
    * Background color: this is the same color as the background picture's floor, allowing for extensions of the picture.
* **rgb(58 148 50)** La Palma - Green color of bonsai tree
    * Play button
    * Start button
    * Go-button
    * Health-meter
    * Try again button
    * H2 headings on rules page
    * Clear and send buttons on contact page
* **#455d66** San Juan - Dark grey
    * H1 on landing page 
    * H1 rules page
    * H1 contact page
* **#68acb9** Fountain blue
    * H2 landing page 
    * Text-box on intro-screen
    * Text-box on win screen
    * Text-box on victory screen
    * Intro text-box on rules page
    * Divs on rules page
    * Larger text boxes on rules page
    * Form color on contact page
* **#77acb2** Neptune
    * Opponent title
* **#ea8426** Carrot orange
    * Color when health drops below 75
* **#c7be33** Old Gold
    * Color when health drops below 50
* **#d01414** Free speech red
    * Color when color drops below 25
* **#989191** Nobel - grey
    * Color of corner restart button

### Choice of text
I found Lato to work quite well with all text. I think it complements the cartoony style.

### Pictures/characters:
Bright and colorful colors are chosen to give a positive feeling. It's meant for the user to think of it as light-hearted. The background was designed to be spacy, simple, and with only a few major variations of colors. The characters were drawn as simple and with a hint of humour - they're meant to be stereotypical Japanese office workers as depicted in manga/movies.

The background is designed and set to repeat in order to allow for stretching of the image.

### Languages used
* HTML
* CSS
* JavaScript
* Markdown language for readme file

### Accesibility
All non-text elements are marked with aria-labels, and the contrast between background and foreground colors were implemented in color scheme.

### Additional comments on setup
* CSS was split into two files due to a design choice of having no scrolling on the main page which affected the rules page. Styling for the hamburger navigation was also separated due to both pages needing CSS from it.
* JavaScript was split into two files (game-script and hamburgerNavigation) due to eventlistener on load in one sheet that is not needed in the other.
* Aria-labels turned out a bit tricky since elements come, go, and change during the game. Therefore, I implemented functions to add appropiate labels in JavaScript. 
