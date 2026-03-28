export class SideMenuComponent {
  private readonly sidePanel = 'nav.oxd-sidepanel';

  navigateTo(menuItem: string): void {
    cy.get(this.sidePanel).contains(menuItem).click();
    cy.wait(500);
  }

  navigateToPIM(): void {
    this.navigateTo('PIM');
  }

  navigateToLeave(): void {
    this.navigateTo('Leave');
  }

  navigateToRecruitment(): void {
    this.navigateTo('Recruitment');
  }

  navigateToMyInfo(): void {
    this.navigateTo('My Info');
  }

  assertMenuVisible(): void {
    cy.get(this.sidePanel).should('be.visible');
  }
}
