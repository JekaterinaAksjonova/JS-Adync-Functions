async function chainedPromisesAsync() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("1")
        }, 1000)
    })
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("2")
        }, 2000)
    })
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("3")
        }, 3000)
    })

    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;

    console.log(result1, result2, result3);
}