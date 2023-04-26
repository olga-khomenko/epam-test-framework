const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
    constructor() {
        super('div[class="devsite-header--inner nocontent"]');
    }

    get searchBtn() {
        return this.rootEl.$('input[class="devsite-search-field devsite-search-query"]');
    }
}

module.exports = HeaderComponent;
