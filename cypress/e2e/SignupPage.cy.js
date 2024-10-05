import Signup from "../support/Signup.js";

describe("Signup Page", () => {
  let signup;

  beforeEach(() => {
    signup = new Signup();
    signup.visit();
  });

  describe("Valid Signup Actions", () => {
    it("toggles between Buyer and Supplier", () => {
       //toggle buyer 
      signup.getSelectBuyerButton().click();
      signup.getSelectBuyerButton().should("have.class", "css-yjcvqi");
      cy.skipMobile(() => {
        cy.contains("Future-proof carbon credit portfolios—guided by data.").should("be.visible");
      }); // only visible on desktop
      //toggle supplier
      signup.getSelectSupplierButton().click();
      signup.getSelectSupplierButton().should("have.class", "css-yjcvqi");
      cy.skipMobile(() => {
        cy.contains("Join global net-zero portfolios—seamlessly.").should("be.visible");
      }); // only visible on desktop
    });

    it("navigates to the login page", () => {
      //via login button
        signup.getLoginButton().click();
      cy.url().should("include", "/sign-in");
      //via logo
      signup.getLogo().click();
      cy.url().should("include", "/sign-in");
    });
    
    it("tests back button on Page 2 and checks if data is saved", () => {
      cy.CompletePage1();
      signup.getBackButton().should("be.visible");

      signup.getBackButton().click();
      //assert that we are on Page 1
      signup.getSignUpButton().should("be.visible");
      signup.getCreateAccountButton().should("not.exist");
      //assert that the data is saved
      signup.getCompanyNameInput().invoke("attr", "value").should("not.be.empty");
      signup.getEmailInput().invoke("attr", "value").should("not.be.empty");
      signup.getFirstNameInput().invoke("attr", "value").should("not.be.empty");
      signup.getLastNameInput().invoke("attr", "value").should("not.be.empty");
    });

  });

  describe("Field Validations", () => {
    it("displays validation error when email format is invalid", () => {
      cy.CompletePage1InvalidEmail("tami email com");
      signup.getSignUpButton().click();
      signup.getEmailInput().invoke("attr", "aria-invalid").should("eq", "true");
      cy.contains("Please enter a company email address").should("be.visible");
    });

    it("displays validation error when personal email is used", () => {
      cy.CompletePage1InvalidEmail("tami@gmail.com");
      signup.getSignUpButton().click();
      signup.getEmailInput().invoke("attr", "aria-invalid").should("eq", "true");
      cy.contains("Please enter a company email address").should("be.visible");
      //TODO: extend to check other emails that are not allowed
    });
    
    it("checks validation for empty fields on Page 1", () => {
      const fields = [{name: "CompanyName", message: "company name", value: "Tami Tests Inc"}, {name: "Email", message: "email", value: "tami@testinc.com"}, {name: "FirstName", message: "first name", value: "Tami"}, {name: "LastName"  , message: "last name", value: "Tests"}]
      
      signup.getSignUpButton().click();
      //check validation error for empty fields
      cy.contains("Please select account type").should("be.visible");

      fields.forEach(field => {
        signup[`get${field.name}Input`]().invoke("attr", "aria-invalid").should("eq", "true");
        cy.contains(`Please enter your ${field.message}`).should("be.visible");
      });
      //check that error is hidden when field is filled
      fields.forEach(field => {
        signup[`fill${field.name}Input`](field.value);
        signup.getSignUpButton().click();
        signup[`get${field.name}Input`]().invoke("attr", "aria-invalid").should("not.exist");
        cy.contains(`Please enter your ${field.message}`).should("not.exist");
      });
      //check account type error is hidden when toggled
      signup.getLastNameInput().clear()
      signup.getSelectBuyerButton().click();
      signup.getSignUpButton().click();
      cy.contains("Please select account type").should("not.exist");
    });
    
  });

 
});
