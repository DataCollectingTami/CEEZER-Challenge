import Signup from "../support/Signup.js";

describe("Signup Visual Tests", () => {
  let signup;

  beforeEach(() => {
    signup = new Signup();
    signup.visit();
    cy.viewport(1000, 660);
  });

  it("visually tests the CEEZER logo", () => {
    signup.getLogo().matchImageSnapshot('Desktop-Logo', {failureThreshold: 0.4,
      blur: 10});
  });
  
  it("visually tests the first page of signup", () => {
    cy.matchImageSnapshot('Desktop-signup-page-1', {failureThreshold: 0.4,
      blur: 10});
    
  });

  it("visually tests the second page of signup", () => {
      cy.CompletePage1();
      cy.matchImageSnapshot('Desktop-signup-page-2', {failureThreshold: 0.4,
        blur: 10});
  });
});
