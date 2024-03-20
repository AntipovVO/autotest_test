class YandexPage {
    async open() {
        await browser.url("https://ya.ru");
    }
    get searchInput() {return $("input[class='search3__input mini-suggest__input']")}
    get searchButton() {return $("button[class='search3__button mini-suggest__button']");}

    async clickInput() {
        await this.searchInput.click();
    }

    async typeSearch() {
        await this.searchInput.addValue("hello world") ;
    }

    async clickSearch() {
        await this.searchButton.click();
    }
}

export default new YandexPage()