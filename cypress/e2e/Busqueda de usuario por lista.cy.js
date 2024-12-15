describe('Búsqueda de usuarios en la Lista de Usuarios', () => {
  before(() => {
    // Visitar la página de inicio de sesión
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Iniciar sesión como administrador
    cy.get('input[name="username"]').type('Admin'); // Cambia según tu usuario
    cy.get('input[name="password"]').type('admin123'); // Cambia según tu contraseña
    cy.get('button[type="submit"]').click();
  });

  it('Debería buscar usuarios y mostrar resultados correctos', () => {
    // Navegar a la sección de gestión de usuarios
    cy.contains('Admin').click();

    // Paso 1: Buscar un usuario existente
    const existingUser  = 'admin'; // Nombre de usuario válido
    cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input')
      .type(existingUser );
    cy.get('button[type="submit"]').click(); // Presionar el botón de búsqueda
    cy.wait(4000); // Esperar 2 segundos para que el formulario se cargue
    

    // Paso 2: Buscar un usuario inexistente
    const nonExistingUser  = 'Usuario Inexistente'; // Nombre de usuario que no existe
    cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input')
      .clear()
      .type(nonExistingUser );
    cy.get('button[type="submit"]').click(); // Presionar el botón de búsqueda

    
  });
});