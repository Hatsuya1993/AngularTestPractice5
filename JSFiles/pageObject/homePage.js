"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const protractor_1 = require("protractor");
class homePage {
    constructor() {
        this.website = protractor_1.browser.get("https://www.saucedemo.com/");
        this.inputUsername = protractor_1.$("#user-name");
        this.inputPassword = protractor_1.$('#password');
        this.loginButton = protractor_1.$('#login-button');
        this.errorMessage = protractor_1.$('.error-message-container.error h3');
        this.errorMessageClose = protractor_1.$('button.error-button');
    }
}
exports.homePage = homePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2hvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFxRTtBQUVyRSxNQUFhLFFBQVE7SUFBckI7UUFDSSxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUN6RCxrQkFBYSxHQUFtQixjQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDL0Msa0JBQWEsR0FBbUIsY0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlDLGdCQUFXLEdBQW1CLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNoRCxpQkFBWSxHQUFtQixjQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUNyRSxzQkFBaUIsR0FBbUIsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDaEUsQ0FBQztDQUFBO0FBUEQsNEJBT0MifQ==