function simplePromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Success!");
        }, 2000);
    })
    promise.then(function (result) {
        console.log(result);
    })
}