import Signup from "../support/Signup.js";

describe("Signup Server Errors", () => {
  let signup;

  beforeEach(() => {
    signup = new Signup();
    signup.visit();
  });

  it("handles 500 error on signup attempt", () => {
    
    cy.intercept('POST', '/api/v1/open/auth/sign-up', {
      statusCode: 500,
    }).as('signupRequest');

    cy.CompletePage1();
    cy.CompletePage2();

    signup.getHeading().should('contain', 'Something went wrong');
    
  });

  it("displays **No Options** placeholder when countries are not loaded", () => {
    cy.intercept('GET', '/api/v1/open/filters/countries', {
      statusCode: 400,
    }).as('countriesRequest');

    cy.CompletePage1();

    signup.getCountrySelect().click();
    cy.contains('No options').should('be.visible');
  });

  it("displays loading state during slow network request for signup", () => {
    cy.intercept('POST', '/api/v1/open/auth/sign-up', (req) => {
      req.on('response', (res) => {
        res.setDelay(5000);
      });
    }).as('slowSignupRequest');

    cy.CompletePage1();
    cy.CompletePage2();

    // Check if button is disabled while loading
    signup.getCreateAccountButton().should('be.disabled');

    // Wait for the request
    cy.wait('@slowSignupRequest');

    // Verify that the user is redirected to the expected page after signup
    signup.getHeading().should('contain', 'CEEZER');
    signup.getCreateAccountButton().should('not.exist');
  });

  
});
