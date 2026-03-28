import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  private readonly breadcrumb = '.oxd-topbar-header-breadcrumb h6';
  private readonly userDropdown = '.oxd-userdropdown-tab';
  private readonly userDropdownMenu = '.oxd-userdropdown-dropdown';
  private readonly quickLaunchItems = '.oxd-quick-launch-card';
  private readonly dashboardWidgets = '.oxd-grid-item';

  assertOnDashboard(): void {
    this.waitForUrl('/dashboard/index');
    cy.get(this.breadcrumb).should('contain.text', 'Dashboard');
  }

  getPageTitle(): Cypress.Chainable<string> {
    return cy.get(this.breadcrumb).invoke('text');
  }

  openUserDropdown(): void {
    cy.get(this.userDropdown).click();
  }

  getUserDropdownMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.userDropdownMenu);
  }

  getQuickLaunchItems(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.quickLaunchItems);
  }

  getDashboardWidgets(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.dashboardWidgets);
  }

  assertUserDropdownVisible(): void {
    this.openUserDropdown();
    cy.get(this.userDropdownMenu).should('be.visible');
  }
}
