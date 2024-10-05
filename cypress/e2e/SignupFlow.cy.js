import Signup from "../support/Signup.js";
import SingupData from "../fixtures/SingupData.json";

describe("Signup Flow", () => {
  let signup;

  beforeEach(() => {
    signup = new Signup();
    signup.visit();
  });

  it("completes the signup flow", () => {
    signup.getLogo().should("be.visible");
    cy.fixture('SingupData.json').then((data) => {
      const { validSignup } = data;
    //Page 1
    signup.getSelectBuyerButton().click();
    signup.fillCompanyNameInput(validSignup.companyName);
    signup.fillEmailInput(validSignup.email);
    signup.fillFirstNameInput(validSignup.firstName);
    signup.fillLastNameInput(validSignup.lastName);
    signup.getSignUpButton().click();

    signup.getCreateAccountButton().should("be.visible");
    //Page 2
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

    signup.getHeading().should("contain", "CEEZER");
    signup.getCreateAccountButton().should("not.exist");
  });

});
});
