// variables

let workTime = 1;
let breakTime = 5;

let seconds = '00';

// display



window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    document.getElementById('start').innerHTML = 'Start'

    document.getElementById('reset').style.display = 'none';

    document.getElementById('stateBreak').style.display = 'none';


}

// star timer



function remTime(){
    document.getElementById('minutes').innerHTML = workTime--;
}

function addTime(){
    document.getElementById('minutes').innerHTML = workTime++;

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

        if(seconds === 0){
            workMinutes--;
            
            if(workMinutes === -1){
                // start break

                PlaySound = () => {
                    var audio = new Audio('./Ping.mp3');
                    audio.loop = false;
                    audio.play();
                }

                if(breakCount % 2 == 0) {

                workMinutes = breakMinutes;
                breakCount++;
            } else {
                // continue work


                workMinutes = workTime;
                breakCount++;
                
            }
        }

            seconds = 59;
        }

    }

    // reset


    var interval;


    window.interval = setInterval(timerFunction, 1000) // 1000 = 1s;
    
}
