For hamburger nagivation I used the code from this site, but I changed the location, animation and the contents to fit my site:
https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0 

# Janken Bossu

The idea behind this project is to create a simple single-player game of rock paper scissors lizard spock which takes place in a cartoony setting.
The inspiration is taken from my own experiences from living in Japan, using a Japanese animation style, while incorporating my own drawings in Adobe Illustrator.
The target group is anyone who enjoys a simple game of chance. The game requires very little understanding of the rules, and can be won without knowing anything about strategy. However, the animation style would most likely be suited for people who enjoys a cartoony look and who can see the link to the Japanese style. Anyone with a browser on a laptop, a tablet, or a phone can play the game on modern browsers.

The name Janken Bossu is taken from the name of rock paper scissors in Japanese, which is "Janken", combined with the Japanese pronunciation of boss, which is "bossu". The aim of the game is to play Janken to become the boss (bossu).

## Features

### Existing features:
* __Navigation bar__
    * The navigation bar is on all pages. It has links to the Home page, the Rules page, and the Contact page.
    Visually, it is identical on each page but with a bottom border under the current page. It is a hamburger-style bar, and appears and dissapears when clicking the round icon. It appears by sliding down from the top and covers a small chunk in the left side of the page and dissapears by sliding up.
    * This section allows the user to always be able to navigate to all parts of the website without going back to the home page, or scrolling to the top. The hamburger style allows the bar to be hidden in the top corner when not opened, thus creating more space for the game.

![Nav Bar](/assets/readme-pictures/navbar-readme.PNG)

* __Landing page image / start page__
    * The landing page has a centered heading with the title of the game at the top. Underneath is a centered sub-heading which acts as the subtitle. Finally, underneath the subtitle is the play button which has an animation on it, which scales the size up and down. The background is a cartoony bright colored open office space with a bonsai tree (trees - depending on screen resolution) close to the window. The windows show buildings outside.
    * The titles and play button are shown to indicate that this is the start of the game. The play button animation is used to indicate that this button should be noticed and interacted with. The background is displayed to show the setting of the game,

![Landing page](/assets/readme-pictures/hero-image-readme.PNG)

* __Introduction__
    * This section appears after clicking play. It has a centered text-box with a quick tutorial of how to play, and underneath is a centered green start button.
    * The quick tutorial gives players the information they need to play the game. The start button is green and sticks out in order to invite users to click it to start the game.

![Introduction](/assets/readme-pictures/call-to-action-readme.PNG)

* __Main game screen__
    * At the top of the screen the name of the current opponent is displayed as a title. 
    * Underneath is a green oval-shaped element with "100" written in it - this is the health meter. 
    * Underneath the health meter are five buttons with pictures of the different choices players can make.
    * Under the buttons is the opponent element with a picture of the current opponent - if this is the first opponent then the element is not animated, but if it is then the opponent is animated with an opacity going from 0.0 to 1.0 over a second.
    * When a button is clicked the player choice appears in the middle of the screen, meaning that the picture of the button is copied to this new element. The new element is animate to scale up and down and a green "go" button is generated and appears under the player choice.
    * Lastly, in the right corner is a restart button.
    * The opponent title changes according to the opponent and tells the players who they are versing. The green health meter changes numbers and colors according to how much health is left (green, orange, yellow, and red). The color code helps players easily understand how close they are to a loss. The five buttons clearly show the hand signals that are attached to them and they scale up when a mouse hovers over them. The player choice animation signals to the player that this displayed hand is ready to be played. The opponent element is animated in order to draw attention to the new opponent.

![Main game](/assets/readme-pictures/meetup-places-readme.PNG)

* __Loosing screen__
    * When a loss is registered the computer choice is displayed in a new element. The hand is animated to scale up a lot, and then scales down to land underneath a newly generated grey text-box which gives players a short comment on the loss.
    * The player choice animation from before is set to stop.
    * The health bar is animated to blink red and black, and the health number drops while to color changes according to the value.
    * After two seconds, the buttons slightly scale up and down two times.
    * The computer winning hand is scaled up in order to give the player a sense of defeat. It also draws their attention to the hand that beat them. The comments in the text box are randomly picked and they are encouraging and energetic which signals to the players to have another go. The health bar blinks in order to signal that damage has been taken. Just after these animations the player might wonder what to do next, which is why the buttons scale up and down in order to signal the player to click them again.

![Loosing screen](/assets/readme-pictures/footer-readme.PNG)

* __Draw screen__
    * When a draw is registered the computer choice is generated and inserted underneath the player choice. Underneath the computer choice a grey text-box is also generated with the message of "Draw! Try again". The computer choice and player choice elements are animated to bump against each other two times.
    * The animation signals that the two hands are evenly matched. The message is short and clear, and should not easily be misunderstood.

