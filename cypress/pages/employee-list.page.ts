import { BasePage } from './base.page';

export class EmployeeListPage extends BasePage {
  private readonly pageTitle = '.oxd-topbar-header-breadcrumb h6';
  private readonly searchInput = '[placeholder="Type for hints..."]';
  private readonly searchButton = 'button[type="submit"]';
  private readonly addButton = '.orangehrm-header-container button';
  private readonly tableRows = '.oxd-table-body .oxd-table-row';
  private readonly noRecordsFound = '.oxd-text--span';

  navigate(): void {
    this.visit('/web/index.php/pim/viewEmployeeList');
  }

  assertOnPage(): void {
    this.waitForUrl('/pim/viewEmployeeList');
    cy.get(this.pageTitle).should('contain.text', 'Employee Information');
  }

  searchByName(name: string): void {
    cy.get(this.searchInput).first().clear().type(name);
    cy.get(this.searchButton).click();
    cy.wait(1000);
  }

  clickAddEmployee(): void {
    cy.get(this.addButton).contains('Add Employee').click();
  }

  getTableRows(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.tableRows);
  }

  assertHasResults(): void {
    cy.get(this.tableRows).should('have.length.greaterThan', 0);
  }
}
