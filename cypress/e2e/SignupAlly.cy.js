import Signup from "../support/Signup.js";
import "cypress-axe";

function logViolations(violations, page) {
  cy.task("logToFile", {
    message: `Accessibility violations  in ${page}: ${violations.length}\n${violations.map(v => '* impact: ' + v.impact + ' - '+ v.description).join('\n')}`,
    filename: `allyReport_${new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12)}.txt`
  });
}

describe("Signup Page Accessibility", () => {
  let signup;

  beforeEach(() => {
    signup = new Signup();
    signup.visit();
    cy.injectAxe();
  });

  it("checks and logs all accessibility violations on load for Page 1", () => {
    cy.checkA11y(
      null,
      null, (violations) => logViolations(violations, "Page 1"),
     true
    );
  });

  it("checks and logs all accessibility violations on load for Page 2   ", () => {
    cy.CompletePage1();
    cy.checkA11y(
      null,
      null, (violations) => logViolations(violations, "Page 2"),
     true
    );
  });
});
