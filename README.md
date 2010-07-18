ID.js
=====

Input Detection in JavaScript is tricky. Here's what ID.js does for you:

* Allows for arcade-style polling of key status
* Allows for time-based polling of key status
* Allows for initial press polling of key status
* Provides easy-to-remember mappings to keyCodes
* swallows all keystrokes (easy enough to disable)

What ID.js does NOT do for you:

* Cross-browser event translation / normalization
* Mouse events (yet!)

This utility has been tested in Firefox 3.6, Chrome 5, and Safari 5. It comes with a few tests written in qunit, so if anyone runs them in another browser, I can update browser compatibility.

HOW TO USE
==========

ID.js is meant to be used in the context of a main game loop, where on each iteration, the status of the keyboard is updated based on the time from the last step. To avoid ridiculous new +Date() statements, ID.js expects this deltaT value to be passed in, and keeps an internal tally of time passed since the beginning of execution.

Example:

    var id = new ID();

	// aim for 30 fps
	var interval = setInterval(function(){
		id.Update(1/30);
	
		for(var i in ID){
			if (i !== "prototype" && i !== "EPSILON"){
				if( id.IsKeyDown(ID[i]) ){
					console.log(i + " is pressed");
				}		
			}
		}
	
	}, 1000 / 30);
	
This will print out every key that is pressed in the console, and poll at 30 frames per second.

METHODS
=======

* IsKeyDown/IsKeyUp : returns true/false if the given key is pressed/released
* IsNewKeyPress/IsNewKeyRelease : returns true/false if the given key has been pressed/released during the current iteration
* TimePressedMs: Returns the time, in milliseconds, of how long the given key has been held down.
* TimePressed: Returns the time, in seconds, of how long the given key has been held down.