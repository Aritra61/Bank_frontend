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
it('Test fail (invalid user id) case scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get('http://localhost:4200/login/')];
            case 1:
                _b.sent();
                //repeater ,  chain locators, And css for identical tags
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('cid')).sendKeys("R-200")];
            case 2:
                //repeater ,  chain locators, And css for identical tags
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('pwd')).sendKeys("@123Admin")];
            case 3:
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('uid')).sendKeys("ari")];
            case 4:
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText("Login")).click()];
            case 5:
                _b.sent();
                protractor_1.browser.sleep(10000);
                _a = expect;
                return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.display_error')).getText()];
            case 6:
                _a.apply(void 0, [_b.sent()]).toEqual('UserId does not exist');
                return [2 /*return*/];
        }
    });
}); });
it('Test fail (user name password mismatch) case scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.get('http://localhost:4200/login/')];
            case 1:
                _b.sent();
                //repeater ,  chain locators, And css for identical tags
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('cid')).sendKeys("R-515")];
            case 2:
                //repeater ,  chain locators, And css for identical tags
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('pwd')).sendKeys("@123Admi")];
            case 3:
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.id('uid')).sendKeys("ari")];
            case 4:
                _b.sent();
                return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText("Login")).click()];
            case 5:
                _b.sent();
                protractor_1.browser.sleep(10000);
                _a = expect;
                return [4 /*yield*/, protractor_2.element(protractor_2.by.css('.display_error')).getText()];
            case 6:
                _a.apply(void 0, [_b.sent()]).toEqual('Username or password mismatch');
                return [2 /*return*/];
        }
    });
}); });
describe('Login component automation test', function () {
    it('Test sucess case scenario', function () { return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get('http://localhost:4200/login/')];
                case 1:
                    _a.sent();
                    //repeater ,  chain locators, And css for identical tags
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('cid')).sendKeys("R-515")];
                case 2:
                    //repeater ,  chain locators, And css for identical tags
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('pwd')).sendKeys("@123Admin")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.id('uid')).sendKeys("ari")];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_2.element(protractor_2.by.buttonText("Login")).click()];
                case 5:
                    _a.sent();
                    protractor_1.browser.sleep(10000);
                    return [4 /*yield*/, protractor_1.browser.driver.getCurrentUrl()];
                case 6: return [4 /*yield*/, (_a.sent()).toString()];
                case 7:
                    text = _a.sent();
                    expect(text).toContain('home/R-515');
                    return [2 /*return*/];
            }
        });
    }); });
});
