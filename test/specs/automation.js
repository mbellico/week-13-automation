describe('Google Page', () => {
    it('should open the Google search engine and verify the title', () => {
        browser.url('https://google.com');
        expect(browser).toHaveTitle('Google');
    })
});
    it('should search for the "Wikipedia" web page', () => {
        const searchInput = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
        browser.pause(2000);
        searchInput.addValue('wikipedia');
        browser.keys('Enter');
    });
    it('should enter the "Wikipedia" site', () => {
        const elem = $('#rso > div:nth-child(1) > div > div.tF2Cxc > div.yuRUbf > a > h3');
        browser.pause(2000);
        elem.click();
    })
    it('Should validate the opened site', () => {
        browser.url('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        browser.pause(1000);
        expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });