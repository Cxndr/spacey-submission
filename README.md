# spacey-submission

## Requirements

### 🎯 Ensure each section of the webpage is wrapped in the correct semantic tags, ensuring that it includes a '<header>', '<nav>', and '<footer>'.

Semantic HTML tags used throughout html design. Including above as well as '<section>'.

### 🎯 Implement CSS absolute positioning to overlay text on an image or another element.

background-image css property used to display images and absolute positioning to lay div with text over the top.

### 🎯 Utilise CSS Flexbox to create a flexible and responsive layout, particularly in the '<nav>' element.

Flexbox used throughout design including navigation, image sections and footer. I'm also using flex-wrap to make the navbar responsive to different browser widths, keeping all the navigation links on screen regarless on screen width or browser size.

### 🎯 Ensure all image elements ('<img>') are correctly implemented with accurate src file paths.

Used background-image on '<section>' elements instead as discussed in class.

## Stretch Requirements

### 🏹 Create a "back to top" button.

.scroll-to-top div with fixed positioning and link which scrolls to anchor of top page element.

### 🏹 Implement smooth scrolling for internal links to improve user experience.

scroll-behavior: smooth; set in css on html tag to make applicable to entire page.

### 🏹 Implement a hover effect on buttons to make them more interactive.

Used :hover css selectors to make '<section>' buttons swap background color and text color on hover, scroll-to-top link move upwards and have more opaque background on hover, and socia media links in footer grow in size on hover.

### 🏹 Create a basic footer with social media icons that link to social media pages.

Footer features social media links utilizing font-awesome icons with <a> elements inside to link to relevant social media pages.

### 🏹 Add a background music track that plays automatically when the website loads.

Added player with fixed positioning in top right (fixed positioning means user doesn't have to scroll about to find what's playing audio) with the '<audio>' html element. I am also using javascript to add padding to the music player '<div>', shifting it down, if the user's browser window width would cause it the overlap with the navigation elements (overlapping would make it difficult to click music player controls and navigation links).

Using the autoplay attribute of the '<audio>' element to play automatically on page load as requested. However the most popular browsers including Chrome and Firefox will disable autplaying of audio elements in their default settings in the interest of user experience. This could be worked around with various javascript or iframe solutions. But in the interest of respecting a user's browser settings and providing a better user experience I have not implemented them. If a user has their browser settings set to not block autplay then the audio will still autoplay on page load.
