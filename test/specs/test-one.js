import { expect } from '@wdio/globals'
import YandexPage from "../pageobjects/yandex-page.js";
import yandexPage from "../pageobjects/yandex-page.js";

describe('Yandex test', () => {
    it('Search in yandex', async () => {
        await YandexPage.open()
        await browser.pause(3000);
        await yandexPage.typeSearch();
        await browser.pause(3000);
        await yandexPage.clickSearch();
    })
})