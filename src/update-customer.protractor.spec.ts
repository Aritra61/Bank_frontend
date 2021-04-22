import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

describe('Update component automation test', () => {

    it('Test failure case scenario', async () => { 
        await element(by.buttonText('Update Customer')).click();
       // await browser.get('http://localhost:4200/home/R-435/update/R-435');
        await element(by.id('dateofregistration')).sendKeys("12-10-2006");
        await element(by.id('gurdianType')).sendKeys("kaka");
    
         await element(by.buttonText("Submit")).click();
         browser.sleep(10000);
         element(by.css('.display_error')).getText().then((text)=>{
             expect(text).toContain('Please');
         })
    })

    it('Test sucess case scenario', async () => { 
        await element(by.buttonText('Update Customer')).click();
       // await browser.get('http://localhost:4200/home/R-435/update/R-435');
        await element(by.id('dateofregistration')).sendKeys("12-10-2006");
        await element(by.id('gurdianType')).sendKeys("kaka");
        await element(by.id('country')).sendKeys("India");
        await element(by.id('state')).sendKeys("WB");
        await element(by.id('citizenShip')).sendKeys("Indian");
        await element(by.id('citizenStatus')).sendKeys("yes");
        await element(by.id('bankName')).sendKeys("SBI");
        await element(by.id('branchName')).sendKeys("kadamtala");
        await element(by.id('idproofType')).sendKeys("Aadhar");
        await element(by.id('iddocNumber')).sendKeys("2000");
        await element(by.id('refaccholderName')).sendKeys("Gautam");
        await element(by.id('refaccholderAccNo')).sendKeys("4000A");
        await element(by.id('refaccholderAddress')).sendKeys("50/51 kali");
    
         await element(by.buttonText("Submit")).click();
         browser.sleep(10000);
         element(by.css('.display_sucess')).getText().then((text)=>{
             expect(text).toContain('updated');
         })
    })


})
