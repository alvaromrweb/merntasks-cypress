/// <reference types="cypress" />

describe('Administrador>', () => {
    it('<Login /> - Logearse, crear proyecto', () => {
        cy.visit('/')

        // Comprobar que logea bien con los datos correctos
        cy.get('input[name=email]').clear().type('cypress@email.com')
        cy.get('input[name=password]').clear().type('dentelladas')
    
        cy.get('input[type=submit]').click()

        cy.get('[data-cy=crear-proyecto-btn]')
                .should('exist')
                .click()
      
        // Comprobar alerta si esta vacio el nombre
        cy.get('[data-cy=crear-proyecto-form] input[type=submit]').click()

        cy.get('.mensaje.error')
            .should('exist')
            .should('have.text', 'El nombre del Proyecto es obligatorio')

        // Crear proyecto
        cy.get('[data-cy=crear-proyecto-form] input[name=nombre]').type('Proyecto test Cypress')
        cy.get('[data-cy=crear-proyecto-form] input[type=submit]').click()

        cy.get('.listado-proyectos li:nth-child(1) button').click()


        // Validacion y creacion de tareas
        // Comprobar alerta si esta vacio el nombre
        cy.get('.form-tarea input[type=submit]').click()
        cy.get('.mensaje.error')
            .should('exist')
            .should('have.text', 'El nombre de la tarea es obligatorio')

        // Crear tarea
        cy.get('.form-tarea input[name=nombre]').type('Tarea Cypress')
        cy.get('.form-tarea input[type=submit]').click()

        // Completar, descompletar, editar y eliminar tareas
        cy.get('.listado-tareas li:nth-child(1) .incompleto')
            .should('exist')
            .should('have.text', 'Incompleto')
            .click()

        cy.get('.listado-tareas li:nth-child(1) .completo')
            .should('exist')
            .should('have.text', 'Completo')
            .click()

        // Editar tarea
        cy.get('.listado-tareas li:nth-child(1) .editar-tarea').click()

        cy.get('.form-tarea input[name=nombre]').clear().type('Tarea Cypress (editada)')
        cy.get('.form-tarea input[type=submit]').click()

        // Eliminar tarea
        cy.get('.listado-tareas li:nth-child(1) .eliminar-tarea').click()

        // Eliminar proyecto
        cy.get('main .eliminar-proyecto').click()
    })

  })