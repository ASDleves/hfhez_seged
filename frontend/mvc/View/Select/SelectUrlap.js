class SelectUrlapElem {
    #key;
    #elemLeiro = {};
    #valid = false;
    #selectedValue = "";
    
    constructor(key, elemLeiro, szuloElem) {
        this.#key = key;
        this.#elemLeiro = elemLeiro;
        this.formelem = szuloElem;
        this.#selectElem();
        this.selectElem = $(`#${this.#key}`);
        this.validElem = this.formelem.children("div:last-child").children(".valid");
        this.invalidElem = this.formelem.children("div:last-child").children(".invalid");
        this.validElem.addClass("lathatosag");
        this.invalidElem.removeClass("lathatosag");
        
        this.selectElem.on("change", () => {
            this.#selectedValue = this.selectElem.val();
            if (this.#selectedValue === "") {
                this.#valid = false;
                this.invalidElem.removeClass("lathatosag");
                this.validElem.addClass("lathatosag");
            } else {
                this.#valid = true;
                this.validElem.removeClass("lathatosag");
                this.invalidElem.addClass("lathatosag");
            }
        });
    }
    
    getvalid() {
        return this.#valid;
    }
    
    get ertek() {
        return this.#selectedValue;
    }
    
    get key() {
        return this.#key;
    }
    
    #selectElem() {
        let options = this.#elemLeiro.options.map(option => `
            <option value="${option.value}">${option.label}</option>
        `).join('');
        
        let txt = `
            <div class="mb-3 mt-3">
                <label for="${this.#key}" class="form-label">${this.#elemLeiro.megj}:</label>
                <select class="form-select" id="${this.#key}">
                    ${options}
                </select>
                <div class="valid lathatosag">OK</div>
                <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
            </div>
        `;
        
        this.formelem.append(txt);
    }
}

export default SelectUrlapElem;
