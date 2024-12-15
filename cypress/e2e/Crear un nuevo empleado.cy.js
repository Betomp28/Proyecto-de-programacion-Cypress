describe('Crear un nuevo empleado', () => {
  before(() => {
    // Iniciar sesión en la aplicación
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin'); // Usuario predeterminado
    cy.get('[name="password"]').type('admin123'); // Contraseña predeterminada
    cy.get('button[type="submit"]').click();
  });

  it('Debe permitir crear un nuevo empleado con nombre completo y ID', () => {
    // Navegar a la sección "PIM" y agregar un nuevo empleado
    cy.contains('PIM').click();

    // Ajuste: Usar un selector basado en el rol de enlace
    cy.contains('a', 'Add Employee').click(); // Localiza el enlace por texto visible

    // Rellenar el formulario para crear un nuevo empleado
    cy.get('input[placeholder="First Name"]').type('John'); // Nombre
    cy.get('input[placeholder="Middle Name"]').type('perebbbbz.'); // Segundo Nombre
    cy.get('input[placeholder="Last Name"]').type('Doe'); // Apellido
    document.querySelector('input[placeholder="Employee Id"]');


    // Presionar el botón "Save"
    cy.contains('button', 'Save').click();

    
  });

});