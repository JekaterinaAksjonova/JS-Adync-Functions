function helloWorld() {
    console.log("Hello");
    setTimeout(function() {
        console.log("World");
    }, 2000)
}

function helloWorldWithPromice(params) {
    let promise = new Promise(function(resolve, reject){
        console.log("Hello");
        setTimeout(function(){
            console.log("World");
        }, 2000)
    })
    promise.then(function (result) {
        console.log(result);
    })
}

async function helloWorldWithAsync(params) {
    let promise = new Promise(function(resolve, reject){
        console.log("Hello");
        setTimeout(function(){
            console.log("World");
        }, 2000)
    })
    let result = await promise;
    console.log(result);
}