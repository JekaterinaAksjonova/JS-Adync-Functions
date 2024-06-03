let seconds = 0;
let timeinterval;
let savedTimeinterval;

function startStopWatch() {
    timeinterval = setInterval(function () {
        seconds++;
        console.log('Elapsed time:' + seconds + ' s');
    }, 1000)

    savedTimeinterval = setInterval(async function () {
        await saveTime(seconds);
    }, 5000)
}

function stopStopWatch() {
    clearInterval(timeinterval);
    seconds == 0;
}

function saveTime(seconds) {
    return new Promise((resolve, reject) => {
        console.log("Saved time: " + seconds + " s");
        resolve();
    })
}