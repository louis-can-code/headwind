# HeadWind Tailwindcss Tutorial
 The tutorial video by Fireship that builds the sidebar component is available [here](https://youtu.be/pfaSUYaSgRo?si=zwBaQnSEXNQPfJDX).\
 Fireship's code for the whole UI is available [here](https://github.com/fireship-io/tailwind-dashboard).

 ## Building and Running
 I have included a Dockerfile that will build an image that, when run, allows the UI to be viewed from localhost:5173\
 To build on your own machine, run:\
```
$ git clone https://github.com/louis-can-code/headwind
$ cd headwind
$ docker build . -t "headwind"
$ docker run -p 5173:5173 headwind
```
 You should now be able to see the project at localhost:5173 in your browser.


## Features
- Dark and Light modes
  + First visit uses browser preferences
  + Can be changed by pressing the moon icon
  + Subsequent visits will use the most recent mode the user was using
  + Implemented through the useDarkMode hook and a custom CSS theme

- Dynamic UI
  + Tailwind utility classes allow for easy-to-implement transitions
  + Hover used for colour changes, tooltips, and transitions
  + useState used to create expandable dropdown lists of channel discussions

### Dark Mode
![Screenshot of DarkMode](/dark-mode.png)

### Light Mode
![Screenshot of LightMode](/light-mode.png)
