const products = [];


module.exports = class Product {
    constructor(titleOfProduct) {
        this.title = titleOfProduct;
    }

    save () {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}



























