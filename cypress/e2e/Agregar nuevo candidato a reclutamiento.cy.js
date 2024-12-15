describe("Agregando un nuevo candidato a reclutamiento", () => {
  it("Debería iniciar sesión, navegar al módulo de reclutamiento y agregar un candidato con CV", () => {
      // Crear dinámicamente un archivo CV
      

      // Navega a la URL de inicio de sesión
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

      // Ingresa las credenciales y envía el formulario de inicio de sesión
      cy.get('input[name="username"]').should("be.visible").type("Admin"); // Usuario
      cy.get('input[name="password"]').should("be.visible").type("admin123"); // Contraseña
      cy.get('button[type="submit"]').should("be.visible").click();

      // Navega al módulo de Reclutamiento
      cy.get(':nth-child(5) > .oxd-main-menu-item').should("be.visible").click();

      // Haz clic en el botón "Agregar"
      cy.get(".orangehrm-header-container > .oxd-button").should("be.visible").click();

      // Completa los datos basicos (Nombre,apellidos,telefono,correo)
      cy.get(".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input").should("be.visible").type("Jeziel");
      cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").should("be.visible").type("Oviedo");
      cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").should("be.visible").type("Cerdas");
      cy.get(":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").type("jezi@23gmail.com");
      cy.get(".oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("123456789");
      // Seleccionar un puesto (dropdown)
      cy.get(".oxd-select-text--after > .oxd-icon").should("be.visible").click();
      cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // Selecciona la segunda opción (ejemplo)

      // Adjuntar el archivo de CV con force: true
      cy.get('input[type="file"]').should("exist").selectFile("cypress/fixtures/candidato_cv.pdf", { force: true });
      //Verificar que todo este correcto
      cy.get(".oxd-checkbox-input > .oxd-icon").click();
      cy.get(".oxd-button--secondary").click();
      cy.get(".--visited").click();
      
    });
});