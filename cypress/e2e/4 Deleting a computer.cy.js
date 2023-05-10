// In this test, I will delete a computer present in the list of the webpage

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

  // I will search for a computer in the searchbox, and proceed with the deletion

  it('Click on a currently created computer and delete it', () => {
    cy.contains('ACE').click()
    cy.contains('Delete this computer').click({force: true})
    cy.contains('Done ! Computer ACE has been deleted')
  })
  
})
