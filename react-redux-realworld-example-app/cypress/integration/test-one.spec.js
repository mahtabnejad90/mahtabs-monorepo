/// <reference types="cypress" />

describe('example to-do app', () => {
    it('test url', () => {
    cy.visit('http://localhost:4100')
  });
      it('test title', () => {

    cy.should('eq','logo-font', 'conduit')
  });
})