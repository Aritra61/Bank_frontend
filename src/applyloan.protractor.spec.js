"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var protractor_2 = require("protractor");
describe('Apply loan component automation test', function () {
    it('Test failure case scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await browser.get('http://localhost:4200/home/R-342');
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Apply Loan')).click()];
                case 1:
                    // await browser.get('http://localhost:4200/home/R-342');
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.mat-typography'))
                            .element(protractor_2.by.css('.app_style'))
                            .element(protractor_2.by.css('div'))
                            .element(protractor_2.by.css('.childdisplay'))
                            .element(protractor_2.by.css('.container'))];
                case 2:
                    ele = _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loantype')).click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loantype [value='personal']")).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanamount')).sendKeys("4000")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.buttonText("Submit")).click()];
                case 6:
                    _a.sent();
                    protractor_1.browser.sleep(10000);
                    ele.element(protractor_2.by.css('.display_error')).getText().then(function (text) {
                        expect(text).toContain('Please');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test sucess case(personal loan) scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await browser.get('http://localhost:4200/home/R-342');
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Update Customer')).click()];
                case 1:
                    // await browser.get('http://localhost:4200/home/R-342');
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Apply Loan')).click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.mat-typography'))
                            .element(protractor_2.by.css('.app_style'))
                            .element(protractor_2.by.css('div'))
                            .element(protractor_2.by.css('.childdisplay'))
                            .element(protractor_2.by.css('.container'))];
                case 3:
                    ele = _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loantype')).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loantype [value='personal']")).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanamount')).sendKeys("4000")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanissuedate')).sendKeys("30-04-2021")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loanduration')).click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loanduration [value='5']")).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('annualincome')).sendKeys("30000")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('companyname')).sendKeys("tcs")];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.buttonText("Submit")).click()];
                case 12:
                    _a.sent();
                    protractor_1.browser.sleep(10000);
                    ele.element(protractor_2.by.css('.display_sucess')).getText().then(function (text) {
                        expect(text).toContain('successfuly');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test sucess case(home loan) scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await browser.get('http://localhost:4200/home/R-342');
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Update Customer')).click()];
                case 1:
                    // await browser.get('http://localhost:4200/home/R-342');
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Apply Loan')).click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.mat-typography'))
                            .element(protractor_2.by.css('.app_style'))
                            .element(protractor_2.by.css('div'))
                            .element(protractor_2.by.css('.childdisplay'))
                            .element(protractor_2.by.css('.container'))];
                case 3:
                    ele = _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loantype')).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loantype [value='housing']")).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanamount')).sendKeys("4000")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanissuedate')).sendKeys("30-04-2021")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loanduration')).click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loanduration [value='5']")).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('annualincome')).sendKeys("30000")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('companyname')).sendKeys("tcs")];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.buttonText("Submit")).click()];
                case 12:
                    _a.sent();
                    protractor_1.browser.sleep(10000);
                    ele.element(protractor_2.by.css('.display_sucess')).getText().then(function (text) {
                        expect(text).toContain('successfuly');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test sucess case(educational loan) scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        var ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await browser.get('http://localhost:4200/home/R-342');
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Update Customer')).click()];
                case 1:
                    // await browser.get('http://localhost:4200/home/R-342');
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Apply Loan')).click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.mat-typography'))
                            .element(protractor_2.by.css('.app_style'))
                            .element(protractor_2.by.css('div'))
                            .element(protractor_2.by.css('.childdisplay'))
                            .element(protractor_2.by.css('.container'))];
                case 3:
                    ele = _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loantype')).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loantype [value='educational']")).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanamount')).sendKeys("4000")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('loanissuedate')).sendKeys("30-04-2021")];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('loanduration')).click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#loanduration [value='5']")).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('coursefee')).sendKeys("30000")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.id('coursename')).click()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.css("#coursename [value='be']")).click()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('fathername')).sendKeys("arun")];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, ele.element(protractor_2.by.buttonText("Submit")).click()];
                case 14:
                    _a.sent();
                    protractor_1.browser.sleep(10000);
                    ele.element(protractor_2.by.css('.display_sucess')).getText().then(function (text) {
                        expect(text).toContain('successfuly');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('Test sucess logout scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // await browser.get('http://localhost:4200/home/R-342');
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText('Logout')).click()];
                case 1:
                    // await browser.get('http://localhost:4200/home/R-342');
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
