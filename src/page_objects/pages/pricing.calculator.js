const BasePage = require('./base.page');
const {
    PriceHeader,
    PriceTabs,
    PriceCard
} = require('../components');

class CalculatorPage {
    constructor() {
        super('/products/calculator');
        this.priceTabs = new PriceTabs();
        this.priceCard = new PriceCard();
    }
}

module.exports = CalculatorPage;
