//////////////////* LOAD *///////////////
window.addEventListener('load', init);

//////// canvas //////
var canvas = document.getElementById("draw-canvas");
var ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white

//array for drawing sine waves
var thingsToDraw = [];


////////////////////////////MAIN FUNCTION////////////////////////////
function init() {

    ///////// TOGGLE x mark in bottom container ///////////
    let bottomX = document.getElementById('bottom-div-x');
    bottomX.addEventListener('click', () => {
        toggleBottom();
        console.log('x clicked!');
    });

    ///////////////// CLICK EVENT TO DRAW SINE WAVES ///////////////

    //resize canvas to be window width + height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ///////////////////// CLICK --> SEND DATA TO SOCKET ////////////
    let evl = null;
    // function plotSine(event, length, xOffset, yOffset, amplitude, frequency, color, lineWidth)

    let redSelect = document.getElementById('red-play-div');
    let orangeSelect = document.getElementById('orange-play-div');
    let yellowSelect = document.getElementById('yellow-play-div');
    let greenSelect = document.getElementById('green-play-div');
    let cyanSelect = document.getElementById('cyan-play-div');
    let blueSelect = document.getElementById('blue-play-div');
    let purpleSelect = document.getElementById('purple-play-div');

    redSelect.addEventListener('click', () => {
        evl = drawRedSine;
        let removeRed = (e) => {
            console.log('evl for red: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendRedData', p);
            console.log("EMITTED RED");
            canvas.removeEventListener('click', removeRed);
        }
        var listener = canvas.addEventListener('click', removeRed);
    });

    orangeSelect.addEventListener('click', () => {
        evl = drawOrangeSine;
        let removeOrange = (e) => {
            console.log('evl for orange: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendOrangeData', p);
            console.log("EMITTED ORANGE");
            canvas.removeEventListener('click', removeOrange);
        }
        var listener = canvas.addEventListener('click', removeOrange);
    });

    yellowSelect.addEventListener('click', () => {
        evl = drawYellowSine;
        let removeYellow = (e) => {
            console.log('evl for yellow: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendYellowData', p);
            console.log("EMITTED YELLOW");
            canvas.removeEventListener('click', removeYellow);
        }
        var listener = canvas.addEventListener('click', removeYellow);
    });

    greenSelect.addEventListener('click', () => {
        evl = drawGreenSine;
        let removeGreen = (e) => {
            console.log('evl for green: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendGreenData', p);
            console.log("EMITTED GREEN");
            canvas.removeEventListener('click', removeGreen);
        }
        var listener = canvas.addEventListener('click', removeGreen);
    });

    cyanSelect.addEventListener('click', () => {
        evl = drawCyanSine;
        let removeCyan = (e) => {
            console.log('evl for cyan: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendCyanData', p);
            console.log("EMITTED CYAN");
            canvas.removeEventListener('click', removeCyan);
        }
        var listener = canvas.addEventListener('click', removeCyan);
    });

    blueSelect.addEventListener('click', () => {
        evl = drawBlueSine;
        let removeBlue = (e) => {
            console.log('evl for blue: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendBlueData', p);
            console.log("EMITTED BLUE");
            canvas.removeEventListener('click', removeBlue);
        }
        var listener = canvas.addEventListener('click', removeBlue);
    });

    purpleSelect.addEventListener('click', () => {
        evl = drawPurpleSine;
        let removePurple = (e) => {
            console.log('evl for purple: ' + evl)
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendPurpleData', p);
            console.log("EMITTED PURPLE");
            canvas.removeEventListener('click', removePurple);
        }
        var listener = canvas.addEventListener('click', removePurple);
    });


    ///////////////////////SOCKET PORTION//////////////////
    //socket connection
    var socket = io.connect();

    socket.on('connect', function () {
        console.log("Connected");
    });


    /////////////* SOCKET FOR RECEIVING DATA *////////////

    socket.on('sendRedData', function (data) {
        var sineToDraw = { color: 'red', data: data };  //make json obj
        thingsToDraw.push(sineToDraw); //push into array 'thingsToDraw'
        console.log('thingsToDraw Arr: ' + thingsToDraw);
        drawRedSine(data);
        // drawRedSine(data);
        // console.log('red!')
        playRedFreq();
        // console.log(data);
    });


    socket.on('sendOrangeData', function (data) {

        var sineToDraw = { color: 'orange', data: data }; //make json obj
        thingsToDraw.push(sineToDraw); //push into array 'thingsToDraw'

        drawOrangeSine(data);
        // console.log('orange!')
        playOrangeFreq();
        // console.log(data);
    });

    socket.on('sendYellowData', function (data) {
        var sineToDraw = { color: 'yellow', data: data }; //make json obj
        thingsToDraw.push(sineToDraw); //push into array 'thingsToDraw'

        drawYellowSine(data);
        playYellowFreq();
    });

    socket.on('sendGreenData', function (data) {
        var sineToDraw = { color: 'green', data: data };
        thingsToDraw.push(sineToDraw);

        drawGreenSine(data);
        playGreenFreq();
    });

    socket.on('sendCyanData', function (data) {
        var sineToDraw = { color: 'cyan', data: data };
        thingsToDraw.push(sineToDraw);

        drawCyanSine(data);
        playCyanFreq();
    });

    socket.on('sendBlueData', function (data) {
        var sineToDraw = { color: 'blue', data: data };
        thingsToDraw.push(sineToDraw);

        drawBlueSine(data);
        playBlueFreq();
    });

    socket.on('sendPurpleData', function (data) {
        var sineToDraw = { color: 'purple', data: data };
        thingsToDraw.push(sineToDraw);

        drawPurpleSine(data);
        playPurpleFreq();
    });


    /////////////////// FUNCTIONS TO DRAW ///////////////////
    /////////////////////////////////////////////////////////

    /////////////////// ANIMATE THE LINE ///////////////////
    function mainLoop() {

        //draw canvas
        ctx.save(); //push
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < thingsToDraw.length; i++) {
            //console.log("thingsToDraw[i].color: " + thingsToDraw[i].color);


            if (thingsToDraw[i].color === 'red') {
                drawRedSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'orange') {
                drawOrangeSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'yellow') {
                drawYellowSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'green') {
                drawGreenSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'cyan') {
                drawCyanSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'blue') {
                drawBlueSine(thingsToDraw[i].data);
            }
            if (thingsToDraw[i].color === 'purple') {
                drawPurpleSine(thingsToDraw[i].data);
            }
        }

        ctx.restore();//pop
        step += 1; //changes the speed
        requestAnimationFrame(mainLoop);
    }
    requestAnimationFrame(mainLoop);
}

