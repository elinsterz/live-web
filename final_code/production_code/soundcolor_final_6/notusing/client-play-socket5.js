//////////////////* LOAD *///////////////
window.addEventListener('load', init);

//////// canvas //////
var canvas = document.getElementById("draw-canvas");
var ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white


//let rect = canvas.getBoundingClientRect();


////////////////////////////MAIN FUNCTION////////////////////////////
function init() {

    ///////// TOGGLE x mark in bottom container ///////////
    let bottomX = document.getElementById('bottom-div-x');
    bottomX.addEventListener('click', () => {
        toggleBottom();
        console.log('x clicked!');
    });

    ///////////////// CLICK EVENT TO DRAW SINE WAVES ///////////////
    // canvas background color
    // ctx.fillStyle = "rgba(255, 255, 255, 0)"; //placeholder pink

    //resize canvas to be window width + height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    ///////////// CLEAR CANVAS ALL THE TIME TO ALLOW FOR ANIMATION //////////////
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    ///////////////////// CLICK --> SEND DATA TO SOCKET ////////////
    let evl = null;
    // function plotSine(event, length, xOffset, yOffset, amplitude, frequency, color, lineWidth)

    let redSelect = document.getElementById('red-play-div');
    redSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawRedSine;
        canvas.addEventListener('click', (e) => {
            //drawRedSine;
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendRedData', p);
        });
    });

    let orangeSelect = document.getElementById('orange-play-div');
    orangeSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawOrangeSine;
        canvas.addEventListener('click', (e) => {
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendOrangeData', p);
        });

    });

    let yellowSelect = document.getElementById('yellow-play-div');
    yellowSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawYellowSine;
        // canvas.addEventListener('click', drawYellowSine);
        canvas.addEventListener('click', (e) => {
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendYellowData', p);
        });
    });

    let greenSelect = document.getElementById('green-play-div');
    greenSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawGreenSine;
        canvas.addEventListener('click', (e) => {
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendGreenData', p);
        });
        // canvas.addEventListener('click', drawGreenSine);
    });

    let cyanSelect = document.getElementById('cyan-play-div');
    cyanSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawCyanSine;
        canvas.addEventListener('click', (e) => {
            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendCyanData', p);
        });
        // canvas.addEventListener('click', drawCyanSine);
    });

    let blueSelect = document.getElementById('blue-play-div');
    blueSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawBlueSine;
        canvas.addEventListener('click', (e) => {

            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendBlueData', p);
        });
        // canvas.addEventListener('click', drawBlueSine);
    });

    let purpleSelect = document.getElementById('purple-play-div');
    purpleSelect.addEventListener('click', () => {
        if (evl != null) {
            canvas.removeEventListener('click', evl);
        }
        evl = drawPurpleSine;
        canvas.addEventListener('click', (e) => {

            console.log(e);
            let p = {
                x: e.clientX,
                y: e.clientY
            };
            socket.emit('sendPurpleData', p);
        });
        //canvas.addEventListener('click', drawPurpleSine);
    });


    ///////////////////////SOCKET PORTION//////////////////
    //socket connection
    var socket = io.connect();

    socket.on('connect', function () {
        console.log("Connected");
    });


    /////////////* SOCKET FOR RECEIVING DATA */////////
    socket.on('sendRedData', function (data) {
        drawRedSine(data);
        playRedFreq();
        console.log("Got: " + data);
    });

    socket.on('sendOrangeData', function (data) {
        drawOrangeSine(data);
        console.log("Got: " + data);
    });

    socket.on('sendYellowData', function (data) {
        drawYellowSine(data);
        console.log("Got: " + data);
    });

    socket.on('sendGreenData', function (data) {
        drawGreenSine(data);
        console.log("Got: " + data);
    });

    socket.on('sendCyanData', function (data) {
        drawCyanSine(data);
        console.log("Got: " + data);
    });

    socket.on('sendBlueData', function (data) {
        drawBlueSine(data);
        console.log("Got: " + data);
    });

    socket.on('sendPurpleData', function (data) {
        drawPurpleSine(data);
        console.log("Got: " + data);
    });


    /////////////////// FUNCTION TO DRAW //////////////////


    // function drawRedSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, rfreq, "#FD4F4F", lineWidth);
    //     ctx.restore();

    //     window.requestAnimationFrame(drawRedSine);
    // }
    // let step = -4;


    // function drawOrangeSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, ofreq, "#FF9D41", lineWidth);
    //     ctx.restore();

    //     playOrangeFreq();        
    //     window.requestAnimationFrame(drawOrangeSine(data));
    // }

    // function drawYellowSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, yfreq, "#FBE11F", lineWidth);
    //     ctx.restore();

    //     playYellowFreq();  
    //     window.requestAnimationFrame(drawYellowSine(data));    
    // }

    // function drawGreenSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, gfreq, "#B6E836", lineWidth);
    //     ctx.restore();

    //     playGreenFreq();  
    //     window.requestAnimationFrame(drawGreenSine(data));     
    // }

    // function drawCyanSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, cfreq, "#1EDFBE", lineWidth);
    //     ctx.restore();

    //     playCyanFreq();  
    //     window.requestAnimationFrame(drawCyanSine(data));          
    // }

    // function drawBlueSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, bfreq, "#29ACFF", lineWidth);
    //     ctx.restore();

    //     playBlueFreq();     
    //     window.requestAnimationFrame(drawBlueSine(data));     
    // }

    // function drawPurpleSine(data) {
    //     // console.log('e.pageX: ' + data.x);
    //     // console.log('e.pageY: ' + data.y);

    //     ctx.save();
    //     step += 4; //changes the speed
    //     plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, pfreq, "#685CFF", lineWidth);
    //     ctx.restore();

    //     playPurpleFreq(); 
    //     window.requestAnimationFrame(drawPurpleSine(data));  
    // }


    /////////////////// ANIMATE THE LINE ///////////////////
    window.requestAnimationFrame(drawRedSine);

}

