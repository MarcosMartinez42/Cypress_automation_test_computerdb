// First I add the webpage we're visiting everytime we start a test 
 // I'll declare a few constants just to simplify the code

describe('Adding a computer', () => {
  beforeEach(() => {
    cy.visit('https://computer-database.gatling.io/computers')
  })

// Here I ensure the main buttons of the webpage are present, to ensure we're in the right web

  it('The main buttons of the webpage are present', () => {
    cy.get('[class=fill]').should('have.text', 'Computer databaseComputer database')
    cy.get('[id=add]').should('have.text', 'Add a new computer')
    cy.get('[type=submit]').should('be.visible')
  })

  // Now I'll perform the happy path of the flow -adding a new computer-

  it('Enter a new computer', () => {
    cy.get('[id=add]').click()
    cy.get('[class="btn primary"]').should('have.value', 'Create this computer')
    cy.get('#name').type('Toshiba C700')
    cy.get('#introduced').type('1994-02-01')
    cy.get('#discontinued').type('1995-03-24')
    cy.get('#company').select("Amiga Corporation")
    cy.get('[class="btn primary"]').click()
    cy.get('[class="alert-message warning"]').should('be.visible')
  })

  // Then I will search for the computer we just created. I will not create an assert to validate-
  // -the new computer was created, because the webpage doesn't save new created computers 

  it('Search for the new computer', () => {
    cy.get('#searchbox').type('Toshiba C700')
    cy.get('[type=submit]').click()
  })
})