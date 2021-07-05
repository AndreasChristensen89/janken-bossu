For hamburger nagivation I used the code from this site, but I changed the location, animation and the contents to fit my site:
https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0 

# Janken Bossu

The idea behind this project was to create a simple game of rock paper scissors lizard spock which took place in a cartoony setting.
The inspiration is taken from my own experiences from living in Japan, using a Japanese animation style, while incorporating drawings that I did myself in Adobe Illustrator.
The target group is anyone who enjoys a simple game of chance. The game requires very little understanding of the rules, and can be won without knowing anything about strategy. However, the animation style would most likely be suited for people who enjoys a cartoony look and who can see the link to the Japanese style. Anyone with a browser on a laptop, a tablet, or a phone can play the game on modern browsers.

The name Janken Bossu is taken from the name of rock paper scissors in Japanese, which is "Janken", combined with the Japanese pronunciation of boss, which is "bossu". The aim of the game is to play Janken to become the boss (bossu).

## Features

### Existing features:
* __Navigation bar__
    * The navigation bar is on all pages. It has links to the Home page, the Rules page, and the Contact page.
    Visually, it is identical on each page but with a bottom border under the current page. It is a hamburger-style bar, and appears and dissapears when clicking the round icon. It appears by sliding down from the top and covers a small chunk in the left side of the page and dissapears by sliding up.
    * This section allows the user to always be able to navigate to all parts of the website without going back to the home page, or scrolling to the top.

![Nav Bar](/assets/readme-pictures/navbar-readme.PNG)

* __Landing page image / game page__
    * The landing page has a centered heading with the title of the game at the top. Underneath is a centered sub-heading which acts as the subtitle. Finally, underneath the subtitle is the play button which has an animation on it, which scales the size up and down. The background is a cartoony bright colored open office space with a bonsai tree (trees - depending on screen resolution) close to the window. The windows show buildings outside.
    * The titles and play button are shown to indicate that this is the start of the game. The play button animation is used to indicate that this button should be noticed and interacted with. The background is displayed to show the setting of the game,

![Landing page](/assets/readme-pictures/hero-image-readme.PNG)

* __Pre-start of game / Introduction__
    * This section appears after clicking play. It has a centered text-box with a quick tutorial of how to play, and underneath is a centered green start button.
    * The quick tutorial gives players the information they need to play the game. The start button is green and sticks out in order to invite users to click it to start the game.

![Call to action](/assets/readme-pictures/call-to-action-readme.PNG)

* __Main game screen__
    * At the top of the screen the name of the current opponent is displayed as a title. Underneath is a green oval-shaped element with "100" written in it - this is the health meter. Underneath the health meter
    * 

![Meetup times](/assets/readme-pictures/meetup-places-readme.PNG)

* __Loosing screen__
    - 
    - 

![Footer](/assets/readme-pictures/footer-readme.PNG)

* __Draw screen__
    * 
    * 

![About us](/assets/readme-pictures/about-us-readme.PNG)
    
* __Winning screen__
    * 
    * 

![What we do - top](/assets/readme-pictures/whatwedo-top-readme.PNG)

* __What we do - bottom__
    * In three headings with text this section talks about what the activities are about. It's fun, anyone can join, and there are only a few
    things to bring.
    * It is valuable to the user to understand that the activities are not dangerous and can be done by everyone, and also the specifics of
    what to bring.

![What we do - bottom](/assets/readme-pictures/whatwedo-bottom-readme.PNG)

* __Contact__
    * This is the contact form and it follows the style of the home page boxes. Along with the first name, last name, and email. The user can write a message, clear form, and submit. (*I was advised by my mentor to not include a submit button in the form with a method and action (method="post", action="https://formdump.codeinstitute.net/", type="submit"), and instead have the type="button"*)
    * It is valuable to the user to be able to contact the group if they wish to become a member, ask questions, or any other requests/comments.

![Contact](/assets/readme-pictures/contact-readme.PNG)

### Future features to implement
* Clicking on an event could fill in part of a form of which event the user wishes to register for.
* Form should accomodate users wishes to register for specific events.
* Ability to sign up for a newsletter
* Gallery with event pictures
* Blog posts
* Google maps for meetup places



