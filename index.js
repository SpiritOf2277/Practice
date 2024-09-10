import EventEmitter from "node:events"

const saleEmitter = new EventEmitter();

class Buyer {
    constructor(name, email) {
        this.name = name;
    }

    onSale(discount) {
        console.log(`${this.name} get discount ${ discount }%!`);
    }
}

const buyers = [
    new Buyer('Person 1'),
    new Buyer('Person 2'),
    new Buyer('Person 3'),
];

buyers.forEach(buyer => {
    saleEmitter.on('sale', (discount) => buyer.onSale(discount));
});

saleEmitter.emit('sale', 20);
saleEmitter.emit('sale', 50);
saleEmitter.emit('sale', -100);