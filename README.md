# mouse-avoiding-people-React


The project is a React application that displays a collection of images ("people") on the screen, which move in response to the user's mouse cursor. The images use two sets of state variables to track their current position and velocity.

The first set of state variables, x and y, represent the current position of each image on the screen. These values are initialized to random values within the window's width and height, respectively. The second set of state variables, xSpeed and ySpeed, represent the current velocity of each image in the horizontal and vertical directions. These values are initially set to zero.

The application uses two useEffect hooks to update the state of the images. The first useEffect hook listens for mousemove events on the window and updates the xSpeed and ySpeed values of each image depending on the distance between the image and the mouse cursor. If the distance is less than a certain threshold, the image's xSpeed and ySpeed values are set to move the image away from the cursor. If the distance is greater than the threshold, the image's xSpeed and ySpeed values are set to zero.

The second useEffect hook updates the position of each image on the screen based on its current position and velocity. It also checks for collisions between the images and prevents them from overlapping by adjusting their velocities.

Finally, the MovingImage component returns an img element with the source and alt text passed as props, as well as the current position of the image on the screen. The style attribute sets the position of the image to absolute and sets its top and left properties to the current y and x values, respectively.
