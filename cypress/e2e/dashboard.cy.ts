import { DashboardPage } from '../pages/dashboard.page';

describe('Dashboard Tests', { tags: ['@regression'] }, () => {
  let dashboardPage: DashboardPage;

  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit('/web/index.php/dashboard/index');
    dashboardPage = new DashboardPage();
  });

  it('should display dashboard after login @smoke', { tags: ['@smoke'] }, () => {
    dashboardPage.assertOnDashboard();
  });

  it('should display user dropdown menu', () => {
    dashboardPage.assertUserDropdownVisible();
  });

  it('should display dashboard widgets', () => {
    dashboardPage.getDashboardWidgets().should('have.length.greaterThan', 0);
  });
});
