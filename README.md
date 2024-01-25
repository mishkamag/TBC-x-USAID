# Instructions on how to launch the project

Clone repo, open **index.html** and start with **"Open with live server"** Also can visit
**[Live URL ](https://mishkamag.github.io/TBC-x-USAID/)**

# The Structure of Project

I have divided the project into 3 main parts, Header, Main and Footer.
All sections have the same container that adjusts to be centered and sized accordingly.

### Header

Inside Header, I have navigation that changes according to responsiveness. Here also I have a "burger menu" icon that I created manually without an image and it changes shape depending on the state value. When scroll down it gets more transparent. **It also has show/hide functionality, but only for responsive sizes, during scrolling .**

### Main

Inside main, I have several sections and I will tell you what technologies I used to create each one:

#### Hero and Hero's title

This is the section where the image in the middle has text , for this I used "background image" property and parsed the text without any "position absolute".

#### All courses section

For all courses section, I have created a separate javascript file where I have data and render each of them also via javascript. Also used "grid", which has "repeat(auto-fit, minmax)" property and this takes the appropriate size for each course's card according to the size of the tablet.

#### Partniors carusel section

I have divided the partners section into 3 blocks, I have made a "carousel" and these blocks change each other both manually on "click" and automatically every 4 seconds. **Also, when we use during responsive size, we can manage this slider without the icons, for this used "touch event"**

### Footer

In the footer section, I have placed additional icons and information about the site
