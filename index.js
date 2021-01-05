const puppeteer = require('puppeteer');



(async () => {

    let siteURI = 'https://cnews.ng/';
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(siteURI, {waitUntil: 'networkidle2'});
    
    await page.screenshot({ path: 'screen.png'});
    //await page.pdf({ path: 'hn.pdf', format: 'A4'});

    //debugger;
    await browser.close();
})