import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

describe('Apply loan component automation test', () => {
    it('Test failure case scenario', async () => { 
       // await browser.get('http://localhost:4200/home/R-342');
        await element(by.buttonText('Apply Loan')).click();
        let ele = await element(by.css('.mat-typography'))
        .element(by.css('.app_style'))
        .element(by.css('div'))
        .element(by.css('.childdisplay'))
        .element(by.css('.container'));

        await ele.element(by.id('loantype')).click();
        await ele.element(by.css("#loantype [value='personal']")).click();
        await element(by.id('loanamount')).sendKeys("4000");

         await ele.element(by.buttonText("Submit")).click();
         browser.sleep(10000);
         ele.element(by.css('.display_error')).getText().then((text)=>{
             expect(text).toContain('Please');
         })
         
    })

    it('Test sucess case(personal loan) scenario', async () => { 
        // await browser.get('http://localhost:4200/home/R-342');
        await element(by.buttonText('Update Customer')).click();
         await element(by.buttonText('Apply Loan')).click();
         let ele = await element(by.css('.mat-typography'))
         .element(by.css('.app_style'))
         .element(by.css('div'))
         .element(by.css('.childdisplay'))
         .element(by.css('.container'));
 
         await ele.element(by.id('loantype')).click();
         await ele.element(by.css("#loantype [value='personal']")).click();
         await element(by.id('loanamount')).sendKeys("4000");
         await element(by.id('loanissuedate')).sendKeys("30-04-2021");
         await ele.element(by.id('loanduration')).click();
         await ele.element(by.css("#loanduration [value='5']")).click();
         await element(by.id('annualincome')).sendKeys("30000");
         await element(by.id('companyname')).sendKeys("tcs");

          await ele.element(by.buttonText("Submit")).click();
          browser.sleep(10000);
          ele.element(by.css('.display_sucess')).getText().then((text)=>{
              expect(text).toContain('successfuly');
          })
     })

     it('Test sucess case(home loan) scenario', async () => { 
        // await browser.get('http://localhost:4200/home/R-342');
        await element(by.buttonText('Update Customer')).click();
         await element(by.buttonText('Apply Loan')).click();
         let ele = await element(by.css('.mat-typography'))
         .element(by.css('.app_style'))
         .element(by.css('div'))
         .element(by.css('.childdisplay'))
         .element(by.css('.container'));
 
         await ele.element(by.id('loantype')).click();
         await ele.element(by.css("#loantype [value='housing']")).click();
         await element(by.id('loanamount')).sendKeys("4000");
         await element(by.id('loanissuedate')).sendKeys("30-04-2021");
         await ele.element(by.id('loanduration')).click();
         await ele.element(by.css("#loanduration [value='5']")).click();
         await element(by.id('annualincome')).sendKeys("30000");
         await element(by.id('companyname')).sendKeys("tcs");

          await ele.element(by.buttonText("Submit")).click();
          browser.sleep(10000);
          ele.element(by.css('.display_sucess')).getText().then((text)=>{
              expect(text).toContain('successfuly');
          })
     })

     it('Test sucess case(educational loan) scenario', async () => { 
        // await browser.get('http://localhost:4200/home/R-342');
        await element(by.buttonText('Update Customer')).click();
         await element(by.buttonText('Apply Loan')).click();
         let ele = await element(by.css('.mat-typography'))
         .element(by.css('.app_style'))
         .element(by.css('div'))
         .element(by.css('.childdisplay'))
         .element(by.css('.container'));
 
         await ele.element(by.id('loantype')).click();
         await ele.element(by.css("#loantype [value='educational']")).click();
         await element(by.id('loanamount')).sendKeys("4000");
         await element(by.id('loanissuedate')).sendKeys("30-04-2021");
         await ele.element(by.id('loanduration')).click();
         await ele.element(by.css("#loanduration [value='5']")).click();
         await element(by.id('coursefee')).sendKeys("30000");
         await ele.element(by.id('coursename')).click();
         await ele.element(by.css("#coursename [value='be']")).click();
         await element(by.id('fathername')).sendKeys("arun");

          await ele.element(by.buttonText("Submit")).click();
          browser.sleep(10000);
          ele.element(by.css('.display_sucess')).getText().then((text)=>{
              expect(text).toContain('successfuly');
          })
     })

     it('Test sucess logout scenario', async () => { 
        // await browser.get('http://localhost:4200/home/R-342');
        await element(by.buttonText('Logout')).click();
     })
     

})