/////////////////// FUNCTIONS TO DRAW //////////////////
//function plotSine(mouseX, mouseY, wavelength, xOffset, yOffset, amplitudeSine, frequency, color, lineWidth)
function drawRedSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, rfreq, "#FD4F4F", lineWidth);
}

function drawOrangeSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, ofreq, "#FF9D41", lineWidth);
}

function drawYellowSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, yfreq, "#FBE11F", lineWidth);
}

function drawGreenSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, gfreq, "#B6E836", lineWidth);
}

function drawCyanSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, cfreq, "#1EDFBE", lineWidth);
}

function drawBlueSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, bfreq, "#29ACFF", lineWidth);
}

function drawPurpleSine(data) {
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, pfreq, "#685CFF", lineWidth);
}

let step = -1;


/////////////////* PLOT SINE TEMPLATE *////////////////////
let wavelength = canvas.width / 0.25;
let amplitudeSine = 40;
let lineWidth = 12;

//add in var amplitude, frequency, color so that it can make multiple color sine waves
function plotSine(mouseX, mouseY, wavelength, step, yOffset, amplitudeSine, frequency, color, lineWidth) {
    // let width = ctx.canvas.width;
    // let height = ctx.canvas.height;

    let x = mouseX - canvas.offsetLeft;
    let y = mouseY - canvas.offsetTop;


    //length = wavelength;
    //amplitudeSine = amplitudeSine;
    // console.log("x: " + x);
    // console.log("y: " + y);

    // console.log("mousex: " + mouseX);
    // console.log("mousey: " + mouseY);

    //draw line begins here
    ctx.save(); //push
    ctx.beginPath();

    // reset the canvas with new dimensions
    let cw = canvas.width;
    let ch = canvas.height;

    ctx.translate((x + ch / 2), y - cw + cw / 8);
    // ctx.translate((100 + ch / 3), y - cw + cw / 5);

    // console.log('translate x: '+ translateX);
    // console.log('translate y: '+ translateY);

    ctx.rotate(Math.PI / 2);
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth;
    // ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white

    //while x is a certain length, draw the sine wave
    while (x < wavelength) {
        ctx.strokeStyle = color;
        z = y + amplitudeSine * Math.sin((x + step) / frequency);
        ctx.lineTo(x, z);
        x++;
    }
    ctx.stroke();
    ctx.restore(); //pop
}



///////////////////* TOGGLE BOTTOM BAR *//////////////////
// toggle the bottom palette bar
function toggleBottom() {

    let bottomContainer = document.getElementById('bottom-container');
    let bottomX = document.getElementById('bottom-x');
    let instructionText = document.getElementById('bottom-instruction-text');
    let paletteContainer = document.getElementById('bottom-palette-container');
    let bottomPlus = document.getElementById('bottom-plus');

    if (bottomX.style.visibility === 'hidden') {
        bottomX.style.visibility = 'visible';
        bottomContainer.style.bottom = '-64vh';
        instructionText.innerHTML = '1. Select color <br/> 2. Click above to draw.';
        paletteContainer.style.visibility = 'visible';
        bottomPlus.style.visibility = 'hidden';
        console.log('show x and color palette');
    } else {
        bottomX.style.visibility = 'hidden';
        bottomContainer.style.bottom = '-72vh';
        instructionText.innerHTML = 'Choose Colors';
        paletteContainer.style.visibility = 'hidden';
        bottomPlus.style.visibility = 'visible';
        console.log('hide x and color palette')
    }
};



