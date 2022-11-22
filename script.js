// variables

let workTime = 1;
let breakTime = 1;

let seconds = '00';

// display



window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    
    document.getElementById('start').innerHTML = 'Start'
    
    document.getElementById('reset').style.display = 'none';


    
}

// star timer


function PlaySoundPing() {
    var audioPing = new Audio('./Ping.mp3');
    audioPing.loop = false;
    audioPing.play();
    audioPing.volume = 0.2;
}

function PlaySoundRing() {
    var audioRing = new Audio('./boxing-bell.mp3');
    audioRing.loop = false;
    audioRing.play();
    audioRing.volume = 0.2;

}

function remTime(){
    document.getElementById('minutes').innerHTML = --workTime;
}

function addTime(){
    document.getElementById('minutes').innerHTML = ++workTime;
}



function start() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    
    
    //change the timer
    seconds = 5;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 1;

    // countdown

    let timerFunction = () => {

        //change display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === -1){
            workMinutes--;
            

            if(workMinutes === -1){
                // start break

                document.getElementById('state').innerHTML = 'Work time';

            

                if(breakCount % 2 == 0) {
                workMinutes = breakMinutes;
                PlaySoundRing();

            
                breakCount++;

                

            } else {
                // continue work
                PlaySoundPing();


                workMinutes = workTime;
                document.getElementById('state').innerHTML = 'Break time';

                breakCount++;


                
            }
        }

            seconds = 5;
        }

    }

    // reset


    var interval;


    window.interval = setInterval(timerFunction, 1000) // 1000 = 1s;
    
}
