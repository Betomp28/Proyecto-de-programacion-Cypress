describe('Edit info de empleado', () => {
  before(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
      cy.get('button[type="submit"]').click();
  });

  it('Deberia lograr editar la info correctamente', () => {
      cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
      cy.get(":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon").click();

      // Verificar que estamos en la página correcta
      cy.url().should('include', '/pim/viewPersonalDetails');

      // Editar información del empleado
      cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").clear().type("Jeziel");
      cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").clear().type("Oviedo");
      cy.get(":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").clear().type("12mdh1j2");
      cy.get(":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label").click();

      // Guardar cambios
      cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button").click();

      

      // Verificar la información actualizada
      cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").should('have.value', 'Jeziel');
      cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").should('have.value', 'Oviedo');
      cy.get(":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").should('have.value', '12mdh1j2');
    });
});