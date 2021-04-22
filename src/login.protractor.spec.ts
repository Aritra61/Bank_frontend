import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

    it('Test fail (invalid user id) case scenario', async () => { 
        await browser.get('http://localhost:4200/login/');
        //repeater ,  chain locators, And css for identical tags
        await element(by.id('cid')).sendKeys("R-200");
        await element(by.id('pwd')).sendKeys("@123Admin");
        await element(by.id('uid')).sendKeys("ari");
        await element(by.buttonText("Login")).click();
         browser.sleep(10000);
        expect(await element(by.css('.display_error')).getText()).toEqual('UserId does not exist')
    })

    it('Test fail (user name password mismatch) case scenario', async () => { 
        await browser.get('http://localhost:4200/login/');
        //repeater ,  chain locators, And css for identical tags
        await element(by.id('cid')).sendKeys("R-515");
        await element(by.id('pwd')).sendKeys("@123Admi");
        await element(by.id('uid')).sendKeys("ari");
        await element(by.buttonText("Login")).click();
         browser.sleep(10000);
        expect(await element(by.css('.display_error')).getText()).toEqual('Username or password mismatch')
    })

    describe('Login component automation test', () => {
        it('Test sucess case scenario', async () => { 
            await browser.get('http://localhost:4200/login/');
            //repeater ,  chain locators, And css for identical tags
            await element(by.id('cid')).sendKeys("R-515");
            await element(by.id('pwd')).sendKeys("@123Admin");
            await element(by.id('uid')).sendKeys("ari");
            await element(by.buttonText("Login")).click();
             browser.sleep(10000);
             let text = await (await browser.driver.getCurrentUrl()).toString();
             expect(text).toContain('home/R-515');
        })


})
