import Signup from "./Signup.js";
import SignupData from "../fixtures/SingupData.json";

const signup = new Signup();
const { validSignup } = SignupData;


Cypress.Commands.add('skipMobile', (test) => {
    cy.window().then((win) => {
        const viewportWidth = win.innerWidth;
        if (viewportWidth > 900) {
            test();
        } else {
            cy.log('Test skipped on Mobile');
        }
    });
});

Cypress.Commands.add('CompletePage1', () => {
    signup.getSelectBuyerButton().click();
    signup.fillCompanyNameInput(validSignup.companyName);
    signup.fillEmailInput(validSignup.email);
    signup.fillFirstNameInput(validSignup.firstName);
    signup.fillLastNameInput(validSignup.lastName);
    signup.getSignUpButton().click();
});

Cypress.Commands.add('CompletePage2', () => {
    signup.fillRegistrationNumberInput(validSignup.registrationNumber);
    signup.fillVatNumberInput(validSignup.vatNumber);
    signup.fillAddressInput(validSignup.address);
    signup.fillCityInput(validSignup.city);
    signup.fillZipInput(validSignup.zip);
    signup.getCountrySelect().click();
    signup.getCountrySelectItem(0).click();
    signup.getIndustrySelect().click();
    signup.getIndustrySelectItem(0).click();
    signup.getCreateAccountButton().click();
});

Cypress.Commands.add('CompletePage1InvalidEmail', (wrongEmail) => {
    signup.getSelectBuyerButton().click();
    signup.fillCompanyNameInput(validSignup.companyName);
    signup.fillEmailInput(wrongEmail);
    signup.fillFirstNameInput(validSignup.firstName);
    signup.fillLastNameInput(validSignup.lastName);
    signup.getSignUpButton().click();
});