![Draw screen](/assets/readme-pictures/about-us-readme.PNG)
    
* __Win screen__
    * All previous game elements are removed and the winning hand choice is shown in an animated element that scales up and down. To the right of the winning hand is the computer losing hand which is animated going back and forth from opacity 1.0 to 0.1. Underneath is a text box with text that declares that you beat the current opponent, and tells you to get ready for the next opponent. Under the next box is a green "next opponent" button, which is animated to scale up and down with a slower pace than the winning hand.
    * The winning hand is animated to scale up and down to signal victory. The other opacity animation solidifies the sensation of victory. The winning message is short and clear, and the green button signals users to click on it via the animation.

![Win screen](/assets/readme-pictures/whatwedo-top-readme.PNG)

* __Game over screen__
    * All previous game elements are removed and a large black text box is inserted at the top center with the text "Game Over!". This box is animated to scale up and down.
    * Underneath is a centered grey text box with text that explains that the player lost and which also encourages players to try again.
    * Underneath is a green round button with the text "Try again"
    * The black color of the game over text is a clear opposite to all previous colors, which are light a bright, which is meant to invoke a negative sensation. The animation is there in order to draw the player's eyes to it. The losing message from the grey box is not harsh but instead reminds the player that this is game of chance "Looks like the odds were against you". It also encourages players to try again. The "try again" button is large and clear, and the green color is meant to give a "go" feeling similar to the play button and and start button.                                                                                                                       

![Game over screen](/assets/readme-pictures/whatwedo-bottom-readme.PNG)

* __Victory screen__
    * 
    * 

![Victory screen](/assets/readme-pictures/contact-readme.PNG)

* __Rules page__
    * 
    * 

![Rules page](/assets/readme-pictures/contact-readme.PNG)

### Future features to implement
* I thought it would be helpful to add and shortly after remove a text-box when losing HP. It would show the damage taken.
* In the game after a win I am considering a screen that introduces the next opponent, some context to the character, and the HP damage the character does.
* On the game screen the opponent should have stats: Health and HP damage - this would change the game so that a single win would not necesarily be enough to beat the current opponent
* A 10% chance of a critical hit/power up (e.g. double damage) could be implemented - this would only work if opponent stats are implemented

## Testing
* Chrome Developer Tools was used for testing all media queries down to 280px to fit the smallest devide available on the Google device list.
Also, developer tools was used to manipulate CSS to see direct outcomes. All pages have been tested with chrome developer tools to verify that
text, pictures, and boxes all adapt well to the breakpoints for different screens. 

__Breakpoints are set to the following and are all tested to work:__
* __1100px__
   * **Start screen:**
   * **Introduction screen:** Font size of text box is lowered 
   * **Win screen** winning text-box's width and font-size are decreased.
   * **Victory screen** Win title's width and front-size are decreased. Win-text's width and margin are decreased. Restart button's height, width, and font-size are decreased.
   * **Game over screen** Game over message's font size and width are decreased. Game over text's width is decreased. Restart button is similar to victory screen.

* __800px__
   * **Start screen:** Background-size is changed from contain to cover in order to avoid picture strething with floor too long. X and Y coordinates are set differently to adapt to new setting
   * **Introduction screen:** Font size and line-height of text box are lowered. Start-button's margin slightly decreased.
   * **Game screen:** Go button's margins are lowered. Hand buttons' margin is lowered. Opponent-title's width and font-size are lowered. Go button's margin increased. Opponent-picture top% is increased, right% decreased, height lowered, width increased. Max height is 1152px.
   * **Loosing screen** For computer choice the margin is decreased.
   * **Draw screen** The "draw" message's margin is set to 0 auto.
   * **Win screen** Player's pick's width is decreased, margins are changed - same changes for computer choice. Next button's margin is decreased.
   **Victory screen** Win title's width is decreased. Win-text's width is decreased. Restart button's height and width are decreased.
   * **Game over screen** Game over message's width is decreased. Game over text's font-size, line-height, and width are decreased. Restart button is similar to victory screen.

* __600px__
   * **Start screen:** All elements' responsive values are changed. Max height is 1300px, which I estimate to work at this width.
   * **Introduction screen:** text box's padding and line-height lowered. Works until 1300px.
   * **Game screen:** Buttons' width are increased, margins are changed. Opponent-title's width and font-size are lowered. Restart button's height, width, and font-size have increased. Player choice's margin lowered. Opponent-picture's top% has increased, height is lowered, width has increased. Loose message's font-size and width is lowered, margin is increased. Max height 720px
   * **Loosing screen** Computer choice's margin is increased. Loose message's font-size and width decreased, margin increased.
   * **Win screen** Winning text-box's margin is increased, line-height, width, and font-size are decreased. Next-button's margin is increased.
   * **Victory screen** Win title's width and front-size are decreased. Win-text's font-size, line-height, width, and padding are decreased. Restart button's height, width, and font-size are decreased.
   * **Game over screen** Over message's width is decreased. Game over text's width and padding are decreased. Restart button is similar to victory screen.

