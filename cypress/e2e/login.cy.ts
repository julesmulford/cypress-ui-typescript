import { LoginPage } from '../pages/login.page';
import { testData } from '../data/test-data';

describe('Login Tests', { tags: ['@regression'] }, () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigate();
  });

  it('should display login form elements', { tags: ['@smoke'] }, () => {
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should login successfully with valid credentials @smoke', { tags: ['@smoke'] }, () => {
    const { username, password } = testData.users.admin();
    loginPage.login(username, password);
    loginPage.assertLoggedIn();
  });

  it('should show error for invalid password', () => {
    const { username } = testData.users.admin();
    loginPage.login(username, 'wrongpassword');
    loginPage.assertErrorVisible();
  });

  it('should show error for empty username', () => {
    cy.get('button[type="submit"]').click();
    loginPage.getRequiredFieldErrors().should('have.length.greaterThan', 0);
  });

  it('should show error for invalid credentials', () => {
    const { username, password } = testData.users.invalid();
    loginPage.login(username, password);
    loginPage.assertErrorVisible();
  });
});
