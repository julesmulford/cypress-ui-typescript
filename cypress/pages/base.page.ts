export abstract class BasePage {
  protected visit(path: string): void {
    cy.visit(path);
  }

  protected getBySelector(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  protected getByRole(role: string, options?: { name?: string | RegExp }): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.findByRole(role, options);
  }

  protected waitForUrl(urlFragment: string): void {
    cy.url().should('include', urlFragment);
  }

  protected waitForVisible(selector: string): void {
    cy.get(selector).should('be.visible');
  }
}
