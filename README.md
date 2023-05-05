# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
Desktop POV
![](./images/desktop%20adviceSite.png)

Mobile POV
![](./images/mobile%20adviceSite.png)

### Links

- Solution URL: [Github Repo](https://github.com/michaelr47/Advice-Generator)
- Live Site URL: [Advice Generator](https://michaelr47.github.io/Advice-Generator/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to utilized the 'picture' html tag. Its changes to the mobile image without using a media query which I thought was nice!

```html
 <picture>
        <source media="(max-width: 576px)" srcset="./images/pattern-divider-mobile.svg">
        <img src="./images/pattern-divider-desktop.svg" alt="svg divider image">
  </picture>
```

### Continued development

I challenged my self to get data using the fetch API and want to continue learning more to use on bigger projects.

### Useful resources

- [mdn fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This helped me understand how to use the fetch API and retrieve data from a different site.

## Author


- Frontend Mentor - [michaelr47](https://www.frontendmentor.io/profile/michaelr47)
- Github - [michael47](https://github.com/michaelr47)
