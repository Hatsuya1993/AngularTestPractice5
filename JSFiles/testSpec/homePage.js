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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../pageObject/homePage");
describe('Testing the functionality of the homePage', () => __awaiter(void 0, void 0, void 0, function* () {
    var EC = protractor_1.protractor.ExpectedConditions;
    const details = {
        lockedOutUser: {
            username: "locked_out_user",
            password: "secret_sauce",
            error: "Epic sadface: Sorry, this user has been locked out."
        },
        wrongDetails: {
            username: "testingFalseUsername",
            password: "testingFalsePassword",
            error: "Epic sadface: Username and password do not match any user in this service"
        },
        correctDetails: {
            username: "standard_user",
            password: "secret_sauce",
        }
    };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield homepage.website;
    }));
    it('Check if the link is valid', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("saucedemo");
    }));
    it('Check if the input for username is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        expect(yield homepage.inputUsername.isPresent()).toBeTruthy();
        expect(yield homepage.inputUsername.isDisplayed()).toBeTruthy();
    }));
    it('Check if the input for password is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        expect(yield homepage.inputPassword.isPresent()).toBeTruthy();
        expect(yield homepage.inputPassword.isDisplayed).toBeTruthy();
    }));
    it('When the login button is clicked with no inputs, check the display', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield protractor_1.browser.wait(EC.presenceOf(homepage.loginButton), 5000, "Login button not found");
        yield homepage.loginButton.click();
        yield protractor_1.browser.wait(EC.presenceOf(homepage.errorMessage), 5000, "No error message found");
        expect(homepage.errorMessage.getText()).toBe("Epic sadface: Username is required");
    }));
    it('After the error message is cleared, it wont be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield protractor_1.browser.wait(EC.presenceOf(homepage.loginButton), 5000, "Login button not found");
        yield homepage.loginButton.click();
        yield protractor_1.browser.wait(EC.presenceOf(homepage.errorMessage), 5000, "No error message found");
        yield homepage.errorMessageClose.click();
        expect(homepage.errorMessage.isPresent()).toBeFalsy();
    }));
    fit('When the input is given the wrong details, the right pop up should appear', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield homepage.inputUsername.sendKeys(details.wrongDetails.username);
        yield homepage.inputPassword.sendKeys(details.wrongDetails.password);
        yield homepage.loginButton.click();
        expect(yield homepage.errorMessage.getText()).toBe(details.wrongDetails.error);
    }));
    it('When the user is lockedout, the popup will display the right details', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield homepage.inputUsername.sendKeys(details.lockedOutUser.username);
        yield homepage.inputPassword.sendKeys(details.lockedOutUser.password);
        yield homepage.loginButton.click();
        expect(yield homepage.errorMessage.getText()).toBe(details.lockedOutUser.error);
    }));
    it('When the input details is correct, move to another page', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let homepage = new homePage_1.homePage();
        yield homepage.inputUsername.sendKeys(details.correctDetails.username);
        yield homepage.inputPassword.sendKeys(details.correctDetails.password);
        yield homepage.loginButton.click();
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("inventory");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCxxREFBK0M7QUFFL0MsUUFBUSxDQUFDLDJDQUEyQyxFQUFFLEdBQVMsRUFBRTtJQUU3RCxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0lBRXZDLE1BQU0sT0FBTyxHQUFHO1FBQ1osYUFBYSxFQUFFO1lBQ1gsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsY0FBYztZQUN4QixLQUFLLEVBQUUscURBQXFEO1NBQy9EO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLEtBQUssRUFBRSwyRUFBMkU7U0FDckY7UUFDRCxjQUFjLEVBQUU7WUFDWixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsY0FBYztTQUMzQjtLQUNKLENBQUE7SUFFRCxVQUFVLENBQUMsR0FBTyxFQUFFO1FBQ2hCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFBO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBUyxFQUFFO1FBQ3hDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQVMsRUFBRTtRQUMxRCxvQkFB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