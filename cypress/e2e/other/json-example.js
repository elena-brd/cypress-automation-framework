/// <reference types="cypress" />

describe('JSON Object', () => {
  it('Json Object Examples', () => {
    const exampleObject = { "key": "Tim", "key2": "Jones" };
    const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];
    const exampleArrayOfobjects = [
      { "key": "Luke" },
      { "key2": "Tom" },
      { "key3": "Emma" },
    ];

    const users = {
      "firstName": "Joe",
      "lastName": "Blogs",
      "age": 30,
      "Students": [
        {
          "firstName": "Jim",
          "lastName": "Blogs2"
        },
        {
          "firstName": "Sara",
          "lastName": "Parker"
        }
      ]
    };

    // extract values from the JSON Object
    cy.log(exampleObject["key"]); // Tim
    cy.log(exampleObject["key2"]); // Jones
    cy.log(exampleObject.key2); // Jones

    cy.log(exampleArrayOfValues[0]); // Sophie
    cy.log(exampleArrayOfValues[1]); // Rose

    cy.log(users.Students[0].lastName);

    cy.log(exampleArrayOfobjects[0].key);
    cy.log(exampleArrayOfobjects[1].key2);
    cy.log(exampleArrayOfobjects[2].key3);

  });
})
