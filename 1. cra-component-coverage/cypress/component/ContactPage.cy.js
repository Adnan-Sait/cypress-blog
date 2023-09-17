import React from "react";
import Contact from "../../src/Contact";
import { Link } from "react-router-dom";

describe("ContactPage.cy.js", () => {
  it("should be mounted through routing", () => {
    const routes = [
      {
        path: "/contact/:id",
        element: <Contact />,
      },
    ];

    cy.mount(
      <div>
        <Link id="nav-link" to={`/contact/1`}>
          Contact Page
        </Link>
      </div>,
      { otherRoutes: routes }
    );

    cy.get("#nav-link").click();
    cy.contains("Contact Store").should("be.visible");
  });
});
