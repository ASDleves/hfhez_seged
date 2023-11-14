
class TablazatView {
    #adat = {};
    #toroltSorok = [];
    #szerkesztesMode = false;
    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.torolElem = this.sorElem.children("td").children(".torol");
        this.szerkesztElem = this.sorElem.children("td").children(".szerkeszt");
        this.szerkesztElem.on("click", () => {
            this.#szerkesztesMode = !this.#szerkesztesMode;

            if (this.#szerkesztesMode) {
                this.szerkesztElem.text("Mentés");
                this.#szerkesztesMegjelenit();
            } else {
                this.szerkesztElem.text("🛠");
                this.#mentes();
                this.#szerkesztesBezar();
            }
            
        });

        this.torolElem.on("click", () => {
            this.sorElem.remove();
            this.storeDeletedSor(this.sorElem);
        });
    }
    #mentes() {
        const modositottNev = this.sorElem.find(".szerkesztes-fajta").val();
        const modositottKor = this.sorElem.find(".szerkesztes-kor").val();

        this.#adat.nev = modositottNev;
        this.#adat.szul = modositottKor;
    }
    #szerkesztesMegjelenit() {
        this.sorElem.find("td:nth-child(1)").html(`<input type="text" class="szerkesztes-fajta" value="${this.#adat.nev}">`);
        this.sorElem.find("td:nth-child(2)").html(`<input type="text" class="szerkesztes-kor" value="${this.#adat.szul}">`);
    }
    #szerkesztesBezar() {
        const modositottNev = this.sorElem.find(".szerkesztes-nev").val();
        const modositottSzul = this.sorElem.find(".szerkesztes-szul").val();

        this.#adat.nev = modositottNev;
        this.#adat.szul = modositottSzul;
        this.sorElem.find("td:nth-child(1)").html(this.#adat.nev);
        this.sorElem.find("td:nth-child(2)").html(this.#adat.szul);
    }

    storeDeletedSor(sor) {
        const toroltSor = {
            nev: sor.find("td:nth-child(1)").text(),
            szul: sor.find("td:nth-child(2)").text(),
        };
        this.#toroltSorok.push(toroltSor);
        
        this.#esemenyTrigger('torles', toroltSor);
    }

    #sor() {
        let txt = "<tr>";

        txt += `<td>${this.#adat.nev}</td>`;
        txt += `<td>${this.#adat.szul}</td>`;

        txt += '<td><button class="szerkeszt">🛠</button><button class="torol">🗑️</button></td>';

        txt += "</tr>";
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenyNeve) {
        const esemeny = new CustomEvent(esemenyNeve, {
            detail: this.#adat,
        });
        window.dispatchEvent(esemeny);
    }
}

export default TablazatView;