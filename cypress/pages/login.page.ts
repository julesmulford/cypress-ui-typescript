import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private readonly usernameInput = 'input[name="username"]';
  private readonly passwordInput = 'input[name="password"]';
  private readonly submitButton = 'button[type="submit"]';
  private readonly errorMessage = '.oxd-alert-content-text';
  private readonly requiredField = '.oxd-input-field-error-message';

  navigate(): void {
    this.visit('/web/index.php/auth/login');
  }

  enterUsername(username: string): void {
    cy.get(this.usernameInput).clear().type(username);
  }

  enterPassword(password: string): void {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickSubmit(): void {
    cy.get(this.submitButton).click();
  }

  login(username: string, password: string): void {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickSubmit();
  }

  getErrorMessage(): Cypress.Chainable<string> {
    return cy.get(this.errorMessage).invoke('text');
  }

  getRequiredFieldErrors(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.requiredField);
  }

  assertOnLoginPage(): void {
    cy.url().should('include', '/auth/login');
    cy.get(this.submitButton).should('be.visible');
  }

  assertLoggedIn(): void {
    this.waitForUrl('/dashboard/index');
  }

  assertErrorVisible(): void {
    cy.get(this.errorMessage).should('be.visible');
  }
}
