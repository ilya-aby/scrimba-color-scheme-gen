# Color Schemer

Color scheme generator, made for the Scrimba front-end developer course. Built with HTML, CSS, and JavaScript. Uses the [Color API](https://www.thecolorapi.com/) to generate complementary colors.

![GIF](images/app-animation.gif)

## Features

- Generate complementary color schemes for arbitrary colors
- Copy color hex to clipboard
- Show human-friendly names for hex colors

## Technologies Used

- HTML
- CSS
- JavaScript
- Color API

## How It Works

`api.js` interfaces with the Color API. The app uses a form to request a color input from the user, calls the API to get hex values for the color scheme, and then programatically renders them in the color container.

## Usage

1. Open `index.html` in a web browser
2. Choose a color and a color scheme mode and hit "Get Color Scheme"

## Files

- `index.html`: The main HTML structure
- `styles.css`: Styles for the application
- `main.js`: JavaScript for dynamically rendering the colors
- `api.js`: Code for interfacing with the Color API