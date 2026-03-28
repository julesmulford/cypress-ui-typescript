import { BasePage } from './base.page';

export class AddEmployeePage extends BasePage {
  private readonly firstNameInput = 'input[name="firstName"]';
  private readonly middleNameInput = 'input[name="middleName"]';
  private readonly lastNameInput = 'input[name="lastName"]';
  private readonly saveButton = 'button[type="submit"]';
  private readonly pageTitle = '.orangehrm-main-title';

  assertOnPage(): void {
    this.waitForUrl('/pim/addEmployee');
    cy.get(this.pageTitle).should('contain.text', 'Add Employee');
  }

  fillFirstName(name: string): void {
    cy.get(this.firstNameInput).clear().type(name);
  }

  fillMiddleName(name: string): void {
    cy.get(this.middleNameInput).clear().type(name);
  }

  fillLastName(name: string): void {
    cy.get(this.lastNameInput).clear().type(name);
  }

  fillEmployeeDetails(firstName: string, middleName: string, lastName: string): void {
    this.fillFirstName(firstName);
    this.fillMiddleName(middleName);
    this.fillLastName(lastName);
  }

  clickSave(): void {
    cy.get(this.saveButton).click();
  }
}
