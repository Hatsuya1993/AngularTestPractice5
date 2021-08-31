import { browser, protractor } from "protractor"
import {homePage} from "../pageObject/homePage"

describe('Testing the functionality of the homePage', async () => {

    var EC = protractor.ExpectedConditions;

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
    }
    
    beforeEach(async()=>{
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await homepage.website
    })

    it('Check if the link is valid', async () => {
        browser.waitForAngularEnabled(false);
        expect(await browser.getCurrentUrl()).toContain("saucedemo")
    })

    it('Check if the input for username is displayed', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        expect(await homepage.inputUsername.isPresent()).toBeTruthy()
        expect(await homepage.inputUsername.isDisplayed()).toBeTruthy()
    })

    it('Check if the input for password is displayed', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        expect(await homepage.inputPassword.isPresent()).toBeTruthy()
        expect(await homepage.inputPassword.isDisplayed).toBeTruthy()
    })

    it('When the login button is clicked with no inputs, check the display', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await browser.wait(EC.presenceOf(homepage.loginButton), 5000, "Login button not found")
        await homepage.loginButton.click()
        await browser.wait(EC.presenceOf(homepage.errorMessage), 5000, "No error message found")
        expect(homepage.errorMessage.getText()).toBe("Epic sadface: Username is required")
    })

    it('After the error message is cleared, it wont be displayed', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await browser.wait(EC.presenceOf(homepage.loginButton), 5000, "Login button not found")
        await homepage.loginButton.click()
        await browser.wait(EC.presenceOf(homepage.errorMessage), 5000, "No error message found")
        await homepage.errorMessageClose.click()
        expect(homepage.errorMessage.isPresent()).toBeFalsy()
    })

    it('When the input is given the wrong details, the right pop up should appear', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await homepage.inputUsername.sendKeys(details.wrongDetails.username)
        await homepage.inputPassword.sendKeys(details.wrongDetails.password)
        await homepage.loginButton.click()
        expect(await homepage.errorMessage.getText()).toBe(details.wrongDetails.error)
    })

    it('When the user is lockedout, the popup will display the right details', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await homepage.inputUsername.sendKeys(details.lockedOutUser.username)
        await homepage.inputPassword.sendKeys(details.lockedOutUser.password)
        await homepage.loginButton.click()
        expect(await homepage.errorMessage.getText()).toBe(details.lockedOutUser.error)
    })

    it('When the input details is correct, move to another page', async () => {
        browser.waitForAngularEnabled(false);
        let homepage = new homePage()
        await homepage.inputUsername.sendKeys(details.correctDetails.username)
        await homepage.inputPassword.sendKeys(details.correctDetails.password)
        await homepage.loginButton.click()
        expect(await browser.getCurrentUrl()).toContain("inventory")
    })

})
