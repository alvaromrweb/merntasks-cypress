/// <reference types="cypress" />

describe('<Formularios />', () => {
  it('<Login /> - Verificar pantalla de inicio', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-cy=titulo]').should('have.text', 'Iniciar Sesión')

    cy.get('[data-cy=form-login').should('exist')

    cy.get('input[type=submit')
      .should('exist')
      .should('have.class', 'btn-primario')

    // Parte de registro
    
  })

  it('<Registro /> - Verificar pantalla de registro', () => {
    cy.visit('/nueva-cuenta')

    cy.get('input[name=password]')
      .should('have.prop', 'type')
      .should('eq', 'password')

    
  })
})