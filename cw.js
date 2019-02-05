// Create a button with "Click Me". Once it's clicked, ask the user if they want to continue being asked to quit. If they enter 'n', stop asking. If they enter anything else, ask again.
var btn = document.querySelector('button');
message = "";
var array = [];


    btn.onclick = function () {
        while(message !== "n")
            var message = prompt("Continue being asked to quit?? Enter n to stop");
        array.push(message);
        console.log(array.length)

};

// Use the code above. Once the user enters 'n' to quit, print the total number of times they didn't enter 'n'.



// Create a header that only goes half way across the screen and is blank on the other half. Create one section that goes all the way across the screen on the 2nd row. Lastly create a footer that's blank on the first half, but goes across to the end on the other half. DO NOT COPY THIS FROM YOUR LAST CLASSWORK. RETYPE EVERYTHING
