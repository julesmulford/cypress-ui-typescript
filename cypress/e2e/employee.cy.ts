import { EmployeeListPage } from '../pages/employee-list.page';
import { AddEmployeePage } from '../pages/add-employee.page';
import { testData } from '../data/test-data';

describe('Employee Tests', { tags: ['@regression'] }, () => {
  let employeeListPage: EmployeeListPage;
  let addEmployeePage: AddEmployeePage;

  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit('/web/index.php/pim/viewEmployeeList');
    employeeListPage = new EmployeeListPage();
    addEmployeePage = new AddEmployeePage();
  });

  it('should navigate to employee list @smoke', { tags: ['@smoke'] }, () => {
    employeeListPage.assertOnPage();
  });

  it('should display employee records', () => {
    employeeListPage.assertHasResults();
  });

  it('should search for employee', () => {
    employeeListPage.searchByName('Admin');
    employeeListPage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('should navigate to add employee page', () => {
    employeeListPage.clickAddEmployee();
    addEmployeePage.assertOnPage();
  });

  it('should add a new employee', () => {
    const employee = testData.employees.new();
    employeeListPage.clickAddEmployee();
    addEmployeePage.assertOnPage();
    addEmployeePage.fillEmployeeDetails(employee.firstName, employee.middleName, employee.lastName);
    addEmployeePage.clickSave();
    cy.url().should('include', '/pim/viewPersonalDetails');
  });
});