///////////////////////////  SOUND SECTION  ////////////////////////////

/////////////////// FUNCTIONS TO MAP FREQ //////////////////
//map for color wavelengths
// linearly maps value from the range (a..b) to (c..d)
function mapRange(value, low1, high1, low2, high2) {
    let freqDrawValue = low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    return freqDrawValue;
    //console.log(freqDrawValue);
}

//set up frequency of color/light + frequency of wavelength drawn
let lowFreq = 400;
let highFreq = 789;
let drawLowFreq = -20;
let drawHighFreq = 80;


/////////////////* GET VARIABLE FOR FREQUENCY BY MAPPING *////////////
//avg light spectrum frequency for red: 442
//map red freq to wavelength to draw
let rfreq = mapRange(442, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for orange: 496
//map orange
let ofreq = mapRange(496, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for yellow: 517
//map yellow
let yfreq = mapRange(517, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for green: 566
//map green
let gfreq = mapRange(566, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for cyan: 618
//map cyan
let cfreq = mapRange(618, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for blue: 649.5
//map blue
let bfreq = mapRange(649.5, lowFreq, highFreq, drawHighFreq, drawLowFreq);

//avg frequency for purple: 678.5
//map purple
let pfreq = mapRange(678.5, lowFreq, highFreq, drawHighFreq, drawLowFreq);



//////////////////////////* PLAY PITCH  *///////////////////////////////////////
//set up color + pitch frequency
let lowColFreq = 400;
let highColFreq = 789;
let lowPitchFreq = 120;
let highPitchFreq = 2000;

///////////////// * FUNCTIONS FOR PLAYING EACH COLOR FREQ *//////////////
function playRedFreq() {
    //map color red (avg col freq: 442) to pitch freq
    let rFreqPitch = Math.floor(mapRange(442, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("red freq pitch: " + rFreqPitch);
    startOsc(rFreqPitch);
}

function playOrangeFreq() {
    //map color orange (avg col freq: 496) to pitch freq
    let oFreqPitch = Math.floor(mapRange(496, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("orange freq pitch: " + oFreqPitch);
    startOsc(oFreqPitch);
}

function playYellowFreq() {
    //map color yellow (avg col freq: 517) to pitch freq
    let yFreqPitch = Math.floor(mapRange(517, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("yellow freq pitch: " + yFreqPitch);
    startOsc(yFreqPitch);
}

function playGreenFreq() {
    //map color green (avg col freq: 566) to pitch freq
    let gFreqPitch = Math.floor(mapRange(566, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("green freq pitch: " + gFreqPitch);
    startOsc(gFreqPitch);
}

function playCyanFreq() {
    //map color cyan (avg col freq: 618) to pitch freq
    let cFreqPitch = Math.floor(mapRange(618, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("cyanfreq pitch: " + cFreqPitch);
    startOsc(cFreqPitch);
}

function playBlueFreq() {
    //map color blue (avg col freq: 649.5) to pitch freq
    let bFreqPitch = Math.floor(mapRange(649.5, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("blue freq pitch: " + bFreqPitch);
    startOsc(bFreqPitch);
}

function playPurpleFreq() {
    //map color purple (avg col freq: 678.5) to pitch freq
    let pFreqPitch = Math.floor(mapRange(678.5, lowColFreq, highColFreq, lowPitchFreq, highPitchFreq));
    console.log("purple freq pitch: " + pFreqPitch);
    startOsc(pFreqPitch);
}



///////////////////* SOUND MUST HAVES */////////////////////////////
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator; // = audioCtx.createOscillator();
// let now = audioCtx.currentTime;

//frequency is passed to this function from input button
function startOsc(frequency) {
    oscillator = audioCtx.createOscillator(); //create oscillator each time function runs

    oscillator.type = 'square'; //this can't be sine for some reason
    oscillator.frequency.value = frequency; //frequency val to be passed in on event click
    // oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // value in hertz *** THIS MAKES IT INFLEXIBLE / NOT ABLE TO CHANGE THE FREQUENCY WITH THIS **** DONT USE ****

    oscillator.start(audioCtx.currentTime);

    // Create GainNode	
    gain = audioCtx.createGain(); // Create gain node
    gain.gain.value = 0.5; // Set gain to half volume

    // Connect the Nodes
    oscillator.connect(gain); // Connect oscillator to gain
    gain.connect(audioCtx.destination); // Connect gain to output
    // oscillator.start();
    // stop 2 seconds after the current time
    //oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.25);
}


