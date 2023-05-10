  //This test is pretty similar to the last one, but we ensure here we can't add a new computer if we enter wrong data in the "date" fields

describe('Adding a computer with wrong date', () => {
  beforeEach(() => {
    cy.visit('https://computer-database.gatling.io/computers')
  })

  //We ensure the most important elements in the page are present

  it('The main buttons of the webpage are present', () => {
    cy.get('[class=fill]').should('have.text', 'Computer databaseComputer database')
    cy.get('[id=add]').should('have.text', 'Add a new computer')
    cy.get('[type=submit]').should('be.visible')
  })

  //Here we add the computer entering wrong values in the dates

  it('Enter a new computer (wrong values in date fields)', () => {
    cy.get('[id=add]').click()
    cy.get('[class="btn primary"]').should('have.value', 'Create this computer')
    cy.get('#name').type('Toshiba C700')
    cy.get('#introduced').type('1234')
    cy.get('#discontinued').type('ABCD')
    cy.get('#company').select("Amiga Corporation")
    cy.get('[class="btn primary"]').click()
    cy.get('[class="help-inline"]').should('be.visible')
})
})