/// <reference types="cypress" />

describe('<NuevaCuenta />', () => {
    it('<NuevaCuenta /> - Validación, alertas y crear nueva cuenta', () => {
      cy.visit('/nueva-cuenta')
    
      // Comprobar que sale alerta sin rellenar nada
      cy.get('input[type=submit')
        .should('exist')
        .should('have.class', 'btn-primario')
        .click()
      
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'Todos los campos son obligatorios')
  
      // Comprobar que sale alerta si la contraseña no es valida
      cy.get('input[name=nombre]').type('Cypress')
      cy.get('input[name=email]').type('cypress@email.com')
      cy.get('input[name=password]').type('asd')
      cy.get('input[name=confirmar]').type('asd')
  
      cy.get('input[type=submit').click()
  
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'El password debe ser de al menos 6 caracteres')
  
      // Comprobar que sale alerta si las contraseñas no son iguales
      cy.get('input[name=password]').clear().type('dentelladas')
      cy.get('input[name=confirmar]').clear().type('dentelladass')
  
      cy.get('input[type=submit').click()
  
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'Los passwords no son iguales')

      // Comprobar que se registra bien con datos correctos
      cy.get('input[name=confirmar]').clear().type('dentelladas')
      cy.get('input[type=submit').click()

      cy.get('main .contenedor-tareas h2')
        .should('exist')
        .should('have.text', 'Selecciona un proyecto')

      // Comprobarq ue cierra sesion y vuelve al login bien
      cy.get('.cerrar-sesion')
        .should('exist')
        .click()

    //   cy.get('[data-cy=titulo]').should('have.text', 'Iniciar Sesión')
    })

    it('<NuevaCuenta /> - Revisar usuario duplicado', () => {
        cy.visit('/nueva-cuenta')

        cy.get('input[name=nombre]').type('Cypress')
        cy.get('input[name=email]').type('cypress@email.com')
        cy.get('input[name=password]').type('asdasd')
        cy.get('input[name=confirmar]').type('asdasd')

        cy.get('input[type=submit').click()

        cy.get('.alerta')
            .should('exist')
            .should('have.text', 'El usuario ya existe')
        
    })
  })