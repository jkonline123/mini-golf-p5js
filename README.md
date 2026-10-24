# Mini Golf — JavaScript & p5.js (2019)

A small browser-based mini golf game I created on **March 22, 2019** while learning JavaScript, [p5.js](https://p5js.org/), and p5.play.

## About the project

Move the mouse to control the club and knock the ball toward the hole. Getting the ball into the hole raises the score and the flag. The original sketch experiments with sprite collision handling and simple game logic.

**Tech:** JavaScript, p5.js **0.7.3** (January 2019), p5.play, HTML, CSS.

## How to play

1. Move your mouse to move the club.
2. Hit the ball toward the hole on the right side.
3. Press a key to create another ball.

This is an archived student project. Controls and gameplay retain their original quirks, including an unfinished reset/start menu.

## Running locally

Use any local static file server, for example (if Python 3 is installed):

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in a browser. Opening `index.html` directly from disk may prevent images from loading in some browsers.

## GitHub Pages

In your repository, go to **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**, then save. GitHub will provide your Pages URL. Confirm the game works there after deploying.

## Historical preservation

- `sketch.js` and project assets are from the original exported sketch.
- The original 2019 HTML is saved as `index.original-2019.html` for reference.
- `index.html` is adjusted only to load the included historical JavaScript libraries locally and avoid loading the experimental `startM.js` before the p5 library exists.
- `startM.js` and `p5.play/startMenu.js` are preserved as unfinished menu experiments.
- No game logic in `sketch.js` was rewritten for this GitHub package.

This repository showcases early JavaScript practice, including sprite movement, overlap/displacement, scoring, and collision interactions. It is not presented as a modern production game.
