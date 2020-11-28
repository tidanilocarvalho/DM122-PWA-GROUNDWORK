export default class HtmlService {
    #todoService;
    
    constructor(todoService) {
        this.#todoService = todoService;
        this.bindFormEvent();
    }
    
    bindFormEvent() {
        const form = document.querySelector("form");
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("submited " + form.item.value);
            form.reset();
            form.item.focus();
        });
    }
}