* __320px__
   * **Start screen:** Element's responsiveness work until 1200px which I estimate to work.
   * **Introduction screen:** Elements work until 1200px.
   * **Game screen:** Buttons' height, width and margins are lowered. Opponent-title's width has been lowered. Opponent-picture's top% has increased. Max height is 720px.


### Browser testing 
* Test on Firefox
* Microsoft Edge
* Media query tested on my own phone, Samsung Galaxy S9 using Chrome, no issues
* Media query tested on my own tablet, Ipad pro 2018 using Safari+Chrome
* General testing with my own laptop, Asus 13 inch using Chrome

All links were tested. The links connecting to external sources all work as intended. There are links on each site. 

I believe the game is set up so that it's intuitive, and users have an easy time navigating and understanding the next steps in the game. After a loss it's easy to restart, and it's also possible to restart during any point in the game.

### Bugs discovered during testing:
* I found the Google Developer Tool to not be stable in showing if the website responded correctly to different screensizes. Many times it would show 
that everything worked fine and smoothly only to display something different the next time it was opened. Similarly, it would show that something was off (lines out of bounds etc) only to show them correctly after closing and opening.
* Firefox did not show the Google font during testing.
* Safari...
* Markup validation service...


### Validator testing:
* W3 Markup Validation Service completed for all HTML pages with no errors.
* Jigsaw test for CSS completed with no errors.

### Unfixed bugs:
* Testing in Firefox went well with functionality, but the Google Font Lato was not loaded.

## Deployment
The site was deployed to GitHub pages, and goes as follows:
In the GitHub repository, go to the Settings tab
From the source section drop-down menu, select the Master Branch
After selecting the master branch, the page will automatically be refreshed with a ribbon display to indicate the successful deployment.
The live link can be found here - https://andreaschristensen89.github.io/cleancopenhagen/


## Credits:
### Pictures
Images were compressed using the webpage https://tinypng.com/
All characters, hands, and backgrounds were drawn by myself in Adobe Illustrator.

### Text content
Content was all formulated by myself, but I took inspiration from video games I have played throughout my life.


### Icons
Icons and script were taken from https://fontawesome.com/ 


### Coding help
* For help with varius issues with animations, css background manipulation etc. I often resorted to https://stackoverflow.com/

### Design
* For design of the different pages I didn't use other sources of information.
* For color schemes...

## User Experience Considerations:

### The User
* What are the goals for a first time visitor
   * Quickly understand that this is a game and how to start it
   * Be captivated by the content and the imagery
   * Be able to navigate effortless through the pages
   * Easily reach the rules page and understand how to play the game
   * Understand how to advance after a loss/defeat/draw
* What are the goals for a returning visitor
   * Instantly/easily remember how to navigate the content
   * Easily remember how to play the game

## Design choices
* Overview: The aim is to provide easy-to-navigate pages that make it easy and clear to navigate around. 
* The game should be easy for the eyes, meaning that there should be no overlapping animations that confuse players.
* It should be clear to the player what should be clicked in order to advance.
* Losses/wins/draws should be clear to understand and should have animations that demonstrate what happened.
* Information should not be detailed but fast to read and understand, and straight to the point.

### Color Scheme 
Colors are chosen to represent a bright cartoony world, 
which hopefully leads users to envision being outside in nature.
* Background color: **#EAE7DC**
* Logo, titles, navbar elements, top of call-to-action divs, top of form: **#61892F**
* Font of call-to-action divs: **rgb(211, 203, 161)**
* Cover text hero-image, Call-to-action divs headings: **standard white**
* Call-to-action icons: **standard green**
* Footer background color: **rgb(177, 142, 96)**
* Footer icons and text: **#EEE2DC**

### Choice of text
For text choice I leaned towards the Love Running project, which used Lato and Oswald. After testing with other fonts (Roboto, Open Sans, Raleway)
I found Lato to work quite well with both text and headings.

### Pictures:
Sunny, bright and green pictures from parks were targeted to with the aim of thinking of nice weather, as the activity would be outside. Pictures with families/children were favored to give a family friendly atmosphere.

### Languages used
* HTML
* CSS
* Markdown language for readme file

### Accesibility
All non-text elements are marked with labels, and the contrast between background and foreground colors were implemented in color scheme.
