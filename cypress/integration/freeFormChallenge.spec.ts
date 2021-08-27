describe("Free Form Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
  })

  it.only("it displays the next lesson button when an answer is correct and updates the progress sidebar", () => {
    cy.get("#answer").type("cy.get('.new-todo').should('exist')")
    cy.getBySel("free-form-submit").click()
    cy.getBySel("next-lesson-button").should("be.visible")
    cy.getBySel("lesson-complete-1").should("have.class", "bg-indigo-600")
  })

  it("it does not display the next lesson button when an answer is incorrect and does updates the progress sidebar", () => {
    cy.get("#answer").type("cy.get('.new-todo')")
    cy.getBySel("free-form-submit").click()
    cy.getBySel("next-lesson-button").should("be.not.visible")
    cy.getBySel("lesson-upcoming-1").should(
      "have.class",
      "bg-white border-2 border-gray-300"
    )
  })
})

export {}