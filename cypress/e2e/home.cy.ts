/// <reference types="cypress" />

describe('should access home', () => {
  it('should access homepage "/"', () => {
    cy.visit('/')
  })
})
