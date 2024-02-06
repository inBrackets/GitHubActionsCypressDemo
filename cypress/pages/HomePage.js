class HomePage {
  get burgerMenu() {
    return cy.get('[data-element-type="burger-menu"]');
  }
  get logout() {
    return cy.get(".next-bve2vl").contains("Log out");
  }
  logoutUser() {
    this.burgerMenu.click();
    this.logout.click();
  }
}
export default HomePage;
