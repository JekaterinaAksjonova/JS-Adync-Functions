async function promiseRejectionAsync() {
   let promise = new Promise((resolve, reject) => {
      setTimeout(function () {
         reject("Error")
      }, 1000)
   })
   try {
      await promise;
   } catch (error) {
      console.log(error);
   }
}