### Video speed control with mousemove

After we define the variables, we attach a mousemove event listener to the speed div. The triggered event will be passed as an argument through handleMove function.

The function will first calculate the clicked position with e.pageY (subtract possible padding/margin with this.offsetTop). This number is stored in variable y, and it gets turned into a percentage by dividing y by the height of the bar (this.offsetHeight). This percentage is used to style the bar height. We can now drag and fill out the bar with a gradient color.

Next, we need a variable for min and max value. Min is set to 0.4 and max to 4. When the gradient is set at the very top of speed bar(0%), the min should be 0.4 and at the bottom (100%) it should be 4.

To do this, we multiply the percent value with the result of max - min and then we add min. This value gets fixed to decimals and there we have our video with adjustible speed bar working.