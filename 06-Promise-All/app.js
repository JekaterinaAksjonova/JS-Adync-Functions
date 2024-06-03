function allPromise() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("1")
        }, 1000)
    })
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("2")
        }, 1000)
    })
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("3")
        }, 1000)
    })
    Promise.all([promise1, promise2, promise3])
    .then(function (result) {
        console.log(result);
    })
}