## Testing
* Chrome Developer Tools was used for testing all media queries down to 280px to fit the smallest devide available on the Google device list.
Also, developer tools was used to manipulate CSS to see direct outcomes. All pages have been tested with chrome developer tools to verify that
text, pictures, and boxes all adapt well to the breakpoints for different screens. 

__Breakpoints are set to the following and are all tested to work:__
* __1340px__
   * This Breakpoint deals with the navigation bar and shrinks the text to avoid colission with the logo. 
   * The meetup times on the home page are made smaller in order to maintain proper form. On the what we do page the text is also shrunk in order to avoid collission.
   * Home page: Font sizes are changed in call to action(cta), side-margin, width, height, and padding are changed for meetup times divs, which bring them closer together. Background x-positions are changed for two meetup times divs.
   * What we do page (wwd): Text padding changed, margins and widths are changed for divs
* __950px__
   * This breakpoint is generally for tablet screens and deals with a number of element collissions by changing the general design from horizontal to vertical.
   * Breakpoint is chosen due to navigation bar space, along with lack of meetup times space.
   * The navigation bar is pushed under the logo to make space for its size, but still floats to the right. Header is bigger, and logo has smaller font size.
   * The cta divs are places vertically, instead of horinzontally, and the same is done to the meetup times divs. Cta scale change in the animation is reduced to avoid overlap.
   * On the about us page all the elements are also put vertically. Before the image was in the center, but now it is placed under the two text areas. The button remains in the bottom.
   * The vertical design is also used on the what we do page, and all text sections are now in a vertical line.
   * The footer has a change in its spacing between the social media icons, and they are now much closer together, and the font-size of both sides. The widths of the left right footers are changed from 66%-33% to 50%-50%.
   * Contact form's width is set to shrink/grow according to the screen size, text areas's width are smaller.
* __550px__
   * Breakpoint is chosen due to text being pushed together and needing more space on the About page and the What We Do page.
   * The navigation bar now centers its elements.
   * The logo font-size is lowered.
   * The footer font-sizes are lowered for both sides.
   * The about us page's height is increased, and padding and margin of the elements are changed to accomodate text pushed together.
   * The what we do page's height is increased, and padding and margin of the elements are changed to accomodate text pushed together.
   * Contact form's width is increased, but still adapts to screen size. Clear and sumbit buttons's widths are smaller.
* __400px__
   * Breakpoint is chosen due to navigation bar and logo space. Also, text and pictures need more space on About and What We Do pages.
   * Logo now takes two lines, and header's height adapts and is now 150px instead of 110px.
   * Navigation bar's font-size is down in order to fit one line.
   * About us page's height is increased to fit elements pushed together. Margin is changed for elements on same page. Picture is shrunk.
   * What we do page's height in increased. Margin is changed for elements on same page. Picture is shrunk.
* __300px__
   * This is to accomodate the smallest screen sizes down to the lowest on the Google Developer Tool list (280px). Navigation bar space needed.
   * Navigation bar's font-size is lowered.
   * The height of the what we do page is increased, and margin of the elements on the same page is changed.


### Browser testing 
* Test on Firefox was good, but Google fonts seems to not be able to load, so the backup font was displayed.
* Microsoft Edge was without any issues.
* Media query tested on my own phone, Samsung Galaxy S9 using Chrome, no issues
* Media query tested on my own tablet, Ipad pro 2018 using Safari, one issue with margins, now fixed.
* General testing with my own laptop, Asus 13 inch using Chrome, no issues.

All links were tested. The links connecting to external sources (social media) open in a new tab and those linking to external pages all work as intended. There are links on each site, except for the what we do page, but the user still has an easy to understand sticky nagivation bar. 

I believe the webpage is set up for the users to easily achieve their goal, which is to get general information about the group, who they are, 
where and when they operate, a way to contact them with questions/requests for membership/general inquiries and comments.

