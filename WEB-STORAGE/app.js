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

    listStorageValues() {
        const storageValues = document.getElementById("valuesList");

        const toHtml = (key) => {
            const value = localStorage.getItem(key);
            return `<p>${key}: ${value}</p>`;
        }

        const htmlOutPut = Object.keys(localStorage)
            .sort()
            .map(toHtml)
            .join("");

        storageValues.innerHTML = htmlOutPut;
    }
}

new App();