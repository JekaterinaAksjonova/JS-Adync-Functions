function promiseRejection() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            reject("Something went wrong!")
        }, 1000)
    })
    promise.catch(function (err) {
        console.log(err);
    })
}