### Bugs discovered during testing:
* I found the Google Developer Tool to not be stable in showing if the website responded correctly to different screensizes. Many times it would show 
that everything worked fine and smoothly only to display something different the next time it was opened. Similarly, it would show that something was off 
(footer not showing, lines out of bounds etc) only to show them correctly after closing and opening.
Also, some tests of media queries would succeed every time on Google Developer, but fail when manipulating actual browser window.
* Firefox did not show the Google font during testing.
* Firefox did not display certain margins as chrome (e.g. for navbar), and they had to be changed
* Safari did not show contact form buttons as Chrome, and I had to change margins.
* Markup validation service gave errors when using aria-label on css backgrounds. This was handled by adding a span in the div with role="img" and aria-label.
* Error for favicon.ico in browser, favicon.ico not implemented


### Validator testing:
* W3 Markup Validation Service completed for all HTML pages with no errors.
* Jigsaw test for CSS completed with no errors.

### Unfixed bugs:
* Testing in Firefox went well with functionality, but the Google Font Lato was not loaded.
* Favicon.ico not included

## Deployment
The site was deployed to GitHub pages, and goes as follows:
In the GitHub repository, go to the Settings tab
From the source section drop-down menu, select the Master Branch
After selecting the master branch, the page will automatically be refreshed with a ribbon display to indicate the successful deployment.
The live link can be found here - https://andreaschristensen89.github.io/cleancopenhagen/


## Credits:
### Pictures
Images were compressed using the webpage https://tinypng.com/
All images were taken from https://www.freepik.com/, which requires attributions. The following are the code snippets the website provides when downloading.

* Hero-image:
    `<a href="https://www.freepik.com/photos/summer">Summer photo created by onlyyouqj - www.freepik.com</a>`

* Meetuptimes:
    * Kongens Have
        `<a href="https://www.freepik.com/photos/tree">Tree photo created by freepik - www.freepik.com</a>`
    * Fælledparken
        `<a href="https://www.freepik.com/photos/hand">Hand photo created by prostooleh - www.freepik.com</a>`
    * Søndermarken
        `<a href="https://www.freepik.com/photos/kids">Kids photo created by prostooleh - www.freepik.com</a>`
    * Utterslev Mose
        `<a href="https://www.freepik.com/photos/kids">Kids photo created by prostooleh - www.freepik.com</a>`

* About us
    `<a href='https://www.freepik.com/photos/kids'>Kids photo created by prostooleh - www.freepik.com</a>`

* What we do
    `<a href='https://www.freepik.com/photos/hand'>Hand photo created by prostooleh - www.freepik.com</a>`


### Text content
Content was all formulated by myself, but I took inspiration from another site with a similar focus:
https://www.doinggoodtogether.org/bhf/clean-up-your-neighborhood


### Icons
Icons and script were taken from https://fontawesome.com/ 


### Coding help
* For help with varius issues with animations, sticky navigation bar, css background manipulation etc. I often resorted to https://stackoverflow.com/
* Code Institute Slack Community for additional help with details (aria-label, general requirements, deployment)

### Design
* For design of the different pages I took inspiration from other students of Code Institute that request reviews of their projects. Also, I looked at various websites of professionals, e.g. https://www.wimhofmethod.com/
* For color schemes I used a blog on Visme that had 50 examples of good color combinations: https://visme.co/blog/website-color-schemes/

## User Experience Considerations:

### The User
* What are the goals for a first time visitor
   * Quickly understand what the group is doing, and where and when it is operating
   * Be captivated by the content and the imagery
   * Be able to navigate effortless through the pages
   * Easily reach the contact page and understand how to contact the group
* What are the goals for a returning visitor
   * Instantly/easily remember how to navigate the content
   * Find meetup times to confirm times and places in seconds
   * Quickly find contact page to ask questions/inquiries/give comments/recommendations

## Design choices
* Overview: The aim is to provide easy-to-navigate pages that make it easy and clear to navigate around, with many links to the contact/join page.
    Information should not be detailed but fast to read and understand, and straight to the point.

### Color Scheme 
Colors are chosen to represent a "natural" scenery that hint of being in a park/forest, 
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
