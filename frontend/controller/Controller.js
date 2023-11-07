import DataService from "../model/DataService.js";


class Controller{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getAxiosData("http://localhost:8000/writers", this.megjelenit);
        this.dataService.postAxiosData("http://localhost:8000/writers",{
            "nev":"Jani",
            "szul": 1777
        })
    }
    megjelenit(list){
        console.log(list)
    }
}

export default Controller