// In this test, I will search for a currently present computer in the list of the webpage

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

  // I will search for a computer in the searchbox, to ensure it's working properly

  it('Search for the new computer', () => {
    cy.get('#searchbox').type('ASCI White')
    cy.get('[type=submit]').click()
    cy.get('[class="computers zebra-striped"]').should('have.text', 'Computer nameIntroducedDiscontinuedCompanyASCI White01 Jan 200101 Jan 2006IBM')
  })
})