/////////////////// FUNCTIONS TO DRAW //////////////////
//function plotSine(mouseX, mouseY, wavelength, xOffset, yOffset, amplitudeSine, frequency, color, lineWidth)
function drawRedSine(data) {
    // console.log('e.pageX: ' + data.x);
    // console.log('e.pageY: ' + data.y);
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white
    ctx.save();
    plotSine(data.x, data.y, wavelength, step, 0, amplitudeSine, rfreq, "#FD4F4F", lineWidth);
    ctx.restore();

    step += 4; //changes the speed
    window.requestAnimationFrame(drawRedSine);
}

let step = -4;



/////////////////* PLOT SINE TEMPLATE *////////////////////
let wavelength = canvas.width / 0.25;
let amplitudeSine = 40;
let lineWidth = 12;

//add in var amplitude, frequency, color so that it can make multiple color sine waves
function plotSine(mouseX, mouseY, wavelength, step, yOffset, amplitudeSine, frequency, color, lineWidth) {

    let width = ctx.canvas.width;
    let height = ctx.canvas.height;

    let x = mouseX - canvas.offsetLeft;
    let y = mouseY - canvas.offsetTop;
    // console.log("x: " + x);
    // console.log("y: " + y);

    //length = wavelength;
    //amplitudeSine = amplitudeSine;

    // console.log("x: " + x);
    // console.log("y: " + y);

    //draw line begins here
    ctx.save(); //push
    ctx.beginPath();
    //ctx.translate(canvas.width / 6, 0); //translate
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth;
    // ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white


    //while x is a certain length, draw the sine wave
    while (x < wavelength) {
        ctx.strokeStyle = color;

        ctx.fillStyle = "rgba(255, 255, 255, 1)"; //white
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        z = y + amplitudeSine * Math.sin((x + step) / frequency);
        ctx.lineTo(x, z);
        x++;
        // fadeOutEffect();
        setTimeout(fadeOutEffect, 2000);
    }
    ctx.stroke();
    // ctx.save(); //push
    // //console.log("Drawing point at y=" + y);

    // ctx.stroke();
    ctx.restore(); //pop
}


///////////////////* FADE OUT EFFECT *//////////////////
function fadeOutEffect() {
    // var r = 0.3 + (Math.random()*0.1);
    // ctx.fillStyle = "rgba(60,30,50,"+r+")";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    color = "rgba(255,255,255,0)";
    // setTimeout(fadeOutEffect, 2000);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    var r = 0.3 + (Math.random() * 0.1);
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    // stop 2 seconds after the current time
    oscillator.stop(audioCtx.currentTime + 1.01);
}
