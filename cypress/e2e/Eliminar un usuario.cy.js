describe('Eliminar un empleado en PIM', () => {
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // URL de login
      cy.get('input[name="username"]').type('Admin'); // Usuario
      cy.get('input[name="password"]').type('admin123'); // Contraseña
      cy.get('button[type="submit"]').click();

      // Verifica que la URL después de login sea la de Dashboard
      cy.url().should('include', '/dashboard/index'); // Verifica que estés en el dashboard

      // Verifica que el menú de PIM esté visible antes de hacer clic
      cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click();  // Selecciona el menú de PIM
  });

  it('Debería eliminar un empleado correctamente', () => {
      // Verifica que la URL cambie a la página de empleados
      cy.url().should('include', '/pim/viewEmployeeList');  // Verifica que la URL corresponda al listado de empleados

      // Espera que la tabla de empleados esté visible
      cy.get('.oxd-table-filter').should('be.visible');  // Asegura de que la tabla de empleados esté visible

      // Buscar por Nombre
      const searchType = 'nombre';  
      if (searchType === 'nombre') {
          cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Christopher Mcmillan');
      } else if (searchType === 'id') {
          cy.get(':nth-child(2) > .oxd-input').type('0363');  
      }

      cy.get('.oxd-form-actions > .oxd-button--secondary').click();

      // Espera unos segundos para que los resultados se carguen completamente
      cy.wait(2000);  

      // Verificar si el empleado está en la lista
      cy.get('body').then(($body) => {
          if ($body.find('.oxd-table-cell-actions').length > 0) {
              // Si el empleado está presente, hace clic en el botón de eliminar
              cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon')
                  .click();

              // Confirmar la eliminación
              cy.get('body').then(($body) => {
                  if ($body.find('.oxd-button--label-danger').length > 0) {
                      cy.get('.oxd-button--label-danger').click();
                      cy.log('El botón de confirmación fue encontrado y se hizo clic.');
                      cy.contains('Successfully Deleted').should('be.visible');
                  } else {
                      cy.log('El botón de confirmación no está disponible.');
                  }
              });
          } else {
              cy.log('Empleado no encontrado en la lista.');
          }
      });
  });
});