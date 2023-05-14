// Inspired by "Simon Goellner"
//link: https://codepen.io/simeydotme/pen/PoyzbPM


/**
*
* Below Code more appealing in form of Fire Animation 
*

:root {
  --bg-color: #12173F;
  --glitter: url("https://assets.codepen.io/13471/silver-glitter-background.png");
  --font-family: 'Open Sans', sans-serif;
}

html,
body {
  min-width: 100%;
  min-height: 100%;
  background-color: var(--bg-color);
  font-family: var(--font-family);
}

.fire::before,
.fire::after {
  content: "";
  position: absolute;
  inset: 0;
}

.fire::before {
  content: "";
  background-image: var(--glitter), var(--glitter),
    linear-gradient(
      0deg,
      #FF5F6D 0px,
      #FFC371 5px,
      #FF5F6D 30%,
      transparent 70%
    ),
    radial-gradient(ellipse at bottom, transparent 30%, #FF5F6D 60%);
  background-size: 350px 500px, 400px 650px, 100% 100%, 100% 100%;
  background-blend-mode: hard-light, color-dodge, multiply;
  background-position: 0px 0px, 0px 0px, var(--gradientPos);
  background-repeat: repeat, repeat, repeat, no-repeat;
  mix-blend-mode: color-dodge;
  filter: brightness(3.7) blur(7px) contrast(6);
  animation: fire 1.75s linear infinite;
  box-shadow: inset 0 -40px 50px -60px #63bbc5;
}

@keyframes fire {
  0% {
    background-position: center 0px, center 0px, 50% 100%, center center;
    filter: brightness(3.7) blur(7px) contrast(6);
  }
  30% {
    filter: brightness(4) blur(10px) contrast(8);
  }
  60% {
    filter: brightness(5) blur(15px) contrast(10);
  }
  100% {
    background-position: center -500px, center -650px, 50% 100%,
      center center;
    filter: brightness(6) blur(20px) contrast(12);
  }
}

.fire {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h1 {
  text-align: center;
  margin-bottom: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

h2 {
  font-weight: 200;
  opacity: 0.5;
  text-align: center;
  margin: 0;
  color: #fff;
}
*
***/