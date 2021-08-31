import {$, browser, ElementFinder, element, by, $$} from 'protractor'

export class homePage {
    website : any = browser.get("https://www.saucedemo.com/")
    inputUsername : ElementFinder = $("#user-name")
    inputPassword : ElementFinder = $('#password')
    loginButton : ElementFinder = $('#login-button') 
    errorMessage : ElementFinder = $('.error-message-container.error h3')
    errorMessageClose : ElementFinder = $('button.error-button')
}