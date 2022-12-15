/// <reference types="cypress" />

describe('<Login />', () => {
    it('<Login /> - Validación, alertas y logear usuario', () => {
      cy.visit('/')
    
      // Comprobar que sale alerta sin rellenar nada
      cy.get('input[type=submit]')
        .should('exist')
        .should('have.class', 'btn-primario')
        .click()
      
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'Todos los campos son obligatorios')
  
      // Comprobar que sale alerta si el usuario no existe
      cy.get('input[name=email]').type('cypres@email.com')
      cy.get('input[name=password]').type('dentelladass')
  
      cy.get('input[type=submit]').click()
  
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'El usuario no existe')

      // Comprobar que sale alerta si la contraseña no es valida
      cy.get('input[name=email]').clear().type('cypress@email.com')
      cy.get('input[name=password]').clear().type('dentelladass')
  
      cy.get('input[type=submit]').click()
  
      cy.get('.alerta')
        .should('exist')
        .should('have.text', 'Password Incorrecto')

      // Comprobar que logea bien con los datos correctos
      cy.get('input[name=email]').clear().type('cypress@email.com')
      cy.get('input[name=password]').clear().type('dentelladas')
  
      cy.get('input[type=submit]').click()
  
      cy.get('main .contenedor-tareas h2')
        .should('exist')
        .should('have.text', 'Selecciona un proyecto')
      
      cy.get('.cerrar-sesion')
        .should('exist')
        .click()
    })
  })