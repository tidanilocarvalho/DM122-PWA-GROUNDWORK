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
            localStorage.setItem(keyInput.value, valueInput.value);
            this.listStorageValues();
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