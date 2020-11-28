import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs';

let db;

export default class TodoService {
    constructor() {
        this.initializeDB();
    }

    initializeDB() {
        db = new Dexie('todoDB');

        db.version(1).stores({
            tasks: '++id, description'
        })

        db.on("populate", async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const jsonData = await response.json();
            await db.tasks.bulkPut(jsonData);
        });

        db.open();
    }

    getAll() {
        return db.tasks.toArray();
    }

    get(id) {
        return db.tasks.get(id);
    }

    save(task) {
        return db.tasks.put(task);
    }

    delete(id) {
        return db.tasks.delete(id);
    }
}