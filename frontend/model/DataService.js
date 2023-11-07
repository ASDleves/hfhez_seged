class DataService{
    constructor(){

    }

    getAxiosData(url, callback,){
        axios.get(url)
        .then(function (response) {
          console.log("Válasz objektum",response);
          console.log("adatok",response.data);
          console.log("státusz",response.status);
          console.log("Státusz szöveg",response.statusText);
          console.log("Válasz fejléc",response.headers);
          console.log("Válasz config",response.config);
          callback(response.data)
          
        })
        .catch(function (error) {
          hibacallback(error)
        })
        .finally(function () {
          // always executed
        });
    }
    postAxiosData(url, data){
        axios
        .post(url, data)
        .then((response)=> {
            console.log("RESP", response);
        })
          .catch((error)=> {
            console.log("hiba",error);
          })
        
    }
}

export default DataService