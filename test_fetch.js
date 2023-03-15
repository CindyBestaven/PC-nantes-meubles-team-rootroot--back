function fetchData(){
    start = performance.now();
    return fetch("http://127.0.0.1:8000/api")
    .then((result) => {
        console.log("something is here")
      return result.json();
    })
    .catch((error) => {
      console.log(`error on api: ${error}`);
    });

}
fetchData()