import { SideMenuComponent } from '../components/side-menu.component';

describe('Navigation Tests', { tags: ['@regression'] }, () => {
  let sideMenu: SideMenuComponent;

  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit('/web/index.php/dashboard/index');
    sideMenu = new SideMenuComponent();
  });

  it('should navigate to PIM module @smoke', { tags: ['@smoke'] }, () => {
    sideMenu.navigateToPIM();
    cy.url().should('include', '/pim/');
  });

  it('should navigate to Leave module', () => {
    sideMenu.navigateToLeave();
    cy.url().should('include', '/leave/');
  });

  it('should navigate to Recruitment module', () => {
    sideMenu.navigateToRecruitment();
    cy.url().should('include', '/recruitment/');
  });

  it('should navigate to My Info module', () => {
    sideMenu.navigateToMyInfo();
    cy.url().should('include', '/pim/viewMyDetails');
  });
});
