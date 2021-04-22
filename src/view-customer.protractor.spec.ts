import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

describe('View Customer component automation test', () => {
    it('Test sucess case scenario', async () => { 
        //await browser.get('http://localhost:4200/home/R-949/view/R-949');
        await element(by.buttonText('View Customer')).click();
        expect(await element(by.css('.table')).isPresent());
       
    })
   
})