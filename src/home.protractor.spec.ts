import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

describe('Home component automation test', () => {
    it('Test sucess(Proper width of the image) case scenario', async () => { 
       // await browser.get('http://localhost:4200/home/R-949');
        expect(await element(by.css('.img')).isPresent());
    })

    it('Test success (apply loan button click) case scenario', async () => { 
        //await browser.get('http://localhost:4200/home/R-949');
        expect(await element(by.buttonText('Apply Loan')).isPresent());
         //let text = await (await browser.driver.getCurrentUrl()).toString();
         //expect(text).toContain('applyloan/R-949');
    })

    it('Test sucess (update customer button click) case scenario', async () => { 
        //await browser.get('http://localhost:4200/home/R-949');
        expect(await element(by.buttonText('Update Customer')).isPresent());
        // let text = await (await browser.driver.getCurrentUrl()).toString();
        // expect(text).toContain('update/R-949');      
    })

    it('Test sucess (view customer button click) case scenario', async () => { 
        //await browser.get('http://localhost:4200/home/R-949');
        expect(await element(by.buttonText('View Customer')).isPresent());
        // let text = await (await browser.driver.getCurrentUrl()).toString();
         //expect(text).toContain('view/R-949');      
    })

    it('Test sucess (view loan button click) case scenario', async () => { 
        //await browser.get('http://localhost:4200/home/R-949');
       expect( await element(by.buttonText('View Loan')).isPresent());
         //let text = await (await browser.driver.getCurrentUrl()).toString();
         //expect(text).toContain('view-loan/R-949');      
    })

    it('Test sucess (Logout button click) case scenario', async () => { 
       // await browser.get('http://localhost:4200/home/R-949');
        expect(await element(by.buttonText('Logout')).isPresent());
         //let text = await (await browser.driver.getCurrentUrl()).toString();
         //expect(text).toContain('login');      
    })

})
