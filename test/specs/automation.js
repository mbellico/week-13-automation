describe('Google Page', () => {
    it('should open the Google search engine and verify the title', () => {
        browser.url('https://google.com');
        expect(browser).toHaveTitle('Google');
    })
});
    it('should search for the "Wikipedia" web page', () => {
        const searchInput = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        browser.pause(2000);
        const searchBtn = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b');
        searchInput.addValue('http://wikipedia.com');
        searchBtn.click();
    });
    it('should enter the "Wikipedia" site', () => {
        const elem = $('#rso > div:nth-child(1) > div:nth-child(2) > div > div > div.yuRUbf > a > h3');
        browser.pause(2000);
        elem.click();
    })
    it('Should validate the opened site', () => {
        browser.url('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        browser.pause(2000);
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    })