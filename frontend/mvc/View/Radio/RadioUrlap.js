class RadioUrlapElem {
    #key;
    #elemLeiro = {};
    #valid = false;
    #radioselect;
    constructor(key, elemLeiro, szuloElem) {
        this.#key = key;
        this.#elemLeiro = elemLeiro;
        this.formelem = szuloElem;
        this.#radioElem();
        this.selectElem = $(`#${this.#key}`);
        this.validElem = this.formelem.children("div:last-child").children(".valid");
        this.invalidElem = this.formelem.children("div:last-child").children(".invalid");
        this.validElem.addClass("lathatosag");
        this.invalidElem.removeClass("lathatosag");
        this.radioElem.on("change", () => {
            const selectedRadio = this.radioElem.filter(":checked");
            
            if (selectedRadio.length != 1) {
   
                this.#valid = false;
                this.invalidElem.removeClass("lathatosag");
                this.validElem.addClass("lathatosag");
            } else {
                this.#valid = true;
                this.validElem.removeClass("lathatosag");
                this.invalidElem.addClass("lathatosag");
                this.#radioselect = selectedRadio.val();
            }

        });
    }
    
    getvalid() {
        return this.#valid;
    }
    
    get ertek() {
        return this.#radioselect
    }
    
    get key() {
        return this.#key;
    }
    
    #radioElem() {
        let options = this.#elemLeiro.options.map(option => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${this.#elemLeiro.name}" id="${option.value}" value="${option.value}">
                <label class="form-check-label" for="${option.value}">${option.label}</label>
            </div>
        `).join('');
    
        let txt = `
            <div class="mb-3 mt-3">
                <label class="form-label">${this.#elemLeiro.megj}:</label>
                ${options}
                <div class="valid lathatosag">OK</div>
                <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
            </div>
        `;
    
        this.formelem.append(txt);

        this.radioElem = this.formelem.find(`input[type="radio"][name="${this.#elemLeiro.name}"]`);
    }
}

export default RadioUrlapElem;
