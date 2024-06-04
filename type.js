// Function call for consoleText; text I want on my webpage, id i want referred to, and color for each array index
consoleText(['Programmer', 'Artist', 'Web Developer'], 'text', ['#181714', 'rebeccapurple', '#C3BCAE', '#22211F']);

// Function to actually animate array elements and connect to HTML
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];

    //this is going to go between the visibility of the underscore part
    var visible = true;

    //console id in html
    var con = document.getElementById('console');

    //positioning of the words in the consoleText array
    var letterCount = 1;

    //increment counter
    var x = 1;

    //this will test for a timeout in the fucntion
    var waiting = false;

    //'targets' the id element as the second argument in the consoleText argument
    var target = document.getElementById(id)

    //this part is going to actually set the first color in the colors array section as the initial
    target.setAttribute('style', 'color:' + colors[0])

    //setting the typewriting effect interval to every 120 milliseconds
    window.setInterval(function () {

        //conditionals that manages letterCount to position each word in the array
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)

    //setting the underscore visibilty to appear every 400 miliseconds
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'text-underscore hidden'
            visible = false;

        } else {
            con.className = 'text-underscore'

            visible = true;
        }
    }, 400)
}