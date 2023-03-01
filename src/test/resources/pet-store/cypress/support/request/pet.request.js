export const PetRequests = {
  get: (id) => cy.request(`https://petstore3.swagger.io/api/v3/pet/${id}`),
  post: (user) => cy.request('POST', `https://petstore3.swagger.io/api/v3/pet`, user),
};
