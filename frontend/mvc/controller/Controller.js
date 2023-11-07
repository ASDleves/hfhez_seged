import DataService from "../model/DataService.js";
import UrlapView from "../View/View.js"
import UrlapModel from "../model/Urlapmodel.js"

class Controller{
    constructor(){
        this.urlapModel = new UrlapModel();
        this.urlapView = new UrlapView($(".urlap"), this.urlapModel.leiro);
        this.submitElem = $("#submit")
        this.submitElem.on("click", (event) => {
            event.preventDefault()
            let urlapelemLista = this.urlapView.getUrlapElemList();
            let urlapadat = this.urlapView.getUrlapadatok();
            let isFormValid = true; 
            urlapelemLista.forEach((elem) => {
                isFormValid = isFormValid && elem.getvalid();

                
            });
            if (isFormValid) {
                console.log("valid az űrlap!")
                urlapelemLista.forEach((elem) => {
                    let ertek = elem.ertek
                    let kulcs = elem.key
                    urlapadat[kulcs] = ertek
                })
            } else {
                console.log("Nem valid az űrlap!")
            }
            this.dataService.postAxiosData("http://localhost:8000/writers", {
                "nev": urlapadat.nev,
                "szul": urlapadat.szul
            });
            console.log(urlapadat)
        })

        this.dataService = new DataService();
        this.dataService.getAxiosData("http://localhost:8000/writers", this.megjelenit);

    }
    megjelenit(list){
        console.log(list)
    }
}

export default Controller