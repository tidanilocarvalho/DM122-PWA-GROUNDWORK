import { set as setItem, get as getItem, keys as getKeys }
    from 'https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval.mjs';

class App {
    constructor() {
        console.log("Initialized");
        this.bindButtonListener();  
        this.listStorageValues();
    }

    bindButtonListener() {
        const button = document.querySelector("button");
        button.addEventListener("click", () => {
            this.saveToStorage();
        })
    }

    saveToStorage() {
        const keyInput = document.getElementById("key");
        const valueInput = document.getElementById("value");

        if (keyInput.value && valueInput.value) {
            setItem(keyInput.value, valueInput.value)
            .then(() => {
                this.listStorageValues();
            });
        }
    }

    async listStorageValues() {
        const storageValues = document.getElementById("valuesList");

        const toHtml =  async (key) => {
            const value = await getItem(key);
            console.log(value);
            return `<p>${key}: ${value}</p>`;
        }

        const keys = await getKeys();
        const htmlOutput = await Promise.all(keys.map(toHtml));

        storageValues.innerHTML = htmlOutput.join("");
    }
}

new App();