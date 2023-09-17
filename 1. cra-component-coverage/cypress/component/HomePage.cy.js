import React from "react";
import HomePage from "../../src/HomePage";

describe("HomePage.cy.js", () => {
  it("should be mounted", () => {
    cy.mount(<HomePage />);
    cy.get(".App").should("be.visible");
  });
});
