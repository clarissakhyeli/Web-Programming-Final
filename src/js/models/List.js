
export default class List {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(item) {
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.total -= this.items[index].total;
        this.items.splice(index, 1);
    }
}