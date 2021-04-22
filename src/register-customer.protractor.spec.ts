import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";

describe('Register component automation test', () => {
    it('Test failure case scenario', async () => { 
        await browser.get('http://localhost:4200/register/');
        //repeater ,  chain locators, And css for identical tags
        await element(by.id('username')).sendKeys("ari");
        await element(by.id('password')).sendKeys("@123Admin");
        await element(by.id('name')).sendKeys("aritra");

         await element(by.buttonText("Submit")).click();
         element(by.css('.display_error')).getText().then((text)=>{
             expect(text).toContain('please');
         })
    })

    it('Test sucess case scenario', async () => { 
        await browser.get('http://localhost:4200/register/');
        //repeater ,  chain locators, And css for identical tags
        await element(by.id('username')).sendKeys("ari");
        await element(by.id('password')).sendKeys("@123Admin");
        await element(by.id('name')).sendKeys("aritra");
        await element(by.id('address')).sendKeys("kali");
        await element(by.id('email')).sendKeys("abc@gmail.com");
        await element(by.id('gender')).click();
        await element(by.css("#gender [value='male']")).click();
        await element(by.id('marital')).click();
        await element(by.css("#marital [value='married']")).click();
        await element(by.id('contact')).sendKeys("1111111111");
        await element(by.id('account_type')).click();
        await element(by.css("#account_type [value='salary']")).click();
        await element(by.id('dob')).sendKeys("12-10-1995");
        await element(by.id('g_name')).sendKeys("kaka");
    
         await element(by.buttonText("Submit")).click();
         element(by.css('.display_success')).getText().then((text)=>{
             expect(text).toContain('note');
         })
    })


})
